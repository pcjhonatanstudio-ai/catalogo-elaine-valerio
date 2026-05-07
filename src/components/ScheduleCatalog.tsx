import React, { useRef } from 'react';
import { motion } from 'motion/react';

export default function ScheduleCatalog({ onClose }: { onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    'https://lh3.googleusercontent.com/d/1-w_M6l7ttQOyEii-u_2QdQ0WE7eumq0s',
    'https://lh3.googleusercontent.com/d/1_vtQC8wVWSk47JSHRV6ozmgzeBitXeW4',
    'https://lh3.googleusercontent.com/d/16bXaWeGi2fV4JNELwM28pI1L8by6wMnm',
    'https://lh3.googleusercontent.com/d/1Ttp8Tgna7EWoJy5IaPOVARbd9nmDtnzx'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black overflow-y-auto scroll-smooth"
      ref={containerRef}
    >
      {/* Navigation */}
      <nav className="fixed top-6 right-6 md:right-12 z-[60] pointer-events-none">
        <button 
          onClick={onClose}
          className="bg-white/90 backdrop-blur text-black px-6 py-2 rounded-full text-[10px] uppercase font-black tracking-widest hover:bg-white transition-all duration-300 pointer-events-auto shadow-2xl"
        >
          Voltar ao Menu
        </button>
      </nav>

      {/* Presentation Images */}
      <div className="flex flex-col w-full">
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Cronograma Página ${index + 1}`}
            className="w-full h-auto block"
            style={{ display: 'block' }}
          />
        ))}
      </div>

      {/* Final CTA Overlay for WhatsApp (Optional, but good for conversion) */}
      <div className="bg-black py-20 px-6 text-center">
        <motion.a
          href="https://wa.me/5500000000000"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-6 bg-white text-black font-anton text-xl tracking-widest hover:bg-[#D4AF37] transition-all"
        >
          AGENDAR AGORA
        </motion.a>
      </div>
    </motion.div>
  );
}
