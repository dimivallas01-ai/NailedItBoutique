
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route && route !== '') {
        navigate(path);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(path);
        }
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tight text-pink-600 uppercase serif leading-none">
                Nailed It
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 font-medium uppercase ml-0.5">
                Boutique
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6">
              Marrickville's premier nail boutique for professional beauty and relaxation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-600">
              <li><button onClick={() => handleLinkClick('/')} className="hover:text-pink-600 transition-colors">Home</button></li>
              <li><Link to="/book" className="hover:text-pink-600 transition-colors">Book Online</Link></li>
              <li><button onClick={() => handleLinkClick('/#services')} className="hover:text-pink-600 transition-colors">Services</button></li>
              <li><button onClick={() => handleLinkClick('/#about')} className="hover:text-pink-600 transition-colors">About Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-gray-600">
              <li><button onClick={() => handleLinkClick('/#services')} className="hover:text-pink-600 transition-colors">Manicures</button></li>
              <li><button onClick={() => handleLinkClick('/#services')} className="hover:text-pink-600 transition-colors">Pedicures</button></li>
              <li><button onClick={() => handleLinkClick('/#services')} className="hover:text-pink-600 transition-colors">Nail Art</button></li>
              <li><button onClick={() => handleLinkClick('/#services')} className="hover:text-pink-600 transition-colors">Shellac / Gel</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-500 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-pink-500 shrink-0" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink-600">Privacy Policy</a>
            <a href="#" className="hover:text-pink-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
