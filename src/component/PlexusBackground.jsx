import React, { useEffect, useRef } from 'react';

const PlexusBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Configuration
        const points = [];
        const pointCount = window.innerWidth < 768 ? 20 : 40;
        const connectionDistance = 200;
        const orangeColor = '255, 128, 0'; // #FF8000

        // Initialize points without velocity (Static)
        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 2.5 + 1.2,
            });
        }

        const draw = () => {
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw points
            points.forEach((p, i) => {
                // Bounce logic removed (no movement)

                // Draw point
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${orangeColor}, 0.7)`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < points.length; j++) {
                    const p2 = points[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        // Opacity based on distance
                        const opacity = (1 - dist / connectionDistance);
                        ctx.strokeStyle = `rgba(${orangeColor}, ${opacity * 0.9})`;
                        ctx.lineWidth = 2.5;
                        ctx.stroke();
                    }
                }
            });
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        };

        resizeCanvas(); // Sets size and draws initial state
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            // No animation frame to cancel
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.5 }}
        />
    );
};

export default PlexusBackground;







