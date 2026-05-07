/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Clock, Scissors, Sparkles, User, Calendar, CircleUserRound } from 'lucide-react';
import ScheduleCatalog from './components/ScheduleCatalog';

const NailPolishIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 8h8v4H8z" />
    <path d="M10 2h4v6h-4z" />
    <path d="M7 12h10v10H7z" />
  </svg>
);

const DecorationDivider = () => (
  <div className="flex items-center justify-center gap-2 my-2 opacity-80">
    <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
    <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
  </div>
);

const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a7 7 0 0 1 7 7c0 4-4 10-7 11-3-1-7-7-7-11a7 7 0 0 1 7-7z"/>
    <path d="M12 3c-2 2-2 6-2 6s-2-2-4-2-2 2-2 4 4 6 8 8 4-2 8-8-2-2-2-4-4-2-2 2-2 6s0-4-2-6z"/>
  </svg>
);

const LeafBackground = () => (
  <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20" preserveAspectRatio="none" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top Right Leaves */}
    <path d="M450 100 Q 380 50 350 150 Q 400 200 450 100" fill="#D4AF37" opacity="0.1"/>
    <path d="M400 0 Q 300 50 320 180 Q 450 150 400 0" fill="#D4AF37" opacity="0.05"/>
    <path d="M420 50 Q 350 80 340 160" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3"/>
    
    {/* Bottom Left Leaves */}
    <path d="M-50 700 Q 20 750 50 650 Q 0 600 -50 700" fill="#D4AF37" opacity="0.1"/>
    <path d="M0 800 Q 100 750 80 620 Q -50 650 0 800" fill="#D4AF37" opacity="0.05"/>
    <path d="M-20 750 Q 50 720 60 640" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3"/>

    {/* Abstract wavy lines */}
    <path d="M-100 300 Q 200 200 500 50" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path d="M-100 700 Q 200 800 500 950" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3"/>
  </svg>
);


const CATEGORIES = [
  {
    id: 'cronograma',
    title: 'Cronograma 2026',
    icon: Clock,
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
    icon: NailPolishIcon,
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
    icon: Scissors,
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
    icon: Sparkles,
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
    icon: User,
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
      <LeafBackground />
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
              <div className="flex flex-col items-center justify-center pt-16 pb-12 md:pt-24 text-center w-full max-w-sm mx-auto px-4">
                <span className="font-script text-6xl md:text-8xl leading-none text-[#D4AF37] relative -left-2">Elaine Valerio</span>
                <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-black/60 mt-1 font-semibold">Studio de Beleza</span>
                
                <DecorationDivider />
                
                <h1 className="flex flex-col items-center mt-6 md:mt-10">
                   <span className="font-serif text-[42px] md:text-[56px] leading-[0.9] text-[#3E2723]">MENU DE</span>
                   <span className="font-serif text-[42px] md:text-[56px] leading-[0.9] text-[#D4AF37]">SERVIÇOS.</span>
                   <div className="mt-4 opacity-50 text-[#D4AF37]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                   </div>
                </h1>
              </div>
              
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto px-5 relative z-10 pb-12">
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
                    className="group bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl py-6 px-6 flex items-center transition-all hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)]"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37]">
                      {cat.icon && <cat.icon className="w-8 h-8" strokeWidth={1.5} />}
                    </div>
                    <span className="flex-1 text-left text-sm md:text-base font-serif font-bold uppercase tracking-widest text-[#3E2723] ml-4 group-hover:text-[#D4AF37] transition-colors leading-tight">
                      {cat.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </div>
            </motion.section>
          ) : (
            <motion.section 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden"
            >
              <div className="w-full md:w-[40%] h-[400px] md:h-screen sticky top-0">
                <div className="h-full w-full relative overflow-hidden group">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    src={selectedCategory.image} 
                    alt={selectedCategory.title} 
                    className="w-full h-full object-cover grayscale-[20%]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 text-white">
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="flex items-center gap-3 text-[11px] uppercase font-bold tracking-[0.4em] mb-8 border border-white/10 rounded-full px-8 py-4 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-700 group relative overflow-hidden"
                    >
                      <X className="w-3.5 h-3.5 relative z-10 transition-transform duration-500 group-hover:rotate-180" />
                      <span className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">Voltar ao Menu</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s]"></div>
                    </button>
                    <h2 className="font-serif text-3xl md:text-8xl italic leading-[0.9] tracking-tighter mix-blend-difference">
                      {selectedCategory.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-20 overflow-y-auto bg-[#FDFBF7]">
                <div className="max-w-2xl">
                  <header className="mb-10 md:mb-16 pb-8 border-b border-black/10">
                    <h3 className="font-serif text-xl md:text-2xl italic text-[#D4AF37]">Tabela de Valores</h3>
                    <p className="text-[9px] md:text-[10px] uppercase font-black tracking-widest opacity-30 mt-2">Catálogo 2026</p>
                  </header>

                  <div className="space-y-6 md:space-y-12">
                    {selectedCategory.services.map((svc: any, i) => (
                      svc.isTitle ? (
                        <div key={i} className="pt-6 border-b border-black/5 pb-2">
                          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">{svc.name}</span>
                        </div>
                      ) : (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center group cursor-default"
                        >
                          <div className="flex-1">
                            <div className="flex justify-between items-end gap-4 md:gap-6">
                              <span className="text-base md:text-2xl font-black tracking-tighter flex-1 text-[#2D1B14] group-hover:text-[#D4AF37] transition-all uppercase">
                                {svc.name.split(/(\([^)]+\))/g).map((part: string, i: number) => {
                                  const isParen = part.startsWith('(') && part.endsWith(')');
                                  return (
                                    <span 
                                      key={i} 
                                      className={isParen ? "font-serif italic opacity-40 text-xs md:text-lg lowercase block md:inline md:ml-2 font-normal" : ""}
                                    >
                                      {part}
                                    </span>
                                  );
                                })}
                              </span>
                              <div className="flex-1 border-b border-dotted border-black/10 mb-2 h-px"></div>
                              <span className="text-[#D4AF37] font-black text-lg md:text-4xl ml-2 md:ml-4">
                                R${svc.price}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>

                  <div className="mt-24 pt-12 border-t border-black/10 flex flex-col gap-10">
                    <p className="text-xs italic text-black/40">Valores sujeitos a alteração conforme avaliação técnica presencial.</p>
                    <a 
                      href="https://wa.me/5500000000000" 
                      className="group relative w-full py-10 bg-black text-white text-center rounded-3xl text-[12px] font-bold uppercase tracking-[0.6em] hover:bg-[#D4AF37] transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden"
                    >
                      <span className="relative z-10">AGENDAR AGORA</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </div>
                </div>
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

