import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Beginner Lessons",
      price: "35",
      description: "Catch your first wave with expert guidance. Perfect for first-timers and kids.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKoHroQjKcZJQ6Etce-Q6L5sWDjvu0kihHCMdlmUX3b7Yefk6aZ74ye9aA-gGbFmsppX4UPtJdJJNnYJwFE7Y5RvMM8Yn8CFebYDEnQJkQDiM3ImIHgoDva3ieizQFIvXJ6UtEiBLpInl_F9tkZf_mY2DXwNF7sRtJkFYC5kjHYXAORBWE_LTCK18Y4oC0-n6zgzjTrhpj-NeE6MEWg6xAuBfggwkyy1F9Ex9OFhC3KBnJ26p9ivRlxEpOjOC0niAVbdfGqyQozeY",
      alt: "Instructor helping student stand on surf board"
    },
    {
      title: "Intermediate Coaching",
      price: "50",
      description: "Refine your technique, wave selection, and learn to generate more speed.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoIJvHehvRc_iipSgVy-iyV5YwyVP-OSZ2GXa4k1C7bgbry5eQO97Rr0lFBQsnr0EoAQnwwZB27CtCelYKEDNUnav3ZrQ1E-hnHxw9pzC-7-QF4wkvF2dF8aX8_mht0uup5C9bQjqesFJmbYsXX7fSsdZbXIhovicX17jDSRFp6oCEHnQta9Rvc4a-CUlfnS4BQxeUSft9SBqtIGDH14APTPCukjleqAwhBmVotP_nRuTHQ67LAocGQizY1VQfWzzqtAgUTkRgf0E",
      alt: "Surfer performing a turn on a blue wave"
    },
    {
      title: "Surf Retreats",
      price: "499",
      description: "7 days of pure stoke. Includes accommodation, daily lessons, and yoga sessions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZyPBkEmB4I8VrFyuflZ9uAcADgZ0KFccrV6KwK8SL2grbGvqIsrTrLi4HChjetwauLxzBHirtiyZwAlgUWU59sW_mh_PhqQS5m7ZycposJMahANIi-elN8Z798ayAweqq_CX5asT0NK9DJnJ7-nGonJbLG8IQWm_TYmmAIKWWx-fqfl0Li3QECCJear2RdQVVGTrAjyqkmjm4NapYKJHIsLoDlv8seUCT_Dm7QJ960bGiWZOqWSFmDPg5oPVHtkB8oR6ZrRTpw8",
      alt: "Luxury beach villa with surfboard leaning on wall"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-[#005a8d] font-bold tracking-widest uppercase text-xs">Our Services</span>
        <h2 className="text-3xl font-extrabold text-[#101518]">Experience the Ocean</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
