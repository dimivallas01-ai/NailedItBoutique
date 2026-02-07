
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
             <div className="absolute -top-10 -left-10 text-[10rem] font-serif text-pink-50/50 -z-10 select-none">Est.</div>
             <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional nail art detail and technique" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-100 rounded-full -z-10"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-sm font-bold tracking-[0.2em] text-pink-600 uppercase mb-4">About the Boutique</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Where Artistry Meets <span className="italic text-pink-500">Self-Care</span>.
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Located in the heart of Marrickville, <strong>{BUSINESS_INFO.name}</strong> is more than just a nail salon; it's a sanctuary for style and relaxation. We pride ourselves on providing a professional, friendly, and welcoming environment where every client feels special.
              </p>
              <p>
                Our team of dedicated professionals uses only the highest quality products and the latest techniques in nail care. Whether you're looking for a classic manicure, a soothing pedicure, or intricate custom nail art, we are committed to delivering results that exceed your expectations.
              </p>
              <p>
                Experience the perfect blend of luxury and neighborhood charm at {BUSINESS_INFO.name}. We look forward to helping you look good and feel great.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
              <div>
                <p className="text-4xl font-bold text-pink-600 mb-1">100%</p>
                <p className="text-gray-500 font-medium">Hygienic Tools</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-pink-600 mb-1">Elite</p>
                <p className="text-gray-500 font-medium">Trained Artists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
