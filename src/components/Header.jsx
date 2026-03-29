import React from 'react';

const Header = () => {
  const phoneNumber = "6288219334268";
const message = "Halo Surf Lesson Tamoco Bali, saya ingin booking lesson.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#005a8d]/10">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#005a8d]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.6.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.6.8 2.95.8V4.81c-.9 0-1.4-.25-2.05-.6z"/>
          </svg>
          <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-tight">Surf Lesson Tamoco Bali</h2>
        </div>
    <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#005a8d] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#005a8d]/20 hover:bg-[#004670] transition-colors inline-block"
>
  Book
</a>

      </div>
    </header>
  );
};

export default Header;
