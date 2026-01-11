import React from 'react';
import BackgroundRippleEffect from './ui/BackgroundRippleEffect';
import FloatingParticles from './FloatingParticles';
import AnimatedGradientWaves from './AnimatedGradientWaves';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#ffffff]">
            {/* Ripple Effect Background - Full screen coverage */}
            <BackgroundRippleEffect rows={20} cols={60} cellSize={40} />

            {/* Animated Gradient Waves */}
            <AnimatedGradientWaves />

            {/* Floating Particles */}
            <FloatingParticles />

            {/* Subtle gradient overlay at top */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#f5f5f5_0%,transparent_50%)] pointer-events-none" />
        </div>
    );
};

export default Background;
