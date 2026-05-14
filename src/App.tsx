/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowRight, 
  CalendarBlank, 
  UserCircle, 
  CaretLeft, 
  Sparkle, 
  Heart, 
  Clock, 
  Scissors, 
  FlowerLotus, 
  HandWaving, 
  Drop, 
  PaintBrush, 
  Flower, 
  MagicWand, 
  ShieldCheck, 
  Jar,
  Fingerprint,
  Crown,
  Diamond,
  InstagramLogo,
  WhatsappLogo,
  MapPin
} from '@phosphor-icons/react';
import ScheduleCatalog from './components/ScheduleCatalog';
import MechasPresentation from './components/MechasPresentation';
import InspirationGallery from './components/InspirationGallery';

const DecorationDivider = () => (
  <div className="flex items-center justify-center gap-2 my-2 opacity-60">
    <div className="w-12 h-px bg-[#D4AF37]"></div>
    <FlowerLotus className="w-4 h-4 text-[#D4AF37]" weight="light" />
    <div className="w-12 h-px bg-[#D4AF37]"></div>
  </div>
);

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[40px] text-[#F9F6F1]">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.4,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,0,1200,0H0Z" fill="currentColor"></path>
    </svg>
  </div>
);

const BotanicalDecor = () => (
  <div className="absolute top-1/2 right-[-20px] opacity-[0.2] pointer-events-none z-0">
    <svg width="250" height="450" viewBox="0 0 100 200" fill="none" stroke="#C5A059" strokeWidth="0.3">
      <path d="M20 180 Q 50 150 50 100 Q 50 50 80 20" />
      <path d="M50 140 Q 30 120 20 100" />
      <path d="M50 110 Q 70 90 85 80" />
      <path d="M50 80 Q 35 60 40 30" />
      <path d="M50 50 Q 80 40 90 10" />
      <circle cx="20" cy="100" r="1" fill="#C5A059" stroke="none" />
      <circle cx="85" cy="80" r="1" fill="#C5A059" stroke="none" />
      <circle cx="40" cy="30" r="1" fill="#C5A059" stroke="none" />
      <circle cx="90" cy="10" r="1" fill="#C5A059" stroke="none" />
      <circle cx="80" cy="20" r="1" fill="#C5A059" stroke="none" />
    </svg>
  </div>
);

const MãoEstrelaIcon = ({ className }: { className?: string }) => (
  <MagicWand className={className} weight="light" />
);

const ShieldDropIcon = ({ className }: { className?: string }) => (
  <ShieldCheck className={className} weight="light" />
);

const NetNailIcon = ({ className }: { className?: string }) => (
  <Fingerprint className={className} weight="light" />
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
      { name: 'PÉ E MÃO', price: 55 },
      { name: 'PÉ', price: 38 },
      { name: 'MÃO', price: 33 },
      { name: 'BANHO DE GEL', price: 99 },
      { name: 'ESMALTAÇÃO EM GEL', price: 77 },
      { name: 'BLINDAGEM', price: '71,50' },
      { name: 'REMOÇÃO DE BLINDAGEM', price: 22 },
      { name: 'REMOÇÃO DE ALONGAMENTO', price: 65 },
      { name: 'LIXAMENTO DOS PÉS', price: 11 },
      { name: 'PLASTICA DOS PÉS', price: 77 },
      { name: 'SPA DOS PÉS', price: 44 },
    ]
  },
  {
    id: 'mechas',
    title: 'Catálogo de Mechas',
    icon: Sparkle,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430863?q=80&w=800&auto=format&fit=crop',
    services: [
      { name: "ILUMINAR\nA PARTIR DE:", isTitle: true },
      { name: 'CURTO - PIXIE CUT', price: '544,50' },
      { name: 'CURTO - NUCA', price: '654,50' },
      { name: 'MÉDIO - PESCOÇO', price: 869 },
      { name: 'MÉDIO - OMBRO', price: 935 },
      { name: 'LONGO - SOUTIEN', price: '1.120' },
      { name: 'LONGO - CINTURA', price: '1.320' },
      { name: "CONTRASTE\nA PARTIR DE:", isTitle: true },
      { name: 'CURTO - PIXIE CUT', price: '544,50' },
      { name: 'CURTO - NUCA', price: '654,50' },
      { name: 'MÉDIO - PESCOÇO', price: 869 },
      { name: 'MÉDIO - OMBRO', price: 935 },
      { name: 'LONGO - SOUTIEN', price: '1.120' },
      { name: 'LONGO - CINTURA', price: '1.320' },
      { name: "CAMUFLAR\nA PARTIR DE:", isTitle: true },
      { name: 'CURTO - PIXIE CUT', price: '544,50' },
      { name: 'CURTO - NUCA', price: '654,50' },
      { name: 'MÉDIO - PESCOÇO', price: 869 },
      { name: 'MÉDIO - OMBRO', price: 935 },
      { name: 'LONGO - SOUTIEN', price: '1.120' },
      { name: 'LONGO - CINTURA', price: '1.320' },
      { name: "SUPER BLOND\nA PARTIR DE:", isTitle: true },
      { name: 'CURTO - NUCA', price: 759 },
      { name: 'MÉDIO - PESCOÇO', price: 979 },
      { name: 'MÉDIO - OMBRO', price: '1.045' },
      { name: 'LONGO - SOUTIEN', price: '1.122' },
      { name: 'EXTRA LONGO CINTURA', price: '1.375' },
      { name: "BLOND ILUMINAR\nA PARTIR DE:", isTitle: true },
      { name: 'CURTO - NUCA', price: 959 },
      { name: 'MÉDIO - PESCOÇO', price: '1.179' },
      { name: 'MÉDIO - OMBRO', price: '1.245' },
      { name: 'LONGO - SOUTIEN', price: '1.322' },
      { name: 'EXTRA LONGO CINTURA', price: '1.595' },
    ]
  },
  {
    id: 'cortes',
    title: 'Cortes e Escovas',
    icon: 'https://lh3.googleusercontent.com/d/1UxIS8fOztbkRpz7MQnXajw-mnTrysj9f',
    image: 'https://lh3.googleusercontent.com/d/10jt0RxQGTxWIAk_kMv3DUHKqQ8yqzLkt',
      services: [
        { name: 'Corte', isTitle: true },
        { name: 'Corte (Tesoura)', price: 99 },
        { name: 'Corte (Pontas)', price: 77 },
        { name: 'London', isTitle: true },
        { name: 'Curto', price: 300 },
        { name: 'Chanel | Nuca', price: 330 },
        { name: 'Médio | Ombro', price: 360 },
        { name: 'Longo | Soutien', price: 410 },
        { name: 'Longo Cintura', price: 490 },
        { name: "ANTIFRIZZ\nA PARTIR DE:", isTitle: true },
        { name: 'CHANEL - NUCA', price: 242 },
        { name: 'MÉDIO - OMBRO', price: 290 },
        { name: 'LONGO - SOUTIEN', price: 315 },
        { name: 'LONGO - CINTURA', price: 350 },
        { name: "ESCOVA\nA PARTIR DE:", isTitle: true },
        { name: 'CURTO', price: '55 | 60' },
        { name: 'MÉDIO', price: '72 | 75' },
        { name: 'LONGO SOUTIEN', price: '80 | 85' },
        { name: 'EXTRA LONGO CINTURA', price: '90 | 99' },
        { name: 'SECAGEM SIMPLES', price: 30 },
      ]
  },
  {
    id: 'tratamentos',
    title: 'Tratamentos',
    icon: 'https://lh3.googleusercontent.com/d/1LtkDoX56yK3Dv4XkU29eLVwE9icGob8U',
    image: 'https://lh3.googleusercontent.com/d/18285y_AaJ-tuP0vxU4d6mMyKS9Q2gOH-',
    services: [
      { name: "TRATAMENTO AVANÇADO INDIVIDUALIZADO\n(SESSÕES INDIVIDUAIS)\nA PARTIR DE:", isTitle: true },
      { name: 'TRUZ', price: 176 },
      { name: 'WELLA', price: 165 },
      { name: 'ALFAPARF', price: '159,50' },
      { name: 'ANETHUN', price: 132 },
      { name: 'ERIK KENED', price: 165 },
      { name: 'SPA DETOX ERIK KENED', price: 230 },
      { name: 'LOREAL (ABSOLUT REPER)', price: 215 },
    ]
  },
  {
    id: 'cor',
    title: 'Coloração',
    icon: 'https://lh3.googleusercontent.com/d/1wyJa2nIcF_f5TukpyoIJJHOKiXFwT0AV',
    image: 'https://lh3.googleusercontent.com/d/15l6uCMz04lseHMg5CvC8k6hn3FCrPXDU',
    services: [
      { name: "COLORAÇÕES\nA PARTIR DE:", isTitle: true },
      { name: 'RETOQUE', price: 109 },
      { name: 'RETOQUE + TRATAMENTO ( COM COLORAÇÃO DO STUDIO )', price: 148 },
      { name: 'COLORAÇÃO P', price: 155 },
      { name: 'COLORAÇÃO M', price: 190 },
      { name: 'COLORAÇÃO G', price: 242 },
      { name: 'COLORAÇÃO XG', price: 'SOB AVALIAÇÃO' },
    ]
  },
  {
    id: 'inspire-se',
    title: 'Inspire-se',
    icon: Sparkle,
    image: 'https://drive.google.com/thumbnail?id=1_Ob8nVE13ni75Z6tu5-UaBVO7y95gqIm&sz=w1000',
    services: []
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number] | null>(null);
  const [view, setView] = useState<'catalogue' | 'cronograma'>('catalogue');

  return (
    <div className="min-h-[100dvh] bg-[#F9F6F1] text-[#333333] font-sans flex flex-col selection:bg-[#C5A059]/20 relative overflow-x-hidden pb-24">
      <AnimatePresence>
        {view === 'cronograma' && (
          <ScheduleCatalog onClose={() => setView('catalogue')} />
        )}
        {selectedCategory?.id === 'mechas' && (
          <MechasPresentation onClose={() => setSelectedCategory(null)} />
        )}
        {selectedCategory?.id === 'inspire-se' && (
          <InspirationGallery onClose={() => setSelectedCategory(null)} />
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
              <div className="flex flex-col items-center justify-center pt-12 pb-8 text-center w-full max-w-sm mx-auto px-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative w-44 h-60 mb-10 group"
                >
                  <div className="absolute inset-0 border border-[#C5A059]/30 rounded-[100px] transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                  <div className="w-full h-full rounded-[100px] overflow-hidden border-2 border-white shadow-2xl relative">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1CxoQ3ZIxsnMPrO0fAvKKK-Ik1QjKRcWE&sz=w1000" 
                      alt="ELAINE VALERIO" 
                      className="w-full h-full object-cover scale-110 object-[center_30%] grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#C5A059]/20">
                    <FlowerLotus className="w-6 h-6 text-[#C5A059]" weight="light" />
                  </div>
                </motion.div>

                <span className="font-serif italic text-5xl md:text-7xl leading-none text-[#C5A059]">ELAINE VALERIO</span>
                <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#333333]/60 mt-2 font-medium">STUDIO DE BELEZA</span>
                
                <div className="flex items-center gap-2 my-6 opacity-60">
                   <div className="w-12 h-px bg-[#C5A059]"></div>
                   <FlowerLotus className="w-4 h-4 text-[#C5A059]" weight="light" />
                   <div className="w-12 h-px bg-[#C5A059]"></div>
                </div>
                
                <h1 className="font-serif text-3xl tracking-widest text-[#C5A059] uppercase">
                   Menu de Serviços
                </h1>

                <div className="flex items-center gap-2 mt-6 opacity-60">
                   <div className="w-12 h-px bg-[#C5A059]"></div>
                   <FlowerLotus className="w-4 h-4 text-[#C5A059]" weight="light" />
                   <div className="w-12 h-px bg-[#C5A059]"></div>
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
                    className="group bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/5 rounded-[20px] p-5 flex items-center transition-all hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(197,160,89,0.1)]"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-[#C5A059] overflow-hidden">
                      {typeof cat.icon === 'string' ? (
                        <img src={cat.icon} alt={cat.title} className="w-10 h-10 object-contain" />
                      ) : (
                        (() => {
                          const Icon = cat.icon as React.ComponentType<{ className?: string, weight?: string }>;
                          return Icon ? <Icon className="w-8 h-8" weight="light" /> : null;
                        })()
                      )}
                    </div>
                    <span className="flex-1 text-left text-sm font-sans font-semibold uppercase tracking-widest text-[#333333] ml-5 leading-tight">
                      {cat.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#C5A059] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" weight="light" />
                  </motion.button>
                ))}
              </div>
            </motion.section>
          ) : (selectedCategory.id === 'mechas' || selectedCategory.id === 'inspire-se') ? null : (
            <motion.section 
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col bg-[#F9F6F1] pb-44 relative overflow-hidden"
            >
              <BotanicalDecor />
              
              {/* Header Image with Curve */}
              <div className="relative h-[48vh] w-full overflow-hidden">
                <motion.div 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full absolute inset-0 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden"
                >
                  <img src={selectedCategory.image} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Refined Inset Frame from Photo Reference */}
                  <div className="absolute inset-4 border border-white/30 rounded-[30px] md:rounded-[60px] pointer-events-none"></div>
                </motion.div>
                
                {/* Curve SVG Separator */}
                <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none rotate-180 z-20">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#F9F6F1]">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.4,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,0,1200,0H0Z" fill="currentColor"></path>
                  </svg>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 px-6">
                  <button 
                     onClick={() => setSelectedCategory(null)}
                     className="absolute top-10 left-6 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(197,160,89,0.3)] border-2 border-[#C5A059] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group z-50"
                   >
                     <CaretLeft className="w-7 h-7 text-[#C5A059] group-hover:scale-110 transition-transform" weight="bold" />
                   </button>
                   
                   <h2 className="font-serif italic text-6xl md:text-8xl leading-none text-white drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)]">
                      {selectedCategory.id === 'tratamentos' ? '' : selectedCategory.title}
                   </h2>
                   <FlowerLotus className="w-10 h-10 text-[#C5A059] mt-3" weight="light" />
                </div>
              </div>

              {/* Tabela Header */}
              <div className="px-6 mt-16 mb-12 text-center relative z-10">
                 <h3 className="font-serif text-[36px] text-[#C5A059] tracking-tight leading-tight">Tabela de Valores</h3>
                 <p className="text-[11px] uppercase font-sans font-medium tracking-[0.5em] text-[#333333]/40 mt-1">CATÁLOGO 2026</p>
                 
                 <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="w-20 h-px bg-[#C5A059]/40"></div>
                    <FlowerLotus className="w-6 h-6 text-[#C5A059]" weight="light" />
                    <div className="w-20 h-px bg-[#C5A059]/40"></div>
                 </div>
              </div>

              {/* Service Cards List */}
              <div className="px-5 space-y-4 max-w-xl mx-auto w-full relative z-10">
                {selectedCategory.services.map((svc: any, i) => (
                  svc.isTitle ? (
                    <div key={i} className="pt-2 pb-4">
                      {svc.name.split('\n').map((line: string, idx: number) => {
                        let alignmentClass = 'text-left';
                        let sizeClass = 'text-[12px] tracking-[0.6em]';
                        let marginClass = 'mt-0';

                        if (idx === 0) {
                          alignmentClass = 'text-center';
                        } else if (line.includes('(SESSÕES INDIVIDUAIS)')) {
                          alignmentClass = 'text-center';
                          sizeClass = 'text-[10px] tracking-[0.4em]';
                          marginClass = 'mt-12';
                        } else if (line.includes('A PARTIR DE:')) {
                          alignmentClass = 'text-left';
                          sizeClass = 'text-[10px] tracking-[0.4em]';
                          marginClass = 'mt-8';
                        }

                        return (
                          <span 
                            key={idx} 
                            className={`${sizeClass} font-bold uppercase ${alignmentClass} text-[#C5A059] px-4 opacity-80 block ${marginClass}`}
                          >
                            {line}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <motion.div 
                      key={svc.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/[0.03] rounded-[15px] p-5 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C5A059]">
                        {(() => {
                            if (selectedCategory.id === 'tratamentos') return <Sparkle className="w-6 h-6" weight="light" />;
                            const name = svc.name.toLowerCase();
                            if (name.includes('alongamento')) return <HandWaving className="w-7 h-7" weight="light" />;
                            if (name.includes('manutenção')) return <MagicWand className="w-7 h-7" weight="light" />;
                            if (name.includes('banho de gel')) return <Drop className="w-7 h-7" weight="light" />;
                            if (name.includes('esmaltação em gel')) return <PaintBrush className="w-7 h-7" weight="light" />;
                            if (name.includes('postiça')) return <Fingerprint className="w-7 h-7" weight="light" />;
                            if (name.includes('blindagem')) return <ShieldCheck className="w-7 h-7" weight="light" />;
                            if (name.includes('truss') || name.includes('truz')) return <Crown className="w-7 h-7" weight="light" />;
                            if (name.includes('wella')) return <Diamond className="w-7 h-7" weight="light" />;
                            if (name.includes('anethun')) return <Jar className="w-7 h-7" weight="light" />;
                            if (name.includes('cronograma')) return <Jar className="w-7 h-7" weight="light" />;
                            return <Sparkle className="w-6 h-6" weight="light" />;
                        })()}
                      </div>
                      
                      <div className="flex-1 min-w-0 flex items-center">
                        <span className="text-[13px] md:text-[15px] font-sans font-medium text-[#333333] tracking-tight leading-snug uppercase">
                          {svc.name}
                        </span>
                        <div className="flex-1 mx-3 border-b border-dotted border-black/10 h-3 opacity-30"></div>
                      </div>

                      <div className={`${svc.price === 'SOB AVALIAÇÃO' ? 'text-[12px]' : 'text-[18px]'} font-sans font-bold text-[#C5A059] flex-shrink-0`}>
                        {svc.price === 'SOB AVALIAÇÃO' ? svc.price : `R$${svc.price}`}
                      </div>
                    </motion.div>
                  )
                ))}
              </div>

              {/* Footer Section */}
              <div className="mt-20 px-5 max-w-xl mx-auto w-full relative z-10">
                <div className="bg-[#FDFBF7] border border-black/[0.05] rounded-[24px] p-8 flex items-center divide-x divide-black/[0.05] shadow-sm">
                   <div className="flex-1 flex flex-col items-center text-center gap-4 px-4">
                      <Sparkle className="w-7 h-7 text-[#C5A059]" weight="light" />
                      <p className="text-[10px] text-[#333333] leading-relaxed font-semibold uppercase tracking-[0.1em]">
                         Valores sujeitos a alteração. <br/> 
                         <span className="opacity-40 font-normal">Consulte condições na recepção.</span>
                      </p>
                   </div>
                   <div className="flex-1 flex flex-col items-center text-center gap-4 px-4">
                      <Heart className="w-7 h-7 text-[#C5A059]" weight="light" />
                      <p className="text-[10px] text-[#333333] leading-relaxed font-semibold uppercase tracking-[0.1em]">
                         Atendimento com <br/>
                         <span className="opacity-40 font-normal">excelência e carinho</span>
                      </p>
                   </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-16 px-6 flex justify-center sticky bottom-8 z-40">
                  <motion.a 
                    href="https://wa.me/5522988335171"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#333333] text-white px-10 py-5 rounded-full font-sans font-semibold text-base tracking-[0.2em] shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-black transition-all flex items-center gap-4 text-center whitespace-nowrap"
                  >
                    AGENDAR AGORA
                    <ArrowRight className="w-5 h-5 text-[#C5A059]" weight="light" />
                  </motion.a>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {!selectedCategory && view === 'catalogue' && (
        <nav className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-xl border-t border-[#C5A059]/20 rounded-t-[40px] px-8 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.02)] pointer-events-auto">
             <a 
               href="https://www.instagram.com/valerioelaine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity px-6 cursor-pointer"
             >
                <InstagramLogo className="w-5 h-5 text-[#333333]" weight="light" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#333333]">Instagram</span>
             </a>
             
             <a 
               href="https://www.google.com/maps/search/?api=1&query=R.+Cap.+Vergara,+43+-+Coqueiral,+Araruama+-+RJ,+28982-335"
               target="_blank"
               rel="noopener noreferrer"
               className="relative flex flex-col items-center justify-center -mt-10 group cursor-pointer"
             >
                <div className="w-16 h-16 rounded-full bg-white border border-[#C5A059]/30 shadow-[0_8px_30px_rgba(197,160,89,0.15)] flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                   <MapPin className="w-8 h-8" weight="light" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C5A059] mt-3">Localização</span>
             </a>
 
             <a 
               href="https://wa.me/5522988335171" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity px-6 cursor-pointer"
             >
                <WhatsappLogo className="w-5 h-5 text-[#333333]" weight="light" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#333333]">WhatsApp</span>
             </a>
          </div>
        </nav>
      )}
    </div>
  );
}

