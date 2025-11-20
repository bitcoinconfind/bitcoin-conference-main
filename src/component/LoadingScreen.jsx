import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Call onLoadComplete after animation completes
    const completeTimer = setTimeout(() => {
      onLoadComplete();
    }, 2800); // Total: 2s display + 0.8s fade out

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'loading-screen--exit' : ''}`}>
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      {/* Animated grid background */}
      <div className="grid-background"></div>

      {/* Animated background gradient */}
      <div className="loading-bg-gradient"></div>

      <div className="loading-content">
        <h1 className="loading-text">
          <span className="text-white word-animate word-1">World's Largest</span>
          <span className="word-spacer"></span>
          <span className="text-orange word-animate word-2">Bitcoin</span>
          <span className="word-spacer"></span>
          <span className="text-white word-animate word-3">Conference</span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
