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
          className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-3 rounded-full text-[10px] uppercase font-black tracking-widest hover:bg-white/20 transition-all duration-500 pointer-events-auto shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] group overflow-hidden relative"
        >
          <span className="relative z-10">Voltar ao Menu</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
      <div className="bg-black py-32 px-6 text-center">
        <motion.a
          href="https://wa.me/5500000000000"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-16 py-8 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-anton text-2xl tracking-[0.2em] hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all shadow-[0_0_50px_rgba(212,175,55,0.2)] group relative overflow-hidden"
        >
          <span className="relative z-10">AGENDAR AGORA</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </motion.a>
      </div>
    </motion.div>
  );
}
