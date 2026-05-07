/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Scissors, Sparkles, Paintbrush, Flame, ArrowRight } from 'lucide-react';
import ScheduleCatalog from './components/ScheduleCatalog';

const CATEGORIES = [
  {
    id: 'cronograma',
    title: 'Cronograma 2026',
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1B14] font-sans flex flex-col selection:bg-[#D4AF37]/20">
      <AnimatePresence>
        {view === 'cronograma' && (
          <ScheduleCatalog onClose={() => setView('catalogue')} />
        )}
      </AnimatePresence>

      <nav className="h-24 px-6 md:px-12 flex items-center justify-between border-b border-[#D4AF37]/10 flex-shrink-0 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex flex-col cursor-pointer" onClick={() => { setView('catalogue'); setSelectedCategory(null); }}>
          <span className="font-script text-4xl md:text-5xl leading-none text-[#D4AF37]">Elaine Valerio</span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase opacity-60 mt-1 font-bold">Studio de Beleza</span>
        </div>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-black">
          <span 
            className={`cursor-pointer transition-colors hover:text-[#D4AF37] ${view === 'catalogue' ? 'text-[#D4AF37]' : 'opacity-40'}`}
            onClick={() => { setView('catalogue'); setSelectedCategory(null); }}
          >
            Serviços
          </span>
          <span 
            className={`cursor-pointer transition-colors hover:text-[#D4AF37] ${view === 'cronograma' ? 'text-[#D4AF37]' : 'opacity-40'}`}
            onClick={() => setView('cronograma')}
          >
            Cronograma 2026
          </span>
          <span className="opacity-20 cursor-default">Lookbook</span>
          <span className="opacity-20 cursor-default">Reservas</span>
        </div>
      </nav>

      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.section 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
            >
              <h1 className="text-[7.5vw] md:text-[5vw] font-black tracking-tighter leading-none mb-12 border-b border-black/5 pb-8 uppercase whitespace-nowrap">
                Menu de <span className="text-[#D4AF37] italic font-serif">Serviços.</span>
              </h1>
              
              <div className="flex flex-col relative">
                {CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ x: 20 }}
                    onClick={() => {
                      if (cat.id === 'cronograma') {
                         setView('cronograma');
                      } else {
                         setSelectedCategory(cat);
                         window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="group border-b border-black/10 py-10 md:py-12 flex items-center justify-between transition-all relative overflow-hidden px-4 hover:bg-[#D4AF37]/5 backdrop-blur-[2px]"
                  >
                    <div className="flex items-baseline gap-6 relative z-10">
                      <span className="text-3xl md:text-8xl font-black tracking-tighter group-hover:italic transition-all uppercase group-hover:text-[#D4AF37]">
                        {cat.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                      <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all text-[#D4AF37] translate-x-4 group-hover:translate-x-0 hidden md:block">Descobrir</span>
                      <ArrowRight className="w-8 h-8 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-all text-[#D4AF37] scale-75 group-hover:scale-100" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
                      className="flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.3em] mb-6 border border-white/20 rounded-full px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all group overflow-hidden relative"
                    >
                      <X className="w-3 h-3 relative z-10 transition-transform group-hover:rotate-90" />
                      <span className="relative z-10">Voltar ao Menu</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    <h2 className="font-serif text-4xl md:text-8xl italic leading-[0.9] tracking-tighter">
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

                  <div className="mt-24 pt-12 border-t border-black/10 flex flex-col gap-8">
                    <p className="text-xs italic text-black/40">Valores sujeitos a alteração conforme avaliação técnica presencial.</p>
                    <a href="https://wa.me/5500000000000" className="group relative w-full py-8 bg-black text-white text-center rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#D4AF37] transition-all shadow-2xl overflow-hidden">
                      <span className="relative z-10">Agendar Horário</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="h-auto md:h-24 px-6 md:px-12 py-10 md:py-0 flex flex-col md:flex-row items-center justify-between border-t border-[#D4AF37]/10 bg-white/50 backdrop-blur-sm relative z-40 gap-8">
        <div className="flex space-x-12 text-[9px] uppercase tracking-[0.2em] font-black opacity-30">
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Tabela</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Serviços</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Contato</span>
        </div>
        
        <div className="flex items-center gap-8">
           <span className="text-[10px] font-black uppercase tracking-widest opacity-20 hidden lg:block italic">Elegância em cada detalhe.</span>
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-serif italic text-[#D4AF37]">Studio Elaine Valerio</span>
              <span className="text-[8px] uppercase tracking-tighter opacity-40">2026 All Rights Reserved</span>
           </div>
        </div>
      </footer>
    </div>
  );
}

