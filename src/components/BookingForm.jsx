import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    skillLevel: 'Beginner',
    preferredDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We\'ll contact you soon.');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-4 bg-white border-t border-[#005a8d]/5">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Surf?</h2>
          <p className="text-[#5e7c8d]">Book your lesson today and get ready for the ride of your life.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold mb-2 ml-4">Full Name</label>
            <input 
              className="w-full h-14 px-6 rounded-full border-2 border-[#005a8d]/20 focus:border-[#005a8d] focus:ring-2 focus:ring-[#005a8d]/20 bg-[#f5f7f8] outline-none transition-colors" 
              placeholder="John Doe" 
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 ml-4">Skill Level</label>
              <select 
                className="w-full h-14 px-6 rounded-full border-2 border-[#005a8d]/20 focus:border-[#005a8d] focus:ring-2 focus:ring-[#005a8d]/20 bg-[#f5f7f8] outline-none transition-colors"
                name="skillLevel"
                value={formData.skillLevel}
                onChange={handleInputChange}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 ml-4">Preferred Date</label>
              <input 
                className="w-full h-14 px-6 rounded-full border-2 border-[#005a8d]/20 focus:border-[#005a8d] focus:ring-2 focus:ring-[#005a8d]/20 bg-[#f5f7f8] outline-none transition-colors" 
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button 
            className="w-full bg-[#005a8d] text-white h-14 rounded-full font-bold text-lg shadow-lg shadow-[#005a8d]/20 mt-4 hover:bg-[#004670] transition-colors" 
            type="submit"
          >
            Confirm Booking
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-dashed border-[#005a8d]/20 text-center">
          <p className="text-sm font-medium text-[#5e7c8d] mb-4">Quick questions? Reach us directly</p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
