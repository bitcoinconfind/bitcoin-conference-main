import React from 'react';
import StarfieldBackground from './StarfieldBackground';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#ffffff]"> {/* Fixed: Restored opening div */}
            {/* <StarfieldBackground /> */}


            {/* 1. The Sky (Upper Gradient) - Made lighter to contrast with grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#f5f5f5_0%,#ffffff_70%)]" />

            {/* <div className="absolute top-[30%] left-0 right-0 h-[500px] bg-gradient-to-b from-[#F7931A]/20 to-transparent blur-[120px] z-10" /> */}

            {/* 3. The 3D Grid Floor - HIGH VISIBILITY */}
            {/* 3. The 3D Grid Floor - HIGH VISIBILITY */}
            <div
                className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[90%] z-0"
                style={{
                    perspective: '800px', // Lower perspective for more dramatic angle
                    transformStyle: 'preserve-3d',
                }}
            >
                <div
                    className="w-full h-[200%] absolute bottom-0 bg-[linear-gradient(to_right,rgba(255,101,1,0.6)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,101,1,0.6)_2px,transparent_2px)] bg-[size:60px_60px] animate-grid-flow"
                    style={{
                        transform: 'rotateX(60deg)', // Less extreme rotation to show more floor
                        transformOrigin: 'bottom',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%)', // Smoother fade
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%)'
                    }}
                >
                </div>
            </div>

            {/* 4. Divine Volumetric Spotlight (God Rays) */}
            {/* <div
                className="absolute top-[-20%] right-[-10%] w-[80%] h-[150%] z-10 pointer-events-none animate-pulse-glow"
                style={{
                    background: 'conic-gradient(from 215deg at 80% 0%, transparent 0deg, rgba(255, 101, 1, 0.12) 15deg, transparent 30deg)',
                    filter: 'blur(60px)',
                    opacity: 0.8
                }}
            /> */}

            {/* 5. Mask to fade grid into horizon - Subtle */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#ffffff] pointer-events-none" />


        </div >
    );
};

export default Background;
