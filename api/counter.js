// Global counter API endpoint for Vercel
// This ensures all users see the same registration count

const INITIAL_COUNT = 43000;
const UPDATE_INTERVAL = 19000; // 19 seconds
const BASE_DATE = new Date('2025-10-25T00:00:00').getTime();

// In-memory storage for the counter (resets on server restart)
let globalCounter = null;
let lastUpdateTime = null;

// Calculate the deterministic count based on time
const calculateCount = () => {
  const now = Date.now();
  const timeSinceBase = now - BASE_DATE;
  const intervalsSinceBase = Math.floor(timeSinceBase / UPDATE_INTERVAL);
  
  let totalIncrease = 0;
  for (let i = 0; i <= intervalsSinceBase; i++) {
    const seed = i;
    const randomValue = Math.sin(seed) * 10000;
    const increase = Math.floor((randomValue % 4) + 1);
    totalIncrease += increase;
  }
  
  return INITIAL_COUNT + totalIncrease;
};

// Get the current count (never decreases)
const getCurrentCount = () => {
  const calculatedCount = calculateCount();
  
  // If we don't have a stored count or calculated is higher, use calculated
  if (globalCounter === null || calculatedCount > globalCounter) {
    globalCounter = calculatedCount;
    lastUpdateTime = Date.now();
  }
  
  return globalCounter;
};

export default function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'GET') {
    try {
      const currentCount = getCurrentCount();
      const now = Date.now();
      
      // Calculate the next update time
      const timeSinceBase = now - BASE_DATE;
      const intervalsSinceBase = Math.floor(timeSinceBase / UPDATE_INTERVAL);
      const nextIntervalTime = BASE_DATE + ((intervalsSinceBase + 1) * UPDATE_INTERVAL);
      const timeUntilNext = nextIntervalTime - now;
      
      res.status(200).json({
        count: currentCount,
        nextUpdateIn: Math.max(0, timeUntilNext),
        timestamp: now,
        success: true
      });
    } catch (error) {
      console.error('Counter API error:', error);
      res.status(500).json({
        error: 'Failed to get counter',
        success: false
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
