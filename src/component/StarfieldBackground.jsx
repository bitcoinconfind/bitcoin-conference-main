import { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Star particles
        const stars = [];
        const starCount = 150; // Reduced by 50% as requested

        // Initialize stars
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.2, // Variety of sizes
                opacity: Math.random() * 0.6 + 0.2, // Variety of brightness
                twinkleSpeed: Math.random() * 0.004 + 0.001,
                twinkleDirection: Math.random() > 0.5 ? 1 : -1,
                colorType: Math.random() > 0.85 ? 'orange' : 'white'
            });
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                const color = star.colorType === 'orange' ? '255, 128, 0' : '255, 255, 255';

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

                // Add glow to make them look like real stars
                ctx.shadowBlur = Math.random() > 0.5 ? 8 : 4;
                ctx.shadowColor = `rgba(${color}, ${star.opacity})`;

                ctx.fillStyle = `rgba(${color}, ${star.opacity})`;
                ctx.fill();

                // Reset shadow for performance
                ctx.shadowBlur = 0;

                // Twinkle effect
                star.opacity += star.twinkleSpeed * star.twinkleDirection;
                if (star.opacity > 0.85 || star.opacity < 0.2) {
                    star.twinkleDirection *= -1;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 10 }}
        />
    );
};

export default StarfieldBackground;



