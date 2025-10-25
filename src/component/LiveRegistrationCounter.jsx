import { useState, useEffect } from 'react';
import { FaUsers, FaChartLine } from 'react-icons/fa';

const LiveRegistrationCounter = () => {
  const INITIAL_COUNT = 43678;
  const UPDATE_INTERVAL = 28000; // 28 seconds (random between 10-15 seconds)
  const STORAGE_KEY = 'btc_registration_count';
  const TIMESTAMP_KEY = 'btc_registration_timestamp';

  // Fixed starting date - all users calculate from this point
  // Set to today's date when you deploy (October 25, 2025)
  const BASE_DATE = new Date('2025-10-25T00:00:00').getTime();

  // Average increase per interval (1-4 range = avg 2.5)
  // At ~500 intervals per day, avg 2.5 per interval = ~500 registrations/day
  const AVG_INCREASE_PER_INTERVAL = 1;

  // Calculate global count based on time since BASE_DATE
  const getGlobalBaseCount = () => {
    const now = Date.now();
    const timeSinceBase = now - BASE_DATE;
    const intervalsSinceBase = Math.floor(timeSinceBase / UPDATE_INTERVAL);
    const globalIncrease = Math.floor(intervalsSinceBase * AVG_INCREASE_PER_INTERVAL);
    return INITIAL_COUNT + globalIncrease;
  };

  // Initialize count from localStorage or calculate from global base
  const getInitialCount = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const timestamp = localStorage.getItem(TIMESTAMP_KEY);
    const globalBase = getGlobalBaseCount();

    if (stored && timestamp) {
      const storedCount = parseInt(stored, 10);
      const lastUpdate = parseInt(timestamp, 10);

      // If stored count is significantly behind global count, reset to global
      // This handles cases where user hasn't visited in days
      if (storedCount < globalBase - 100) {
        return globalBase;
      }

      const now = Date.now();
      const timeDiff = now - lastUpdate;
      const missedIntervals = Math.floor(timeDiff / UPDATE_INTERVAL);

      if (missedIntervals > 0) {
        // Add estimated increases for missed intervals
        const estimatedIncrease = Math.floor(missedIntervals * AVG_INCREASE_PER_INTERVAL);
        const newCount = storedCount + estimatedIncrease;

        // Ensure we don't fall too far behind the global count
        return Math.max(newCount, globalBase);
      }

      return Math.max(storedCount, globalBase);
    }

    return globalBase;
  };

  const [registrationCount, setRegistrationCount] = useState(getInitialCount);
  const [recentIncrease, setRecentIncrease] = useState(0);
  const [showPulse, setShowPulse] = useState(false);

  // Save to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, registrationCount.toString());
    localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
  }, [registrationCount]);

  useEffect(() => {
    const scheduleNextUpdate = () => {
      // Random interval between 10-15 seconds
      const randomInterval = Math.floor(Math.random() * 5000) + 10000; // 10-15 seconds
      
      setTimeout(() => {
        // Random increase between 1-4
        const increase = Math.floor(Math.random() * 4) + 1;

        setRegistrationCount(prev => prev + increase);
        setRecentIncrease(increase);
        setShowPulse(true);

        // Remove pulse effect after animation
        setTimeout(() => setShowPulse(false), 1000);
        
        // Schedule next update
        scheduleNextUpdate();
      }, randomInterval);
    };

    // Start the first update
    scheduleNextUpdate();
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
                    People attending Bitcoin Conference 2025
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
                <span className="text-[#FFBF00] font-semibold">Don't miss out!</span> Join thousands of Bitcoin enthusiasts securing their spot right now.
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
            <div className="text-xs text-gray-400 mt-1">Speakers and leaders</div>
          </div>
          <div className="bg-black/50 border border-[#FFBF00]/20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#FFBF00]">100+</div>
            <div className="text-xs text-gray-400 mt-1">Industry Sponsors</div>
          </div>
          <div className="bg-black/50 border border-[#FFBF00]/20 rounded-lg p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#FFBF00]">2 Days</div>
            <div className="text-xs text-gray-400 mt-1">HODLer-Only Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRegistrationCounter;
