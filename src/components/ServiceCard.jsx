import React from 'react';

const ServiceCard = ({ title, price, description, image, alt }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#005a8d]/5 hover:shadow-lg transition-shadow">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="bg-[#005a8d]/10 text-[#005a8d] px-3 py-1 rounded-full text-xs font-bold">
            ${price}
          </span>
        </div>
        <p className="text-[#5e7c8d] mb-4">{description}</p>
        <button className="w-full py-3 rounded-full border-2 border-[#005a8d] text-[#005a8d] font-bold hover:bg-[#005a8d] hover:text-white transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
