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
      <nav className="fixed top-8 right-8 md:right-16 z-[60] pointer-events-none">
        <button 
          onClick={onClose}
          className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 rounded-full text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-500 pointer-events-auto shadow-2xl group flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">Voltar ao Menu</span>
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
      <div className="bg-black py-40 px-6 text-center">
        <motion.a
          href="https://wa.me/5500000000000"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-12 md:px-20 py-8 md:py-10 bg-[#D4AF37]/5 backdrop-blur-2xl border border-[#D4AF37]/30 text-[#D4AF37] font-anton text-xl md:text-3xl tracking-[0.25em] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-700 shadow-[0_0_100px_rgba(212,175,55,0.05)] group relative overflow-hidden"
        >
          <span className="relative z-10">AGENDAR AGORA</span>
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
          {/* Glow Effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(212,175,55,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </motion.a>
        <p className="mt-8 text-[#D4AF37]/40 text-xs tracking-[0.5em] uppercase font-bold">Vagas Limitadas • 2026</p>
      </div>
    </motion.div>
  );
}
