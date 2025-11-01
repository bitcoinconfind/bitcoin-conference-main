import { useState, useEffect } from 'react';
import { FaUsers, FaChartLine } from 'react-icons/fa';

const LiveRegistrationCounter = () => {
  const INITIAL_COUNT = 50000;
  const UPDATE_INTERVAL = 73000; // 10 seconds
  const BASE_DATE = new Date('2025-11-1T00:00:00').getTime();

  // Calculate global count based on time since BASE_DATE with deterministic increases
  const getGlobalBaseCount = () => {
    const now = Date.now();
    const timeSinceBase = now - BASE_DATE;
    const intervalsSinceBase = Math.floor(timeSinceBase / UPDATE_INTERVAL);
    
    // Use deterministic random based on interval number for consistency
    // Include the current interval in the calculation
    let totalIncrease = 0;
    for (let i = 0; i <= intervalsSinceBase; i++) {
      // Use the same seed every time - this ensures identical results
      const seed = i;
      const randomValue = Math.sin(seed) * 10000;
      // Generate 0-1 registrations per interval (realistic: ~6 per minute, ~360 per hour)
      const increase = Math.floor((Math.abs(randomValue) % 2)); // 0-1 range
      totalIncrease += increase;
    }
    
    return INITIAL_COUNT + totalIncrease;
  };

  // Get initial count - always use calculated count for true global consistency
  const getInitialCount = () => {
    return getGlobalBaseCount();
  };

  const [registrationCount, setRegistrationCount] = useState(getInitialCount);
  const [recentIncrease, setRecentIncrease] = useState(0);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const updateCounter = () => {
      const now = Date.now();
      const timeSinceBase = now - BASE_DATE;
      const intervalsSinceBase = Math.floor(timeSinceBase / UPDATE_INTERVAL);
      
      // Calculate current count with deterministic random increases
      // Include the current interval in the calculation
      let totalIncrease = 0;
      for (let i = 0; i <= intervalsSinceBase; i++) {
        const seed = i;
        const randomValue = Math.sin(seed) * 10000;
        // Generate 0-1 registrations per interval (realistic: ~6 per minute, ~360 per hour)
        const increase = Math.floor((Math.abs(randomValue) % 2)); // 0-1 range
        totalIncrease += increase;
      }
      
      const finalCount = INITIAL_COUNT + totalIncrease;
      
      // Calculate the increase for the current interval only
      const currentIntervalSeed = intervalsSinceBase;
      const currentRandomValue = Math.sin(currentIntervalSeed) * 10000;
      const currentIncrease = Math.floor((Math.abs(currentRandomValue) % 2)); // 0-1 range
      
      // Set the calculated count (deterministic for all users)
      setRegistrationCount(finalCount);
      
      setRecentIncrease(currentIncrease);
      setShowPulse(true);

      // Remove pulse effect after animation
      setTimeout(() => setShowPulse(false), 1000);
    };

    // Update immediately
    updateCounter();
    
    // Then update every UPDATE_INTERVAL (10 seconds)
    const interval = setInterval(updateCounter, UPDATE_INTERVAL);
    
    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="w-full py-12 px-4 bg-black relative overflow-hidden">
      {/* Background gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFBF00]/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Counter Card */}
        <div className="relative group">
          {/* Animated border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFBF00] via-[#F69415] to-[#FFBF00] rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-gradient"></div>

          {/* Card content */}
          <div className="relative bg-black rounded-lg p-8 border-2 border-[#FFBF00]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

              {/* Left side - Icon and label */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#FFBF00] to-[#F69415] flex items-center justify-center ${showPulse ? 'animate-pulse' : ''}`}>
                    <FaUsers className="text-2xl text-black" />
                  </div>
                  {showPulse && (
                    <div className="absolute inset-0 rounded-full bg-[#FFBF00] animate-ping opacity-50"></div>
                  )}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-xl md:text-2xl font-semibold font-inter-semiBold">
                      Live Registrations
                    </h3>
                    <div className="flex items-center gap-1 text-green-400 animate-pulse">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-xs font-medium">LIVE</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    People attending Bitcoin Conference 2026
                  </p>
                </div>
              </div>

              {/* Right side - Counter */}
              <div className="flex flex-col items-center md:items-end">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FFBF00] via-[#F69415] to-[#FFBF00] bg-clip-text text-transparent transition-all duration-500 ${showPulse ? 'scale-110' : 'scale-100'}`}>
                  {formatNumber(registrationCount)}
                </div>

                {/* Recent increase indicator */}
                {recentIncrease > 0 && (
                  <div className={`mt-2 flex items-center gap-1 text-green-400 text-sm font-medium transition-opacity duration-500 ${showPulse ? 'opacity-100' : 'opacity-60'}`}>
                    <FaChartLine className="text-xs" />
                    <span>+{recentIncrease} just registered!</span>
                  </div>
                )}
              </div>

            </div>

            {/* FOMO Message */}
            <div className="mt-6 pt-6 border-t border-[#FFBF00]/20">
              <p className="text-center text-gray-300 text-sm md:text-base">
                <span className="text-[#FFBF00] font-semibold">Don't miss out!</span> Join with thousands of Bitcoin enthusiasts securing their spot right now.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-black/50 border border-[#FFBF00]/20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#FFBF00]">50K+</div>
            <div className="text-xs text-gray-400 mt-1">Expected Attendees</div>
          </div>
          <div className="bg-black/50 border border-[#FFBF00]/20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#FFBF00]">150+</div>
            <div className="text-xs text-gray-400 mt-1">Speakers and Global Leaders</div>
          </div>
          <div className="bg-black/50 border border-[#FFBF00]/20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#FFBF00]">100+</div>
            <div className="text-xs text-gray-400 mt-1">Industry Sponsors</div>
          </div>
          <div className="bg-black/50 border border-[#FFBF00]/20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#FFBF00]">2 Days</div>
            <div className="text-xs text-gray-400 mt-1">Of Networking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRegistrationCounter;
