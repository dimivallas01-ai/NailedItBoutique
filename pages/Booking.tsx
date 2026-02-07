
import React, { useEffect } from 'react';
import { Calendar, Phone, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Booking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50/20 pt-10 pb-20 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 serif">Reserve Your Appointment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your session online today. Select your preferred service, date, and time. We'll take care of the rest.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Easy Booking</h3>
            <p className="text-sm text-gray-500">Select your date & time instantly</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Confirmation</h3>
            <p className="text-sm text-gray-500">Receive an instant booking SMS</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Need Help?</h3>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm text-pink-600 font-bold hover:underline">
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Booking Iframe Container */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 relative">
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
          
          <div className="p-4 sm:p-8">
            <div className="flex items-center justify-center min-h-[600px] w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              {/* Using the provided iframe embed */}
              <iframe 
                src={BUSINESS_INFO.bookingUrl} 
                style={{
                  maxWidth: '1001px',
                  height: '600px',
                  width: '100%',
                  border: 'none'
                }}
                title="Nailed It Boutique Booking"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-12 p-8 bg-white/50 border border-gray-200 rounded-3xl text-center">
          <h4 className="font-bold text-gray-900 mb-2">Booking Policy</h4>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Please arrive 5 minutes before your scheduled appointment. If you need to cancel or reschedule, kindly give us at least 24 hours notice. Thank you!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Booking;
