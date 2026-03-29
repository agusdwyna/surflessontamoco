import React from 'react';

const Hero = () => {
  const phoneNumber = "6288219334268";
const message = "Halo Surf Lesson Tamoco Bali, saya ingin booking lesson.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhMERsUFQ8jzD02qLQuLqg_Oz-Hvl656JucUIK9NMk6MITxS6PWSGk5lagr61eex_g2C_ochZjwBPamvEURrd8NffRJdqDoguwjJH0ijJBjtELWsKpZCPqva4lZfpgL8U2WXTAug9NFYnkKq957pdJRcThelMSWmKNLKGpYbNUcx-LprTZB3wuRIEKzuwFB8y-fkk_tMH0kWfRc7QunbrFrVZQy2ALVqh0HudCrcZlK88yAhG-4pj1pCpDn2IHrC6o7pKnxI-qnGY')"
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 gap-6">
        <h1 className="text-white text-5xl font-extrabold leading-[1.1] tracking-tight max-w-md">
          Master the Waves in Paradise
        </h1>
        <p className="text-white/90 text-lg font-medium max-w-sm">
          The best surf lessons in Bali. Learn from local pros in the heart of the tropics.
        </p>
        <div className="flex flex-col w-full gap-3 mt-4 sm:flex-row sm:justify-center">
        <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#005a8d] text-white h-14 px-8 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 hover:bg-[#004670] transition-colors"
>
  Book Now
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
</a>
<a
  href="#pricing"
  className="bg-white/20 backdrop-blur-md text-white h-14 px-8 rounded-full text-lg font-bold border border-white/30 hover:bg-white/30 transition-colors flex items-center justify-center"
>
  View Pricing
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
