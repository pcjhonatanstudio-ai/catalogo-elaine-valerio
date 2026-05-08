/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Calendar, CircleUserRound, ChevronLeft, Star, Heart } from 'lucide-react';
import ScheduleCatalog from './components/ScheduleCatalog';

const ClockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const NailPolishIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 4h6v4H9z" />
    <path d="M11 2h2v2h-2z" />
    <path d="M7 8h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
  </svg>
);

const ScissorsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4L8.12 15.88M14.47 14.48L20 20" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l2.4 4.8L20 8l-4.8 2.4L12 15l-2.4-4.8L4 8l4.8-1.2L12 2z" />
    <path d="M18 15l1.5 3L21 21l-3-1.5-3-1.5 3-1.5z" />
  </svg>
);

const UserSilhouetteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </svg>
);

const DecorationDivider = () => (
  <div className="flex items-center justify-center gap-2 my-2 opacity-60">
    <div className="w-12 h-px bg-[#D4AF37]"></div>
    <LotusIcon className="w-4 h-4 text-[#D4AF37]" />
    <div className="w-12 h-px bg-[#D4AF37]"></div>
  </div>
);

const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a7 7 0 0 1 7 7c0 4-4 10-7 11-3-1-7-7-7-11a7 7 0 0 1 7-7z"/>
    <path d="M12 3c-2 2-2 6-2 6s-2-2-4-2-2 2-2 4 4 6 8 8 4-2 8-8-2-2-2-4-4-2-2 2-2 6s0-4-2-6z"/>
  </svg>
);

const ManicureHandsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 13c1-2 2-6 2-6s1 0 1 1-1 4-1 6" />
    <path d="M10 12c1-2 2-7 2-7s1 0 1 1-1 5-1 7" />
    <path d="M13 11c1-2 2-6 2-6s1 0 1 1-1 5-1 6" />
    <path d="M16 12c1-2 1-4 1-4s1 0 1 1 0 3-1 4" />
    <path d="M5 18c2 0 4-1 5-3l1-4c0-1-1-1-1 0l-1 4c-1 2-2 3-4 3" />
    <path d="M19 14.5l-3.5 1s-1.5 0-2 1.5l-1 3.5c-.5 1.5-2 1.5-2 1.5h6l2.5-7.5" />
    <path d="M18 4l1 1-1 1" />
    <path d="M21 7l1 1-1 1" />
  </svg>
);

const DropIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5L12 2 8 9.5c-2 1.6-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
  </svg>
);

const PolishBrushIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v6" />
    <path d="M10 8h4v4h-4z" />
    <path d="M17 14c-1-1-3-1-3-1s-1 1-1 3v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4s0-2-2-2z" />
    <path d="M7 14h2l1 6H6l1-6z" />
  </svg>
);

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9c0-3.5 3.5-3.5 3.5 0s-3.5 3.5-3.5 3.5" />
    <path d="M12 9c0-3.5-3.5-3.5-3.5 0s3.5 3.5 3.5 3.5" />
    <path d="M15 12c3.5 0 3.5 3.5 0 3.5s-3.5-3.5-3.5-3.5" />
    <path d="M9 12c-3.5 0-3.5 3.5 0 3.5s3.5-3.5 3.5-3.5" />
    <path d="M12 15c0 3.5 3.5 3.5 3.5 0s-3.5-3.5-3.5-3.5" />
    <path d="M12 15c0 3.5-3.5 3.5-3.5 0s3.5-3.5 3.5-3.5" />
  </svg>
);

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[40px] text-[#FDFBF7]">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.4,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,0,1200,0H0Z" fill="currentColor"></path>
    </svg>
  </div>
);

const BotanicalDecor = () => (
  <div className="fixed bottom-20 right-[-50px] opacity-[0.08] pointer-events-none rotate-[-15deg] z-0">
    <svg width="300" height="400" viewBox="0 0 100 150" fill="none" stroke="#D4AF37" strokeWidth="0.5">
      <path d="M50 150 Q 50 100 80 50 M50 120 Q 20 80 40 40 M50 140 Q 70 90 90 60" />
      <circle cx="80" cy="50" r="2" />
      <circle cx="40" cy="40" r="2" />
      <circle cx="90" cy="60" r="2" />
    </svg>
  </div>
);


const CATEGORIES = [
  {
    id: 'cronograma',
    title: 'Cronograma 2026',
    icon: 'https://lh3.googleusercontent.com/d/1AaXoINaO4LShCuoESEJbAxcVrM3WyoOp',
    image: 'https://lh3.googleusercontent.com/d/1jV2OGJHmAzzKn_0_gYWgoLiRM_PKA9ku',
    services: [
      { name: 'Crono (Alinhamento)', price: 350 },
      { name: 'Crono (Nutrição)', price: 180 },
      { name: 'Crono (Hidratação)', price: 150 },
      { name: 'Crono (Premium Care)', price: 450 },
      { name: 'Crono (Combo 4 sessões)', price: 980 },
    ]
  },
  {
    id: 'esmalteria',
    title: 'Esmalteria',
    icon: 'https://lh3.googleusercontent.com/d/1r7r7-ZPTym7Bq6pd_XI3vAc-JMO4G9Wr',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    services: [
      { name: 'Acrigel', price: 145 },
      { name: 'Manutenção de Acrigel', price: 95 },
      { name: 'Banho de Gel', price: 90 },
      { name: 'Esmaltação em Gel', price: 70 },
      { name: 'Postiça Realista', price: 130 },
      { name: 'Postiça de Vidro', price: 140 },
      { name: 'Blindagem', price: 65 },
      { name: 'Remoção Blindagem', price: 15 },
      { name: 'Remoção Alongamento', price: 65 },
      { name: 'Unha Encapsulada / par', price: 35 },
      { name: 'Francesa Encapsulada', price: 30 },
      { name: 'Lixamento de Pés', price: 10 },
      { name: 'Plástica dos Pés', price: 70 },
      { name: 'SPA dos pés', price: 40 },
    ]
  },
  {
    id: 'cortes',
    title: 'Cortes e Escovas',
    icon: 'https://lh3.googleusercontent.com/d/1UxIS8fOztbkRpz7MQnXajw-mnTrysj9f',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c0d5?q=80&w=800&auto=format&fit=crop',
    services: [
      { name: 'Corte', isTitle: true },
      { name: 'Corte (Tesoura)', price: 99 },
      { name: 'Corte (Pontas)', price: 77 },
      { name: 'Anti-Frizz', isTitle: true },
      { name: 'Anti-Frizz (Curto)', price: 170 },
      { name: 'Anti-Frizz (Chanel | Nuca)', price: 190 },
      { name: 'Anti-Frizz (Médio | Ombro)', price: 250 },
      { name: 'Anti-Frizz (Longo | Soutien)', price: 270 },
      { name: 'Anti-Frizz (Longo Cintura)', price: 290 },
      { name: 'Escovas', isTitle: true },
      { name: 'Escova Simples (Curto)', price: 47 },
      { name: 'Escova Modelada (Curto)', price: 55 },
      { name: 'Escova Simples (Médio)', price: 65 },
      { name: 'Escova Modelada (Médio)', price: 68 },
      { name: 'Escova Simples (Longo Soutien)', price: 70 },
      { name: 'Escova Modelada (Longo Soutien)', price: 77 },
      { name: 'Escova Simples (Extra Longo Cintura)', price: 80 },
      { name: 'Escova Modelada (Extra Longo Cintura)', price: 93 },
      { name: 'Secagem Simples', price: 25 },
      { name: 'London', isTitle: true },
      { name: 'London (Curto)', price: 300 },
      { name: 'London (Chanel | Nuca)', price: 330 },
      { name: 'London (Médio | Ombro)', price: 360 },
      { name: 'London (Longo | Soutien)', price: 410 },
      { name: 'London (Longo Cintura)', price: 490 },
    ]
  },
  {
    id: 'tratamentos',
    title: 'Tratamentos',
    icon: 'https://lh3.googleusercontent.com/d/1LtkDoX56yK3Dv4XkU29eLVwE9icGob8U',
    image: 'https://images.unsplash.com/photo-1522335789103-8017255a7070?q=80&w=800&auto=format&fit=crop',
    services: [
      { name: 'Cronograma Truss (4 sessões)', price: 720 },
      { name: 'Cronograma Truss (Avulsa)', price: 150 },
      { name: 'Anamnese Capilar', price: 0 },
    ]
  },
  {
    id: 'cor',
    title: 'Alinhamento e Cor',
    icon: 'https://lh3.googleusercontent.com/d/1wyJa2nIcF_f5TukpyoIJJHOKiXFwT0AV',
    image: 'https://images.unsplash.com/photo-1595476108169-2533ae56612d?q=80&w=800&auto=format&fit=crop',
    services: [
      { name: 'Aplicação Coloração', price: 68 },
      { name: 'Retoque', price: 99 },
      { name: 'Colorações P/M/G', price: 140 },
    ]
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number] | null>(null);
  const [view, setView] = useState<'catalogue' | 'cronograma'>('catalogue');

  return (
    <div className="min-h-[100dvh] bg-[#FDFBF7] text-[#3E2723] font-sans flex flex-col selection:bg-[#D4AF37]/20 relative overflow-x-hidden pb-24">
      <AnimatePresence>
        {view === 'cronograma' && (
          <ScheduleCatalog onClose={() => setView('catalogue')} />
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-x-hidden relative z-10">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.section 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center pt-16 pb-8 text-center w-full max-w-sm mx-auto px-4">
                <span className="font-script text-5xl md:text-7xl leading-none text-[#3E2723]">Elaine Valerio</span>
                <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/60 mt-2 font-medium">STUDIO DE BELEZA</span>
                
                <div className="flex items-center gap-2 my-6 opacity-60">
                   <div className="w-12 h-px bg-[#D4AF37]"></div>
                   <span className="text-[#D4AF37] text-lg">o-o</span>
                   <div className="w-12 h-px bg-[#D4AF37]"></div>
                </div>
                
                <h1 className="flex flex-col items-center">
                   <span className="font-serif text-[42px] leading-[0.9] text-[#3E2723]">MENU DE</span>
                   <span className="font-serif text-[42px] leading-[0.9] text-[#3E2723]">SERVIÇOS.</span>
                </h1>

                <div className="flex items-center gap-2 mt-6 opacity-60">
                   <div className="w-12 h-px bg-[#D4AF37]"></div>
                   <span className="text-[#D4AF37] text-lg">o-o</span>
                   <div className="w-12 h-px bg-[#D4AF37]"></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-6 relative z-10 pb-12">
                {CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (cat.id === 'cronograma') {
                         setView('cronograma');
                      } else {
                         setSelectedCategory(cat);
                         window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="group bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-[#E5E0D8]/50 rounded-2xl p-5 flex items-center transition-all hover:shadow-[0_8px_24px_rgba(212,175,55,0.1)]"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37]/90 bg-[#FDFBF7] rounded-full border border-[#E5E0D8] overflow-hidden">
                      {typeof cat.icon === 'string' ? (
                        <img src={cat.icon} alt={cat.title} className="w-8 h-8 object-contain" />
                      ) : (
                        (() => {
                          const Icon = cat.icon as React.ComponentType<{ className?: string, strokeWidth?: number }>;
                          return Icon ? <Icon className="w-6 h-6" strokeWidth={1.5} /> : null;
                        })()
                      )}
                    </div>
                    <span className="flex-1 text-left text-sm font-serif font-bold uppercase tracking-widest text-[#3E2723] ml-5 leading-tight">
                      {cat.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#D4AF37] opacity-60" />
                  </motion.button>
                ))}
              </div>
            </motion.section>
          ) : (
            <motion.section 
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col bg-[#FDFBF7] pb-32 relative overflow-hidden"
            >
              <BotanicalDecor />
              
              {/* Header Image with Curve */}
              <div className="relative h-[48vh] w-full overflow-hidden">
                <motion.div 
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full absolute inset-0 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden"
                >
                  <img src={selectedCategory.image} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                </motion.div>
                
                {/* Gold Border for curve */}
                <div className="absolute inset-x-0 bottom-[-2px] h-full rounded-b-[62px] md:rounded-b-[102px] border-b-[3px] border-[#D4AF37] pointer-events-none z-10"></div>
                
                <WaveDivider />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 px-6">
                   <button 
                     onClick={() => setSelectedCategory(null)}
                     className="absolute top-10 left-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all hover:bg-white/30 active:scale-90"
                   >
                     <ChevronLeft className="w-7 h-7 text-[#D4AF37]" strokeWidth={2.5} />
                   </button>
                   
                   <h2 className="font-script text-6xl md:text-8xl leading-none text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                      {selectedCategory.title}
                   </h2>
                   <LotusIcon className="w-10 h-10 text-[#D4AF37] mt-5 drop-shadow-md" />
                </div>
              </div>

              {/* Tabela Header */}
              <div className="px-6 mt-16 mb-12 text-center relative z-10">
                 <h3 className="font-serif text-[32px] text-[#D4AF37] tracking-tight">Tabela de Valores</h3>
                 <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/30 mt-2">CATÁLOGO 2026</p>
                 
                 <div className="flex items-center justify-center gap-4 mt-8 opacity-60">
                    <div className="w-16 h-px bg-[#D4AF37]"></div>
                    <LotusIcon className="w-5 h-5 text-[#D4AF37]" />
                    <div className="w-16 h-px bg-[#D4AF37]"></div>
                 </div>
              </div>

              {/* Service Cards List */}
              <div className="px-5 space-y-4 max-w-xl mx-auto w-full relative z-10">
                {selectedCategory.services.map((svc: any, i) => (
                  svc.isTitle ? (
                    <div key={i} className="pt-10 pb-4">
                      <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#D4AF37] px-4 opacity-80">{svc.name}</span>
                    </div>
                  ) : (
                    <motion.div 
                      key={svc.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-[#E5E0D8]/40 rounded-2xl p-5 flex items-center gap-5"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center text-[#D4AF37] bg-[#FDFBF7] rounded-full border border-[#D4AF37]/10">
                        {(() => {
                           const name = svc.name.toLowerCase();
                           if (name.includes('alongamento')) return <ManicureHandsIcon className="w-6 h-6" />;
                           if (name.includes('manutenção')) return <SparklesIcon className="w-6 h-6" />;
                           if (name.includes('banho de gel')) return <DropIcon className="w-6 h-6" />;
                           if (name.includes('pincel') || name.includes('esmaltação em gel')) return <PolishBrushIcon className="w-6 h-6" />;
                           if (name.includes('esmaltação tradicional')) return <NailPolishIcon className="w-6 h-6" />;
                           if (name.includes('francesinha') || name.includes('flor')) return <FlowerIcon className="w-6 h-6" />;
                           return <SparklesIcon className="w-5 h-5" />;
                        })()}
                      </div>
                      
                      <div className="flex-1 min-w-0 flex items-center overflow-hidden">
                        <span className="text-[14px] font-sans font-semibold text-[#3E2723] leading-tight flex-shrink-0 uppercase tracking-tight">
                          {svc.name}
                        </span>
                        <div className="flex-1 mx-3 border-b border-dotted border-black/10 h-3"></div>
                      </div>

                      <div className="text-[18px] font-serif font-black text-[#D4AF37] flex-shrink-0">
                        R${svc.price}
                      </div>
                    </motion.div>
                  )
                ))}
              </div>

              {/* Extra Info Footer Box */}
              <div className="mt-16 px-5 max-w-xl mx-auto w-full relative z-10">
                <div className="bg-white/80 backdrop-blur-md border border-[#E5E0D8] rounded-[24px] p-8 flex flex-col md:flex-row gap-8 shadow-sm">
                   <div className="flex-1 flex items-center gap-5">
                      <SparklesIcon className="w-7 h-7 text-[#D4AF37] flex-shrink-0" />
                      <p className="text-[10px] text-[#3E2723] leading-relaxed font-bold uppercase tracking-[0.1em]">
                         Valores sujeitos a alteração. <br/> 
                         <span className="opacity-40 font-medium">Consulte condições na recepção.</span>
                      </p>
                   </div>
                   <div className="hidden md:block w-px h-12 bg-[#E5E0D8]/50"></div>
                   <div className="flex-1 flex items-center gap-5">
                      <Heart className="w-7 h-7 text-[#D4AF37] flex-shrink-0" />
                      <p className="text-[10px] text-[#3E2723] leading-relaxed font-bold uppercase tracking-[0.1em]">
                         Atendimento com <br/>
                         <span className="opacity-40 font-medium">excelência e carinho</span>
                      </p>
                   </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-12 px-6 flex justify-center sticky bottom-28 z-40">
                 <motion.a 
                   href="https://wa.me/5500000000000"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-[#3E2723] text-white px-14 py-6 rounded-full font-serif text-lg tracking-[0.2em] shadow-[0_15px_40px_rgba(62,39,35,0.3)] hover:bg-[#2D1B14] transition-all flex items-center gap-4"
                 >
                   AGENDAR AGORA
                   <ArrowRight className="w-5 h-5" />
                 </motion.a>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {!selectedCategory && view === 'catalogue' && (
        <nav className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
          <div className="bg-white/80 backdrop-blur-xl border-t border-[#D4AF37]/20 rounded-t-[40px] px-8 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pointer-events-auto">
             <button className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity px-6 cursor-pointer">
                <Calendar className="w-5 h-5 text-[#3E2723]" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-widest font-black text-[#3E2723]">Tabela</span>
             </button>
             
             <button className="relative flex flex-col items-center justify-center -mt-10 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white border border-[#D4AF37]/30 shadow-lg flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                   <LotusIcon className="w-8 h-8" />
                </div>
                <span className="text-[9px] uppercase tracking-widest font-black text-[#D4AF37] mt-3">Serviços</span>
             </button>

             <button className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity px-6 cursor-pointer">
                <CircleUserRound className="w-5 h-5 text-[#3E2723]" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-widest font-black text-[#3E2723]">Contato</span>
             </button>
          </div>
        </nav>
      )}
    </div>
  );
}

