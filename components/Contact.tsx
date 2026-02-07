
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pink-900 text-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-10 lg:p-16 bg-pink-800">
            <h3 className="text-3xl font-bold mb-8 serif">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-700/50 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Our Location</p>
                  <p className="text-pink-100">{BUSINESS_INFO.address}</p>
                  <a 
                    href={BUSINESS_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-white underline decoration-pink-400 underline-offset-4 hover:text-pink-200 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-700/50 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Call Us</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-pink-100 hover:text-white transition-colors">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-700/50 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Opening Hours</p>
                  <div className="text-pink-100 text-sm space-y-1">
                    {BUSINESS_INFO.hours.map((item, index) => (
                      <p key={index}>
                        <span className="font-medium">{item.days}:</span> {item.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-10 lg:p-16">
            <h4 className="text-2xl font-bold mb-6 serif">Send us a message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-pink-400 focus:outline-none placeholder:text-pink-200 text-white transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-pink-400 focus:outline-none placeholder:text-pink-200 text-white transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-pink-400 focus:outline-none placeholder:text-pink-200 text-white transition-colors"
              />
              <textarea 
                rows={4} 
                placeholder="How can we help?" 
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-pink-400 focus:outline-none placeholder:text-pink-200 text-white transition-colors"
              ></textarea>
              <button 
                className="w-full bg-white text-pink-900 font-bold py-4 rounded-2xl hover:bg-pink-50 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
