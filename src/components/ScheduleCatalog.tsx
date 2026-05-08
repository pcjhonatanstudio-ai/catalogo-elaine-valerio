import React from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  WhatsappLogo, 
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/17718491707347506178',
      description: 'A excelência em tratamentos capilares personalizados.'
    },
    {
      id: 'tecnologia',
      type: 'content',
      title: 'Tecnologia & Ciência',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/729032443470409124',
      description: 'Aliamos tecnologia de ponta com o aparelho Ponce para resultados extraordinários na regeneração da fibra capilar.',
      icon: <Sparkle className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'anamnese',
      type: 'content',
      title: 'Anamnese Personalizada',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/3323410242616565418',
      description: 'Cada diagnóstico é único. Realizamos análise microscópica profunda para identificar as reais necessidades do seu fio.',
      icon: <CheckCircle className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'truss',
      type: 'price',
      brand: 'Truss Infusion',
      title: 'Protocolo Truss',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/12921822144226505389',
      schedulePrice: '720',
      singlePrice: '150',
      icon: <Crown className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'wella',
      type: 'price',
      brand: 'Wella Professionals',
      title: 'Luxury Care Wella',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9795754315464976754',
      schedulePrice: '570',
      singlePrice: '143',
      icon: <Diamond className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'alfaparf',
      type: 'price',
      brand: 'Alfaparf Milano',
      title: 'Excellence Alfaparf',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9806936743572695880',
      schedulePrice: '450',
      singlePrice: '130',
      icon: <Sparkle className="w-12 h-12 text-[#C5A059]" weight="light" />
    },
    {
      id: 'aneethun',
      type: 'price',
      brand: 'Aneethun',
      title: 'Essential Aneethun',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/3281091352048834621',
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
        className="fixed top-8 right-8 z-[110] bg-white/5 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] p-3 rounded-full hover:bg-[#C5A059]/10 active:scale-95 transition-all"
      >
        <X className="w-6 h-6" />
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <span className="text-[#C5A059] tracking-[0.6em] text-xs font-semibold mb-4 uppercase">Experience Luxury</span>
                <h1 className="font-serif text-6xl md:text-8xl text-white mb-2 tracking-tight">
                  {slide.title}
                </h1>
                <h2 className="font-serif italic text-7xl md:text-9xl text-[#C5A059] -mt-4 drop-shadow-2xl">
                  {slide.subtitle}
                </h2>
                
                <div className="w-full max-w-sm mt-12 aspect-[4/5] relative">
                  <div className="absolute inset-0 border border-[#C5A059]/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                </div>
                
                <p className="mt-12 text-[#E5E5E5]/60 text-sm tracking-[0.2em] font-medium max-w-xs leading-relaxed">
                  {slide.description}
                </p>

                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-12 text-[#C5A059]/50"
                >
                  <CaretDown className="w-8 h-8" weight="light" />
                </motion.div>
              </motion.div>
            )}

            {slide.type === 'content' && (
              <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    {slide.icon}
                    <div className="h-px bg-[#C5A059]/30 flex-1"></div>
                  </div>
                  <h2 className="font-serif text-5xl text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-[#E5E5E5]/70 text-lg leading-relaxed font-light">
                    {slide.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <div className="absolute inset-0 border border-[#C5A059]/20 rounded-3xl -rotate-3 scale-[1.02] transform transition-transform group-hover:rotate-0"></div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#C5A059]/30 shadow-2xl">
                     <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            )}

            {slide.type === 'price' && (
              <div className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mb-8 flex flex-col items-center"
                >
                  <div className="mb-4">{slide.icon}</div>
                  <span className="text-[#C5A059] tracking-[0.4em] text-[10px] uppercase font-bold mb-2">{slide.brand}</span>
                  <h2 className="font-serif text-4xl text-white italic">{slide.title}</h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 backdrop-blur-xl border border-[#C5A059]/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-3xl"
                >
                  {/* Imagem do Produto */}
                  <div className="w-full md:w-1/2 h-64 md:h-96 relative bg-black/40">
                    <img 
                      src={slide.image} 
                      alt={slide.brand} 
                      className="w-full h-full object-contain p-8 transform hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* Tabela de Preços */}
                  <div className="w-full md:w-1/2 p-10 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l border-[#C5A059]/10">
                    <div className="flex flex-col gap-2">
                       <div className="flex justify-between items-end border-b border-[#C5A059]/10 pb-4">
                          <span className="text-[#E5E5E5]/60 text-xs font-semibold uppercase tracking-widest">Cronograma 2026</span>
                          <span className="text-[#C5A059] font-serif text-3xl">R$ {slide.schedulePrice}</span>
                       </div>
                       <p className="text-[10px] text-[#E5E5E5]/40 text-left mt-1 italic tracking-wider">Protocolo Premium com 4 sessões</p>
                    </div>

                    <div className="flex flex-col gap-2">
                       <div className="flex justify-between items-end border-b border-[#C5A059]/10 pb-4">
                          <span className="text-[#E5E5E5]/60 text-xs font-semibold uppercase tracking-widest">Sessão Avulsa</span>
                          <span className="text-[#E5E5E5] font-serif text-3xl">R$ {slide.singlePrice}</span>
                       </div>
                       <p className="text-[10px] text-[#E5E5E5]/40 text-left mt-1 italic tracking-wider">Experiência única restauradora</p>
                    </div>

                    <p className="text-[9px] text-[#C5A059]/50 uppercase tracking-[0.2em] font-medium text-left mt-4 border-l-2 border-[#C5A059] pl-3">
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
         <p className="text-[#E5E5E5]/20 text-[9px] uppercase tracking-widest leading-loose">
           Copyright © 2026 ELAINE VALÉRIO LUXURY HAIR. <br/>
           Todos os direitos reservados.
         </p>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <motion.a
        href="https://wa.me/5500000000000"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-[#C5A059] text-[#0D0D0D] px-10 py-5 rounded-full font-sans font-bold text-xs tracking-[0.3em] shadow-[0_15px_40px_rgba(197,160,89,0.3)] flex items-center gap-4 whitespace-nowrap"
      >
        <WhatsappLogo className="w-5 h-5" weight="bold" />
        RESERVAR HORÁRIO
      </motion.a>
    </motion.div>
  );
}
