import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWRqiRq2FQi5yaJDbnG2eOk_0ARODZwapj3k5KgjLoB7kJt88PNIKklnxYtXvpl5SJGD75x9OKzT36XNc0LRGNByvsnDSaDNwGZTSLEJiOzqSiZwtwwmnhiNO4JyfhGSHX2jOKOTqIHJsNFmzPJrzhDxh1BxmMTwCltaybMh5o3VYrj_2Mcv5Hh6d6cHHBLRdZ4S91EGxOGEsxOZsabtCC52QN06RQQ2f94_hmmYV_2Vmc5dLag5J8Crl8UbsKWIvyC4agTYW9keE",
      alt: "Blue surfboard resting on white sand beach"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBatNQJJdokHPYfDnyYn-1pzxrIz4NgJw-5BTHT3Y1HE2OVfTd531xD35ybpbrri-5YqporKzlFwq--oh_8WU7VBJPRXHpMnEveQ0WM-4RJL4LkUEmLiSVIcFLsgb7QgE5qJmtC4WHMzloG0-sjd7p68GEdbHlonmc1Gu8EFU3BCr1J-MrC0huCVMSOFht7WzX8k3mBKb6CUMKwon--bYngU2CHcJZXyOeTMlCdBdVTTJgjdUQ--FDfd2LVD_dJCtRw6Bbw7djTiiQ",
      alt: "Aerial view of turquoise Bali ocean"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM6SBGCnGX2bKvSPTIseaii2PNadywiey334HZBU1tJQxbW_SrF3OGEdiJnKExxbGAUYtslOewCh7FAMKwGgUIdMW2RAegwsSM3-ipZFonJQ4L6DZCRfKGubbGOApEVLsrdel0WfAroyB_Syjb-XlAEfSelP6CnWDvXlWXFzhxUg_Gmgo1fTJOeUD8TEjMjtuzBV8LMYS5NGV6FIBWgw5jHvhWj02g8PSyO5mNBlRc_iCx2yaHCnyRjG5sVpiMiM32-U2T_3-fcZk",
      alt: "Palm trees silhouette at tropical sunset"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwHVSm1ae1SaoTfPf6E0Hjwsye6q4MdCWMxuMJJiwboPCJ1PGDqEb0fUVJ6REQYQqjMlDNCLsIaJzLun0Rq8x7nWNqF1ngMG7auEjDb71y1-Zv3afRH9-Rkqe3qzhuXUy8vy-qccZo-sf08bzGzTqG7arYc5tS5AuK99DmhvJnqlUq6mLqQ3bv0xX4oTeH8MMA2tYmcuoqQPr1pWRkZunU8OoJ4pu1l8gxnriRnzPNcEdsRxCEsRprgU6j35GwPTkUVq09X3OhdE",
      alt: "Beach with crystal clear water in Bali"
    }
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-10">Capture the Vibe</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="aspect-square rounded-lg overflow-hidden">
            <img 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-[#005a8d] font-bold flex items-center gap-2 mx-auto hover:text-[#004670] transition-colors">
          View More Photos 
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
