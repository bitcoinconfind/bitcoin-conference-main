import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

import { BorderBeam } from "./ui/BorderBeam";

// Using the same logo asset
const logo = "/assets/imgs/logo/BitLogo.png";

const Navigation = () => {
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
    e.preventDefault();
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
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%]">
        {/* Main Header Pill - Truly Centered */}
        <header
          className={`transition-all duration-500 ease-out 
            ${isScrolled
              ? 'py-3 md:py-4 bg-[#ff6501]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl'
              : 'py-3 md:py-5 bg-[#ff6501]/10 backdrop-blur-md'
            } rounded-full w-full max-w-[600px] mx-auto`}
        >
          <BorderBeam size={300} duration={12} delay={9} borderWidth={3} colorFrom="#ff6501" colorTo="#ff6501" />

          <div className="px-10 flex items-center justify-center relative z-10 w-full">
            {/* Desktop Nav - Centered */}
            <nav className="hidden md:flex items-center gap-1">
              <NavLink onClick={(e) => goToId(e, 'speakers')} href="/#speakers">Speakers</NavLink>
              <NavLink onClick={(e) => goToId(e, 'sponsors-cta')} href="/#sponsors-cta">Sponsors</NavLink>
              <NavLink to="/media">Partnerships</NavLink>
              <NavLink to="/student-volunteer">Volunteer</NavLink>
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <Hamburger goToId={goToId} handleWinFreeTickets={handleWinFreeTickets} />
            </div>
          </div>
        </header>

        {/* Get Tickets Button - Absolute positioned to the right */}
        <div className="hidden md:block absolute right-0 top-0">
          <Button
            label="Get Tickets"
            variant="primary"
            className={`!rounded-full transition-all duration-300 ${isScrolled ? 'px-8 py-3 text-base' : 'px-10 py-4 text-lg'} shadow-lg shadow-[#ff6501]/20`}
            onClick={handleWinFreeTickets}
          />
        </div>
      </div>
    </>
  );
};

// Helper for nav links with hover effect
const NavLink = ({ children, to, href, onClick }) => {
  const baseClasses = "relative px-4 py-3 text-lg font-medium text-black hover:text-[#ff6501] transition-colors duration-300";

  if (to) {
    return <Link to={to} className={baseClasses}>{children}</Link>;
  }
  return <a href={href} onClick={onClick} className={baseClasses}>{children}</a>;
};

const Hamburger = ({ goToId, handleWinFreeTickets }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 text-white/80 hover:text-[#ff6501] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
        </svg>
      </button>

      {/* Floating Dropdown for Mobile */}
      {open && (
        <div className="absolute top-12 right-0 w-56 bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-2 gap-1">
            <button
              onClick={() => { setOpen(false); handleWinFreeTickets(); }}
              className="block px-4 py-3 text-sm text-[#ff6501] font-bold hover:bg-white/5 rounded-xl transition-all text-center mb-1 border border-[#ff6501]/30"
            >
              Get Tickets
            </button>
            <div className="h-[1px] bg-white/10 mx-2 my-1"></div>
            <MobileLink onClick={(e) => { setOpen(false); goToId(e, 'speakers'); }} href="/#speakers">Speakers</MobileLink>
            <MobileLink onClick={(e) => { setOpen(false); goToId(e, 'sponsors-cta'); }} href="/#sponsors-cta">Sponsors</MobileLink>
            <MobileLink to="/media" onClick={() => setOpen(false)}>Partnerships</MobileLink>
            <MobileLink to="/student-volunteer" onClick={() => setOpen(false)}>Volunteer</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact Us</MobileLink>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileLink = ({ children, to, href, onClick }) => {
  const classes = "block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-[#ff6501] rounded-xl transition-all text-center";
  if (to) return <Link to={to} onClick={onClick} className={classes}>{children}</Link>;
  return <a href={href} onClick={onClick} className={classes}>{children}</a>;
};

export default Navigation;
