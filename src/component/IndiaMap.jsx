import React, { useEffect, useRef, useState } from 'react';

const IndiaMap = ({ className }) => {
    const containerRef = useRef(null);
    const [svgLoaded, setSvgLoaded] = useState(false);

    useEffect(() => {
        const loadSvg = async () => {
            try {
                const response = await fetch('/india 1.svg');
                const text = await response.text();

                if (containerRef.current) {
                    containerRef.current.innerHTML = text;

                    const svg = containerRef.current.querySelector('svg');
                    if (svg) {
                        svg.classList.add('w-full', 'h-full');
                        svg.style.overflow = 'visible';

                        const paths = Array.from(svg.querySelectorAll('path'));

                        paths.forEach(path => {
                            // Initial State: Dark with faint outline
                            // Use CSS transitions for the "Trail" effect
                            path.style.transition = 'fill 1.5s ease-out, stroke 1.5s ease-out, filter 1.5s ease-out, opacity 1.5s ease-out';
                            path.style.fill = 'rgba(255, 255, 255, 0.02)'; // Almost transparent
                            path.style.stroke = 'rgba(247, 147, 26, 0.15)'; // Very faint orange
                            path.style.strokeWidth = '0.5';
                            path.style.cursor = 'pointer';

                            // Hover effect (instant)
                            path.onmouseenter = () => {
                                path.style.transition = 'fill 0.1s ease-out, filter 0.1s ease-out';
                                path.style.fill = '#f7931a';
                                path.style.filter = 'drop-shadow(0 0 10px rgba(247, 147, 26, 0.8))';
                                path.style.stroke = '#ffffff';
                                path.style.strokeOpacity = '1';
                                path.style.zIndex = '10'; // Doesn't work in SVG z-index, but intent is clear
                            };

                            path.onmouseleave = () => {
                                // Revert to slow transition for fading out
                                path.style.transition = 'fill 2s ease-out, filter 2s ease-out, stroke 2s ease-out';
                                path.style.fill = 'rgba(255, 255, 255, 0.02)';
                                path.style.filter = 'none';
                                path.style.stroke = 'rgba(247, 147, 26, 0.15)';
                            };
                        });

                        setSvgLoaded(true);
                    }
                }
            } catch (error) {
                console.error("Failed to load India Map SVG:", error);
            }
        };

        loadSvg();
    }, []);

    useEffect(() => {
        if (!svgLoaded || !containerRef.current) return;

        const svg = containerRef.current.querySelector('svg');
        const paths = Array.from(svg.querySelectorAll('path'));

        // 1. Calculate Centroids
        const pathsData = paths.map(path => {
            try {
                const bbox = path.getBBox();
                return {
                    element: path,
                    cx: bbox.x + bbox.width / 2,
                    cy: bbox.y + bbox.height / 2
                };
            } catch (e) {
                return { element: path, cx: 0, cy: 0 };
            }
        });

        // 2. Calculate Map Center (Average of all centroids)
        const totalX = pathsData.reduce((sum, p) => sum + p.cx, 0);
        const totalY = pathsData.reduce((sum, p) => sum + p.cy, 0);
        const mapCenterX = totalX / pathsData.length;
        const mapCenterY = totalY / pathsData.length;

        // 3. Calculate Angle and Sort (Clockwise starting from North/Top)
        // Math.atan2(y, x) returns radians. 
        // Top is -PI/2. Right is 0. Bottom is PI/2. Left is PI.
        // We want Clockwise.
        pathsData.forEach(p => {
            p.angle = Math.atan2(p.cy - mapCenterY, p.cx - mapCenterX);
        });

        // Sort by angle
        pathsData.sort((a, b) => a.angle - b.angle);

        let activeIndex = 0;
        const totalPaths = pathsData.length;
        let interval;

        // Animation Loop with Delay
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                // Get current item
                const currentItem = pathsData[activeIndex];

                if (currentItem && currentItem.element) {
                    // Light up instantly (or fast)
                    currentItem.element.style.transition = 'fill 0.1s ease-out, stroke 0.1s ease-out';
                    currentItem.element.style.fill = '#f7931a';
                    currentItem.element.style.fillOpacity = '1';
                    currentItem.element.style.stroke = '#ffffff'; // White flash on edge
                    currentItem.element.style.strokeWidth = '1';
                    // Apply pulse animation
                    currentItem.element.style.animation = 'pulse-orange 1.5s infinite ease-in-out';
                }

                // Turn off previous item (to start the trail fade)
                const trailOffset = 2; // Keep 2 items fully lit before fading
                const turnOffIndex = (activeIndex - trailOffset + totalPaths) % totalPaths;
                const itemToFade = pathsData[turnOffIndex];

                if (itemToFade && itemToFade.element) {
                    // Revert to slow decay
                    itemToFade.element.style.transition = 'fill 3s ease-out, stroke 3s ease-out';
                    itemToFade.element.style.fill = 'rgba(255, 255, 255, 0.02)';
                    itemToFade.element.style.stroke = 'rgba(247, 147, 26, 0.15)';
                    itemToFade.element.style.strokeWidth = '0.5';
                    itemToFade.element.style.animation = 'none'; // Stop pulse
                    itemToFade.element.style.filter = 'none';
                }

                activeIndex = (activeIndex + 1) % totalPaths;
            }, 100); // Slower speed (100ms)
        }, 7000); // 7 seconds delay

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [svgLoaded]);

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            aria-label="Animated Map of India"
        >
            <style>
                {`
                    @keyframes pulse-orange {
                        0% { filter: drop-shadow(0 0 5px rgba(247, 147, 26, 0.6)); }
                        50% { filter: drop-shadow(0 0 20px rgba(247, 147, 26, 1)); }
                        100% { filter: drop-shadow(0 0 5px rgba(247, 147, 26, 0.6)); }
                    }
                `}
            </style>
        </div>
    );
};

export default IndiaMap;
