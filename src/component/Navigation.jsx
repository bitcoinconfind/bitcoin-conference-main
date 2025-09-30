import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/imgs/logo/BitLogo.png";
import Button from "./Button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);

  const normalizeUrl = (u) => {
    if (!u) return '/';
    let url = u.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    return url.replace(/\/$/, '');
  };

  const handleWinFreeTickets = () => {
    // Get referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');
    
    // Direct redirect to dashboard with referral code (env-based)
    const base = normalizeUrl(import.meta.env.VITE_DASHBOARD_URL);
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    
    const qs = params.toString();
    window.location.href = qs ? `${base}?${qs}` : base;
  };

  const goHomeAndScrollTop = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
      // Layout hook will smooth-scroll to top on route change
    }
  };
  const goToId = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/#${id}`);
    }
  };
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black px-2 lg:px-25 md:px-10 py-1 md:py-3 flex items-center shadow-md relative header-container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" onClick={goHomeAndScrollTop}>
            <img
              src={logo}
              alt="BitIndia Logo"
              className="h-6 sm:h-7 md:h-10 w-auto"
            />
          </a>
        </div>

        {/* Nav Links (desktop, centered) */}
        <nav className="flex-1 hidden md:flex items-center justify-center gap-10 uppercase">
          <a
            href="/#tickets"
            onClick={(e) => goToId(e, 'tickets')}
            className="text-white/90 font-extrabold tracking-[0.18em] text-sm md:text-base lg:text-lg hover:text-[#FFBF00] transition-colors"
          >
            Tickets
          </a>
          <a
            href="/#speakers"
            onClick={(e) => goToId(e, 'speakers')}
            className="text-white/90 font-extrabold tracking-[0.18em] text-sm md:text-base lg:text-lg hover:text-[#FFBF00] transition-colors"
          >
            Speakers
          </a>
          <Link
            to="/apply/sponsor"
            className="text-white/90 font-extrabold tracking-[0.18em] text-sm md:text-base lg:text-lg hover:text-[#FFBF00] transition-colors"
          >
            Sponsor
          </Link>
          <Link
            to="/contact"
            className="text-white/90 font-extrabold tracking-[0.18em] text-sm md:text-base lg:text-lg hover:text-[#FFBF00] transition-colors"
          >
            Contact Us
          </Link>
        </nav>
        {/* Button at last */}
        <div className="flex-shrink-0 hidden md:block">
          <Button
            label="Win Free Tickets"
            className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base"
            onClick={handleWinFreeTickets}
          />
        </div>

        {/* Mobile Win Free Tickets Button */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <Button
            label="Win Free Tickets"
            variant="primary"
            className="px-3 py-1.5 text-xs font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md"
            onClick={handleWinFreeTickets}
          />
          <Hamburger showForm={showForm} setShowForm={setShowForm} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;

const Hamburger = ({ showForm, setShowForm }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md border border-[#2a2a2a] hover:border-[#CB7608] text-[#FFFFFFCC] hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-[#1F1F1F] border border-[#2a2a2a] rounded-lg shadow-lg z-50">
          <div className="py-2 text-sm font-inter-semiBold uppercase tracking-wide">
            <a onClick={() => setOpen(false)} href="/#tickets" className="block px-4 py-2 text-white/90 font-extrabold tracking-widest hover:bg-[#2a2a2a]">Tickets</a>
            <a onClick={() => setOpen(false)} href="/#speakers" className="block px-4 py-2 text-white/90 font-extrabold tracking-widest hover:bg-[#2a2a2a]">Speakers</a>
            <Link onClick={() => setOpen(false)} to="/apply/sponsor" className="block px-4 py-2 text-white/90 font-extrabold tracking-widest hover:bg-[#2a2a2a]">Sponsor</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block px-4 py-2 text-white/90 font-extrabold tracking-widest hover:bg-[#2a2a2a]">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};
