
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    
    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route && route !== '') {
        // Navigate to the route first, the Home component effect will handle the hash
        navigate(path);
      } else {
        // Already on the right page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element doesn't exist yet (page transition), just navigate
          navigate(path);
        }
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-pink-600 uppercase serif leading-none">
              Nailed It
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gray-400 font-medium uppercase ml-0.5">
              Boutique
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors font-medium text-sm tracking-wide ${
                  (location.pathname === link.path || (link.path.includes('#') && location.hash === `#${link.path.split('#')[1]}`))
                  ? 'text-pink-600'
                  : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Link
              to="/book"
              className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-pink-700 transition-all shadow-md shadow-pink-100"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-50 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-pink-700"
              >
                Book Online
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-gray-600 px-4 py-3 rounded-xl border border-gray-200"
              >
                <Phone size={18} />
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
