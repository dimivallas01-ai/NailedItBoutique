
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Best manicure I've ever had in Marrickville! The staff are so friendly and my nails look perfect every time.",
      rating: 5
    },
    {
      name: "Jessica L.",
      text: "Love the atmosphere here. The nail art is incredible and very creative. Highly recommend Nailed It Boutique!",
      rating: 5
    },
    {
      name: "Emma W.",
      text: "Super clean and professional salon. My pedicure was so relaxing and my toes have never looked better.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 serif">Trusted by Locals</h3>
            <p className="text-gray-500 mt-2">See why our clients keep coming back</p>
          </div>
          <div className="flex items-center gap-4 bg-pink-50 px-6 py-4 rounded-2xl">
            <div className="text-center border-r border-pink-200 pr-4">
              <p className="text-3xl font-bold text-pink-600 leading-none">{BUSINESS_INFO.rating}</p>
              <p className="text-[10px] text-pink-400 uppercase font-bold mt-1">Rating</p>
            </div>
            <div className="pl-4">
               <div className="flex text-yellow-500 mb-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                 ))}
               </div>
               <p className="text-sm font-medium text-gray-600">Verified Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative group hover:border-pink-200 transition-colors">
              <Quote className="absolute top-6 right-6 text-pink-100 group-hover:text-pink-200 transition-colors" size={40} />
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <p className="font-bold text-gray-900">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
