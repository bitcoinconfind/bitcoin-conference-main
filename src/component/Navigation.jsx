import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const logo = "/assets/imgs/logo/BitLogo.png";
import Button from "./Button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const smoothScrollTo = (targetY, duration = 1400) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

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
      smoothScrollTo(0, 1400);
    } else {
      navigate("/");
      // Layout hook will smooth-scroll to top on route change
    }
  };
  const goToId = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80; // Adjust for fixed header height
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        smoothScrollTo(offsetPosition, 1400);
      }
    } else {
      navigate(`/#${id}`);
    }
  };
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black px-2 lg:px-25 md:px-10 py-2 md:py-3 flex items-center shadow-md relative header-container">

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
          <a href="/#speakers" onClick={(e) => goToId(e, 'speakers')} className="metric-label">Speakers</a>
          <a href="/#sponsors-cta" onClick={(e) => goToId(e, 'sponsors-cta')} className="metric-label">Sponsors</a>
          <Link to="/media" className="metric-label">Partnerships</Link>
          <Link to="/student-volunteer" className="metric-label">Volunteer</Link>
          <Link to="/contact" className="metric-label">Contact Us</Link>
        </nav>
        {/* Button at last */}
        <div className="flex-shrink-0 hidden md:block">
          <Button
            label="Win Free Tickets"
            withStarBorder={true}
            starSpeed="5s"
            className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base"
            onClick={handleWinFreeTickets}
          />
        </div>

        {/* Mobile Win Free Tickets Button */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <Button
            label="Win Free Tickets"
            variant="primary"
            withStarBorder={true}
            starSpeed="5s"
            className="px-3 py-1.5 text-xs font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md"
            onClick={handleWinFreeTickets}
          />
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Navigation;

const Hamburger = () => {
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
            
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                const go = () => {
                  const el = document.getElementById('speakers');
                  if (el) {
                    const headerOffset = 80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    // reuse same eased scroll as nav
                    const startY = window.pageYOffset;
                    const distance = y - startY;
                    let startTime = null;
                    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
                    const duration = 1400;
                    const animate = (ts) => {
                      if (startTime === null) startTime = ts;
                      const elapsed = ts - startTime;
                      const progress = Math.min(elapsed / duration, 1);
                      const eased = easeInOutQuad(progress);
                      window.scrollTo(0, startY + distance * eased);
                      if (elapsed < duration) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                    return true;
                  }
                  return false;
                };
                if (window.location.pathname !== '/') {
                  window.location.assign('/#speakers');
                  setTimeout(() => { go(); }, 400);
                } else {
                  if (!go()) setTimeout(() => { go(); }, 100);
                }
              }}
              href="/#speakers"
              className="block px-4 py-2 metric-label hover:bg-[#2a2a2a]"
            >
              Speakers
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                const go = () => {
                  const el = document.getElementById('sponsors-cta');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    return true;
                  }
                  return false;
                };
                if (window.location.pathname !== '/') {
                  window.location.assign('/#sponsors-cta');
                  // try after navigation settles
                  setTimeout(() => { go(); }, 400);
                } else {
                  if (!go()) {
                    setTimeout(() => { go(); }, 100);
                  }
                }
              }}
              href="/#sponsors-cta"
              className="block px-4 py-2 metric-label hover:bg-[#2a2a2a]"
            >
              Sponsors
            </a>
            <Link onClick={() => setOpen(false)} to="/media" className="block px-4 py-2 metric-label hover:bg-[#2a2a2a]">Partnerships</Link>
            <Link onClick={() => setOpen(false)} to="/student-volunteer" className="block px-4 py-2 metric-label hover:bg-[#2a2a2a]">Volunteer</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block px-4 py-2 metric-label hover:bg-[#2a2a2a]">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};
