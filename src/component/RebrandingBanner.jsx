import React from 'react';

const RebrandingBanner = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full z-[60] bg-black border-b border-[#FF8000]/30 text-white py-2 px-4 shadow-md flex items-center justify-between md:justify-center gap-4">
            <p className="text-sm md:text-base font-medium text-center flex-1">
                We have rebranded from Bitcoin Conference India to <span className="text-[#FF8000] font-bold uppercase ml-1">Bitcoin Forum India</span>
            </p>
            <button
                onClick={onClose}
                className="text-[#FF8000] hover:text-[#e67300] transition-colors p-1"
                aria-label="Close banner"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default RebrandingBanner;







