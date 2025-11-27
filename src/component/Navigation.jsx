import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const logo = "/assets/imgs/logo/BitLogo.png";
import Button from "./Button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      const hash = location.hash;
      if (hash === '#speakers') setActiveLink('speakers');
      else if (hash === '#why-sponsor' || hash === '#sponsors-cta') setActiveLink('sponsors');
      else setActiveLink('');
    } else if (path === '/media') setActiveLink('partnerships');
    else if (path === '/student-volunteer') setActiveLink('volunteer');
    else if (path === '/contact') setActiveLink('contact');
    else setActiveLink('');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      window.history.pushState(null, null, '/');
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
        window.history.pushState(null, null, `#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }
  };
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism-nav-scrolled' : 'glassmorphism-nav'}`}>
      <div className="px-2 lg:px-25 md:px-10 py-2 md:py-3 flex items-center relative header-container">

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" onClick={goHomeAndScrollTop}>
            <img
              src={logo}
              alt="BitIndia Logo"
              className="w-auto"
              style={{ height: '55px' }}
            />
          </a>
        </div>

        {/* Nav Links (desktop, centered) */}
        <nav className="flex-1 hidden md:flex items-center justify-center gap-10 uppercase">
          {[
            { id: 'speakers', label: 'Speakers', type: 'hash', target: 'speakers' },
            { id: 'sponsors', label: 'Sponsors', type: 'hash', target: 'why-sponsor' },
            { id: 'partnerships', label: 'Partnerships', type: 'link', target: '/media' },
            { id: 'volunteer', label: 'Volunteer', type: 'link', target: '/student-volunteer' },
            { id: 'contact', label: 'Contact Us', type: 'link', target: '/contact' },
          ].map((item) => {
            const isActive =
              (item.type === 'link' && location.pathname === item.target) ||
              (item.type === 'hash' && activeLink === item.id);

            return item.type === 'hash' ? (
              <a
                key={item.id}
                href={`/#${item.target}`}
                onClick={(e) => {
                  goToId(e, item.target);
                  setActiveLink(item.id);
                }}
                className={`metric-label relative transition-all duration-300 hover:scale-110 hover:!text-[#f7931a] ${isActive ? '!text-[#f7931a]' : ''}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#f7931a] rounded-full shadow-[0_0_8px_rgba(247,147,26,0.6)]"></span>
                )}
              </a>
            ) : (
              <Link
                key={item.id}
                to={item.target}
                onClick={() => setActiveLink(item.id)}
                className={`metric-label relative transition-all duration-300 hover:scale-110 hover:!text-[#f7931a] ${isActive ? '!text-[#f7931a]' : ''}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#f7931a] rounded-full shadow-[0_0_8px_rgba(247,147,26,0.6)]"></span>
                )}
              </Link>
            );
          })}
        </nav>
        {/* Button at last */}
        <div className="flex-shrink-0 hidden md:block">
          <Button
            label="Get Free Tickets"
            variant="primary"
            withStarBorder={true}
            starSpeed="5s"
            className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base !bg-[#f7931a] text-black font-semibold"
            onClick={handleWinFreeTickets}
          />
        </div>

        {/* Mobile Get Free Tickets Button */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <Button
            label="Get Free Tickets"
            variant="primary"
            withStarBorder={true}
            starSpeed="5s"
            className="px-3 py-1.5 text-xs font-semibold !bg-[#f7931a] text-black transform hover:scale-105 transition-all duration-300 shadow-md"
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
                  const el = document.getElementById('why-sponsor');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    return true;
                  }
                  return false;
                };
                if (window.location.pathname !== '/') {
                  window.location.assign('/#why-sponsor');
                  // try after navigation settles
                  setTimeout(() => { go(); }, 400);
                } else {
                  if (!go()) {
                    setTimeout(() => { go(); }, 100);
                  }
                }
              }}
              href="/#why-sponsor"
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
