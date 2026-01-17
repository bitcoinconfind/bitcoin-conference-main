import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

import { BorderBeam } from "./ui/BorderBeam";

// Using the same logo asset
const logo = "/assets/imgs/logo/BitLogo.png";

const Navigation = ({ showBanner = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Sensitive scroll trigger
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetY, duration = 1200) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const handleWinFreeTickets = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');
    const base = import.meta.env.VITE_DASHBOARD_URL || '#';
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    const qs = params.toString();
    window.location.href = qs ? `${base.replace(/\/$/, '')}?${qs}` : base;
  };

  const goToId = (e, id) => {
    if (e) e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 100; // Offset for centered floating nav
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        smoothScrollTo(offsetPosition);
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <div className={`fixed z-50 w-full transition-all duration-300 left-0 ${showBanner ? 'top-[40px] md:top-[44px]' : 'top-0'}`}>
        <header
          className={`w-full transition-all duration-300 md:border-b md:border-[#FF8000]
            ${isScrolled
              ? 'md:bg-[#fffcfa]/90 md:backdrop-blur-md md:py-3'
              : 'md:bg-[#fffcfa] md:py-4'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-end md:justify-between gap-4 relative z-10 w-full">
            {/* Logo - Left (visible only on Desktop now) */}


            {/* Desktop Nav - Center */}
            <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
              <NavLink isScrolled={isScrolled} onClick={(e) => goToId(e, 'speakers')} href="/#speakers">Speakers</NavLink>
              <NavLink isScrolled={isScrolled} onClick={(e) => goToId(e, 'sponsors-cta')} href="/#sponsors-cta">Sponsors</NavLink>
              <NavLink isScrolled={isScrolled} to="/media">Partnerships</NavLink>
              <NavLink isScrolled={isScrolled} to="/student-volunteer">Volunteer</NavLink>
            </nav>

            {/* Get Tickets Button - Desktop Right */}
            <div className="hidden md:block flex-shrink-0">
              <Button
                label="Get Tickets"
                variant="primary"
                className={`!rounded-xl transition-all duration-300 hover:!text-black ${isScrolled ? 'px-6 py-2 text-sm' : 'px-8 py-3 text-base'}`}
                onClick={() => window.location.href = "https://rewards.bitcoinforumindia.com/login?redirected=true"}
              />
            </div>

            {/* Mobile Hamburger - Right */}
            <div className="md:hidden flex-shrink-0">
              <Hamburger goToId={goToId} handleWinFreeTickets={handleWinFreeTickets} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

// Helper for nav links with hover effect
const NavLink = ({ children, to, href, onClick, isScrolled }) => {
  const baseClasses = `relative ${isScrolled ? 'px-3 py-2 text-base' : 'px-4 py-3 text-lg'} font-medium text-black hover:text-[#FF8000] transition-all duration-300`;

  if (to) {
    return <Link to={to} className={baseClasses}>{children}</Link>;
  }
  return <a href={href} onClick={onClick} className={baseClasses}>{children}</a>;
};

const Hamburger = ({ goToId, handleWinFreeTickets }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mt-2">
      <button onClick={() => setOpen(!open)} className={`p-2 transition-colors ${open ? 'text-[#FF8000]' : 'text-black hover:text-[#FF8000]'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-9 h-9">
          <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
        </svg>
      </button>

      {/* Floating Dropdown for Mobile */}
      {open && (
        <div className="absolute top-12 right-0 w-56 bg-[#fffcfa] border border-[#FF8000]/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-2 gap-1">
            {/* Get Tickets Button */}
            <button
              onClick={() => {
                window.location.href = "https://rewards.bitcoinforumindia.com/login?redirected=true";
                setOpen(false);
              }}
              className="w-full px-4 py-3 bg-[#FFFCFA] border-2 border-[#FF8000] text-black font-bold rounded-xl hover:bg-[#FF8000]/10 transition-all"
            >
              Get Tickets
            </button>

            {/* Menu Items */}
            <button onClick={() => { goToId(null, 'speakers'); setOpen(false); }} className="w-full px-4 py-2.5 text-left text-black hover:text-[#FF8000] hover:bg-[#FF8000]/10 rounded-lg transition-colors">
              Speakers
            </button>
            <button onClick={() => { goToId(null, 'sponsors-cta'); setOpen(false); }} className="w-full px-4 py-2.5 text-left text-black hover:text-[#FF8000] hover:bg-[#FF8000]/10 rounded-lg transition-colors">
              Sponsors
            </button>
            <button onClick={() => { navigate('/media'); setOpen(false); }} className="w-full px-4 py-2.5 text-left text-black hover:text-[#FF8000] hover:bg-[#FF8000]/10 rounded-lg transition-colors">
              Partnerships
            </button>
            <button onClick={() => { navigate('/student-volunteer'); setOpen(false); }} className="w-full px-4 py-2.5 text-left text-black hover:text-[#FF8000] hover:bg-[#FF8000]/10 rounded-lg transition-colors">
              Volunteer
            </button>
            <button onClick={() => { navigate('/contact'); setOpen(false); }} className="w-full px-4 py-2.5 text-left text-black hover:text-[#FF8000] hover:bg-[#FF8000]/10 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileLink = ({ children, to, href, onClick }) => {
  const classes = "block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-[#FF8000] rounded-xl transition-all text-center";
  if (to) return <Link to={to} onClick={onClick} className={classes}>{children}</Link>;
  return <a href={href} onClick={onClick} className={classes}>{children}</a>;
};

export default Navigation;















