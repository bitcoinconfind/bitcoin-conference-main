import PlexusBackground from "./PlexusBackground";
import StarfieldBackground from './StarfieldBackground';

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#000000] pointer-events-none">
            {/* Subtle gradient overlay at top for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0a0a0a_0%,transparent_55%)]" />

            {/* Digital Network Layer (Plexus) */}
            <PlexusBackground />

            {/* Twinkling Stars Layer - Commented out for now */}
            {/* <StarfieldBackground /> */}

            {/* Interactive grid - can be re-enabled if needed but kept clean for now */}
            {/* <div className="absolute inset-0 z-10">
                <BackgroundRippleEffect rows={20} cols={60} cellSize={40} />
            </div> */}
        </div>
    );
};

export default Background;








