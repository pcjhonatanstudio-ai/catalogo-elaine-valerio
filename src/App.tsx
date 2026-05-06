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
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>(CATEGORIES[0]);
  const [view, setView] = useState<'catalogue' | 'cronograma'>('catalogue');

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1B14] font-sans flex flex-col md:h-screen md:overflow-hidden selection:bg-[#D4AF37]/20">
      <AnimatePresence>
        {view === 'cronograma' && (
          <ScheduleCatalog onClose={() => setView('catalogue')} />
        )}
      </AnimatePresence>

      <nav className="h-24 px-6 md:px-12 flex items-center justify-between border-b border-[#D4AF37]/10 flex-shrink-0 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex flex-col cursor-pointer" onClick={() => setView('catalogue')}>
          <span className="font-script text-4xl md:text-5xl leading-none text-[#D4AF37]">Elaine Valerio</span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase opacity-60 mt-1 font-bold">Studio de Beleza</span>
        </div>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-black">
          <span 
            className={`cursor-pointer transition-colors hover:text-[#D4AF37] ${view === 'catalogue' ? 'text-[#D4AF37]' : 'opacity-40'}`}
            onClick={() => setView('catalogue')}
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

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden overflow-y-auto md:overflow-y-hidden">
        <aside className="w-full md:w-80 lg:w-96 p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#D4AF37]/10 flex-shrink-0 overflow-y-visible md:overflow-y-auto bg-stone-50/30">
          <div className="space-y-2 md:space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-[#D4AF37] mb-6 opacity-80 pl-2">Categorias</h4>
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (cat.id === 'cronograma') {
                    setView('cronograma');
                    setSelectedCategory(cat);
                  } else {
                    setSelectedCategory(cat);
                  }
                }}
                className={`group cursor-pointer flex items-center justify-between p-4 transition-all duration-500 rounded-lg ${selectedCategory.id === cat.id ? 'bg-white shadow-[0_10px_30px_rgba(212,175,55,0.08)] border border-[#D4AF37]/20' : 'hover:bg-white/50 border border-transparent opacity-60 hover:opacity-100'}`}
              >
                <span className={`text-[11px] uppercase tracking-widest font-black ${selectedCategory.id === cat.id ? 'text-[#2D1B14]' : 'text-[#2D1B14]/70'}`}>{cat.title}</span>
                {selectedCategory.id === cat.id && (
                  <motion.div 
                    layoutId="activeDot"
                    className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </aside>

        <section className="flex-1 flex flex-col md:flex-row bg-white overflow-y-auto">
          <div className="w-full md:w-[45%] h-[300px] md:h-full flex-shrink-0 sticky md:relative top-0 z-10 md:z-auto">
            <div className="h-full w-full relative overflow-hidden group">
              <motion.img 
                key={selectedCategory.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={selectedCategory.image} 
                alt={selectedCategory.title} 
                className="w-full h-full object-cover grayscale-[10%]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B14]/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={selectedCategory.id + 'title'}
                  className="font-serif text-3xl md:text-5xl leading-tight"
                >
                  {selectedCategory.title}
                </motion.h2>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 md:p-16 lg:p-20">
            <header className="mb-10 flex items-baseline justify-between border-b border-[#D4AF37]/10 pb-6">
              <h3 className="font-serif text-xl md:text-2xl italic text-[#D4AF37]">Menu de Serviços</h3>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">Studio Elaine Valerio</span>
            </header>

            <div className="space-y-6 md:space-y-8">
              {selectedCategory.services.map((svc: any, i) => (
                svc.isTitle ? (
                  <div key={i} className="pt-8 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] opacity-80 border-b border-[#D4AF37]/20 block pb-2">{svc.name}</span>
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
                      <div className="flex justify-between items-end gap-4">
                        <span className="text-xs md:text-sm font-bold tracking-wide flex-1 text-[#2D1B14] group-hover:text-[#D4AF37] transition-colors">
                          {svc.name.split(/(\([^)]+\))/g).map((part: string, i: number) => {
                            const isParen = part.startsWith('(') && part.endsWith(')');
                            return (
                              <span 
                                key={i} 
                                className={isParen ? "font-medium opacity-50 text-[11px] md:text-xs block md:inline md:ml-1" : "uppercase"}
                              >
                                {part}
                              </span>
                            );
                          })}
                        </span>
                        <div className="flex-1 border-b border-dotted border-[#D4AF37]/20 mb-1 h-px"></div>
                        <span className="text-[#D4AF37] font-bold text-sm md:text-base ml-2">
                          R${svc.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>

            {selectedCategory.id === 'cronograma' && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setView('cronograma')}
                className="mt-16 w-full py-5 bg-[#D4AF37] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-lg shadow-xl shadow-[#D4AF37]/10 flex items-center justify-center gap-3 transition-all hover:bg-[#B8962E]"
              >
                Abrir Apresentação Completa
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </section>
      </main>

      <footer className="h-auto md:h-20 px-6 md:px-12 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between bg-white border-t border-[#D4AF37]/10 flex-shrink-0 gap-6 z-40">
        <div className="flex space-x-8 text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Facebook</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Pinterest</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-[9px] uppercase tracking-[0.3em] font-black opacity-30 hidden lg:block">Anamnese Capilar • LED Ponce • Ozônio</span>
          <a href="https://wa.me/5500000000000" className="px-8 py-3 bg-[#2D1B14] text-white rounded-full shadow-xl cursor-pointer hover:bg-[#D4AF37] transition-all text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5" />
            Agendar Agora
          </a>
        </div>
      </footer>
    </div>
  );
}

