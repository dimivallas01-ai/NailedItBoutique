
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#services');
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold mb-6">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                // Fix: Corrected key attribute syntax from key(i) to key={i}
                <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
              ))}
            </div>
            <span>{BUSINESS_INFO.rating} ⭐ Google Reviews ({BUSINESS_INFO.reviewCount})</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
            Looking Good, <br />
            <span className="text-pink-600 italic">Feeling Great</span> at Nailed It.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Marrickville's premier destination for professional manicures, pedicures, and bespoke nail art. Where style meets relaxation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              to="/book"
              className="w-full sm:w-auto px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-200 flex items-center justify-center gap-2 group"
            >
              Book an Appointment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold text-lg hover:border-pink-300 transition-all"
            >
              View Services
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-[12px] border-white">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df490c3dfffe?auto=format&fit=crop&q=80&w=1000"
              alt="Close-up of elegant pink manicured nails"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-100 rounded-full -z-0 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-50 rounded-full -z-0 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-pink-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Marrickville's Best</p>
                <p className="text-xs text-gray-500">Premium Nail Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
