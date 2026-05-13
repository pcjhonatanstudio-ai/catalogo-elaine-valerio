import React from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Crown, 
  Diamond, 
  CheckCircle, 
  CaretDown,
  Sparkle
} from '@phosphor-icons/react';

export default function ScheduleCatalog({ onClose }: { onClose: () => void }) {
  const slides = [
    {
      id: 'capa',
      type: 'hero',
      title: 'CRONOGRAMA',
      subtitle: '2026',
      image: 'https://drive.google.com/thumbnail?id=1X-mAClSsAFRdN_ZaL0oYzOhiZZbzlVIR&sz=w1000',
      description: 'A excelência em tratamentos capilares personalizados.'
    },
    {
      id: 'tecnologia',
      type: 'content',
      title: 'Tecnologia & Ciência',
      image: 'https://drive.google.com/thumbnail?id=1KMCd1uNowV-3u7lN7TYByOccwLti9m6d&sz=w1000',
      description: 'Unimos inovação tecnológica e o aparelho Ponce para transformar profundamente a saúde da fibra capilar.',
      icon: <Sparkle className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'anamnese',
      type: 'content',
      title: 'Anamnese Personalizada',
      image: 'https://drive.google.com/thumbnail?id=1vfZPDA-F68CDGfDU6G4QUaI8XSC_MEBC&sz=w1000',
      description: 'Cada diagnóstico é único. Realizamos análise microscópica profunda para identificar as reais necessidades do seu fio.',
      icon: <CheckCircle className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'truss',
      type: 'price',
      brand: 'Truss Infusion',
      title: 'Protocolo Truss',
      image: 'https://drive.google.com/thumbnail?id=1sUVOtt5CNMVgxLwzoxffl7KerLCFU97T&sz=w1000',
      schedulePrice: '720',
      singlePrice: '150',
      icon: <Crown className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'wella',
      type: 'price',
      brand: 'Wella Professionals',
      title: 'Luxury Care Wella',
      image: 'https://drive.google.com/thumbnail?id=11KJa31i89js-8iN4LeAk7UHeInJuVQpZ&sz=w1000',
      schedulePrice: '570',
      singlePrice: '143',
      icon: <Diamond className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'alfaparf',
      type: 'price',
      brand: 'Alfaparf Milano',
      title: 'Excellence Alfaparf',
      image: 'https://drive.google.com/thumbnail?id=1J5FdaKQhhURl5iCgVu7psfVsxBoXRKM_&sz=w1000',
      schedulePrice: '450',
      singlePrice: '130',
      icon: <Sparkle className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'aneethun',
      type: 'price',
      brand: 'Aneethun',
      title: 'Essential Aneethun',
      image: 'https://drive.google.com/thumbnail?id=1khESMmmezgAZzyj-dVM6EU7a1hUtE71q&sz=w1000',
      schedulePrice: '400',
      singlePrice: '108',
      icon: <CheckCircle className="w-12 h-12 text-[#C5A059]" weight="light" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0D0D0D] text-[#E5E5E5] overflow-y-scroll snap-y snap-mandatory font-sans"
    >
      {/* Botão Fechar Luxo */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] bg-white border-2 border-[#C5A059] text-[#C5A059] p-3 rounded-full shadow-[0_4px_20px_rgba(197,160,89,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <X className="w-6 h-6 group-hover:rotate-90 transition-transform" weight="bold" />
      </button>

      {slides.map((slide, index) => (
        <section 
          key={slide.id}
          className="h-screen w-full snap-start relative flex flex-col items-center justify-center overflow-hidden px-6"
        >
          {/* Background Gradient Sutil */}
          <div className="absolute inset-0 bg-[#0D0D0D]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(197,160,89,0.03)_0%,transparent_70%)] pointer-events-none"></div>
          </div>

          <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
            
            {slide.type === 'hero' && (
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center w-full"
              >
                <span className="text-[#C5A059] tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs font-semibold mb-2 md:mb-4 uppercase shrink-0">Experience Luxury</span>
                <h1 className="font-serif text-5xl md:text-8xl text-white mb-1 md:mb-2 tracking-tight shrink-0">
                  {slide.title}
                </h1>
                <h2 className="font-serif italic text-6xl md:text-9xl text-[#C5A059] -mt-2 md:-mt-4 drop-shadow-2xl shrink-0">
                  {slide.subtitle}
                </h2>
                
                <div className="w-full max-w-[260px] md:max-w-sm mt-6 md:mt-10 aspect-video relative group">
                  <div className="absolute inset-0 border border-[#C5A059]/40 rounded-2xl -z-10 shadow-[0_0_20px_rgba(197,160,89,0.1)]"></div>
                  <div className="w-full h-full bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      referrerPolicy="no-referrer"
                      className={`w-full h-full shadow-2xl transition-opacity duration-700 object-center ${
                        slide.id === 'capa' ? 'object-cover scale-105' : 'object-cover'
                      }`} 
                    />
                  </div>
                </div>
                
                <p className="mt-8 md:mt-12 text-[#E5E5E5]/60 text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] font-medium max-w-[250px] md:max-w-xs leading-relaxed shrink-0">
                  {slide.description}
                </p>

                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-6 md:mt-12 text-[#C5A059]/50"
                >
                  <CaretDown className="w-6 h-6 md:w-8 md:h-8" weight="light" />
                </motion.div>
              </motion.div>
            )}

            {slide.type === 'content' && (
              <div className="grid md:grid-cols-2 gap-8 md:grid-cols-2 md:gap-12 items-center text-left max-w-3xl md:max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 scale-75 md:scale-100">{slide.icon}</div>
                    <div className="h-px bg-[#C5A059]/30 flex-1"></div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-[#E5E5E5]/70 text-sm md:text-lg leading-relaxed font-light">
                    {slide.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative group hidden md:block" // Hide image on very small mobile for content slides if it overflows, or scale it
                >
                  <div className="relative aspect-video overflow-hidden rounded-3xl border border-[#C5A059]/30 shadow-2xl bg-black/20 flex items-center justify-center">
                     <img 
                       src={slide.image} 
                       alt={slide.title} 
                       referrerPolicy="no-referrer"
                       className={`w-full h-full object-center ${
                         slide.id === 'anamnese' ? 'object-cover scale-110' : 
                         slide.id === 'tecnologia' ? 'object-cover scale-150' : 
                         'object-cover'
                       }`} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </motion.div>
                {/* Mobile version of image - smaller */}
                <div className="md:hidden relative mt-4 w-full flex justify-center px-4">
                   <div className="relative aspect-video max-h-[30vh] w-full overflow-hidden rounded-2xl border border-[#C5A059]/30 shadow-xl bg-black/20 flex items-center justify-center">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-center ${
                          slide.id === 'anamnese' ? 'object-cover scale-110' : 
                          slide.id === 'tecnologia' ? 'object-cover scale-150' : 
                          'object-cover'
                        }`} 
                      />
                   </div>
                </div>
              </div>
            )}

            {slide.type === 'price' && (
              <div className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mb-6 md:mb-8 flex flex-col items-center"
                >
                  <div className="mb-2 md:mb-4 scale-75 md:scale-100">{slide.icon}</div>
                  <span className="text-[#C5A059] tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase font-bold mb-1 md:mb-2">{slide.brand}</span>
                  <h2 className="font-serif text-2xl md:text-4xl text-white italic">{slide.title}</h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 backdrop-blur-xl border border-[#C5A059]/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-sm md:max-w-3xl"
                >
                  {/* Imagem do Produto */}
                  <div className="w-full md:w-1/2 aspect-video relative bg-black/40 flex items-center justify-center overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={slide.brand} 
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-center ${
                        slide.id === 'aneethun' || slide.id === 'alfaparf' ? 'object-cover scale-110' :
                        slide.id === 'wella' ? 'object-cover scale-110' :
                        slide.id === 'truss' ? 'object-cover scale-110' :
                        'object-cover'
                      }`} 
                    />
                  </div>
                  
                  {/* Tabela de Preços */}
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center gap-4 md:gap-8 border-t md:border-t-0 md:border-l border-[#C5A059]/10">
                    <div className="flex flex-col gap-1 md:gap-2">
                       <div className="flex justify-between items-end border-b border-[#C5A059]/10 pb-2 md:pb-4">
                          <span className="text-[#E5E5E5]/60 text-[10px] md:text-xs font-semibold uppercase tracking-widest">Cronograma 2026</span>
                          <span className="text-[#C5A059] font-serif text-xl md:text-3xl">R$ {slide.schedulePrice}</span>
                       </div>
                       <p className="text-[10px] text-[#E5E5E5]/40 text-left mt-1 italic tracking-wider">Protocolo Premium com 4 sessões</p>
                    </div>

                    <div className="flex flex-col gap-1 md:gap-2">
                       <div className="flex justify-between items-end border-b border-[#C5A059]/10 pb-2 md:pb-4">
                          <span className="text-[#E5E5E5]/60 text-[10px] md:text-xs font-semibold uppercase tracking-widest">Sessão Avulsa</span>
                          <span className="text-[#E5E5E5] font-serif text-xl md:text-3xl">R$ {slide.singlePrice}</span>
                       </div>
                       <p className="text-[10px] text-[#E5E5E5]/40 text-left mt-1 italic tracking-wider">Experiência única restauradora</p>
                    </div>

                    <p className="text-[9px] text-[#C5A059]/50 uppercase tracking-[0.2em] font-medium text-left mt-2 md:mt-4 border-l-2 border-[#C5A059] pl-3">
                      Produtos ORIGINAIS • Alta Performance
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            
            {/* Indicador de Continuar para baixo, exceto no último slide */}
            {index < slides.length - 1 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
                <CaretDown className="w-6 h-6 animate-bounce" />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Rodapé e Botão WhatsApp */}
      <footer className="h-[20vh] w-full snap-start bg-[#050505] flex flex-col items-center justify-center border-t border-[#C5A059]/10 px-6 text-center">
         <p className="text-[#C5A059]/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Consulte condições na recepção</p>
         <div className="w-12 h-px bg-[#C5A059]/20 mb-4"></div>
      </footer>

    </motion.div>
  );
}
