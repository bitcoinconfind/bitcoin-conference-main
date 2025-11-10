import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for count-up animations
 * @param {number|string} end - The target number (can include suffixes like "50k+", "150+")
 * @param {Object} options - Configuration options
 * @param {number} options.duration - Animation duration in ms (default: 2000)
 * @param {number} options.delay - Delay before animation starts in ms (default: 0)
 * @param {boolean} options.start - Whether to start the animation (default: false, triggered by scroll)
 * @returns {string} - The current count value with suffix
 */
export const useCountUp = (end, options = {}) => {
  const {
    duration = 2000,
    delay = 0,
    start = false
  } = options;

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const rafRef = useRef(null);

  // Parse the end value to extract number and suffix
  const parseValue = (value) => {
    if (typeof value === 'number') {
      return { number: value, suffix: '' };
    }

    // Handle cases like "50k+", "150+", "2 days"
    const match = value.toString().match(/^(\d+(?:\.\d+)?)\s*([kKmM]?)(.*)$/);
    if (match) {
      let number = parseFloat(match[1]);
      const multiplier = match[2].toLowerCase();
      const suffix = match[2] + match[3];

      // Convert k/m to actual numbers for animation
      if (multiplier === 'k') number *= 1000;
      if (multiplier === 'm') number *= 1000000;

      return { number, suffix };
    }

    return { number: 0, suffix: value };
  };

  const { number: targetNumber, suffix } = parseValue(end);

  useEffect(() => {
    if (!start || hasStarted) return;

    setHasStarted(true);

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(targetNumber);
        return;
      }

      const progress = (now - startTime) / duration;
      // Ease-out function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(targetNumber * easeOut);

      setCount(currentCount);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, targetNumber, duration, delay, hasStarted]);

  // Format the count with suffix
  const formatCount = () => {
    if (count === 0 && !hasStarted) return '0';

    // If suffix contains 'k' or 'K', display as simplified number
    if (suffix.toLowerCase().includes('k')) {
      return `${Math.floor(count / 1000)}k${suffix.slice(1)}`;
    }
    if (suffix.toLowerCase().includes('m')) {
      return `${Math.floor(count / 1000000)}m${suffix.slice(1)}`;
    }

    return `${count}${suffix}`;
  };

  return formatCount();
};

/**
 * Hook to trigger count-up when element scrolls into view
 */
export const useCountUpOnScroll = (end, options = {}) => {
  const elementRef = useRef(null);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldStart) {
          setShouldStart(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [shouldStart]);

  const count = useCountUp(end, { ...options, start: shouldStart });

  return { ref: elementRef, count };
};
