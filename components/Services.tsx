
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-pink-600 uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Indulge in Premium Care</h3>
          <div className="w-20 h-1 bg-pink-200 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.title} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 serif">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/book"
                  className="text-pink-600 font-bold text-sm tracking-wide uppercase group-hover:gap-2 flex items-center transition-all"
                >
                  Book This Service 
                  <span className="opacity-0 group-hover:opacity-100 transition-all ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
