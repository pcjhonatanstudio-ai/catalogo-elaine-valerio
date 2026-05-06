import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Globe, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

const IMAGES = {
  truss_hero: 'https://lh3.googleusercontent.com/d/1jV2OGJHmAzzKn_0_gYWgoLiRM_PKA9ku',
  truss_logo: 'https://www.trusshair.com.br/arquivos/logo-truss.png',
  wella_logo: 'https://seeklogo.com/images/W/wella-logo-0A86E45E8D-seeklogo.com.png',
  alfaparf_logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Alfaparf_Group_Logo.png',
  device: 'https://lh3.googleusercontent.com/d/12txvF5bAXfPg8wTlWYBtlYkyBL7eR2Yd',
  truss_products: 'https://lh3.googleusercontent.com/d/1AqBMrfdV7V74rPc4O-681_Ky5QE1EVx5',
  wella_products: 'https://lh3.googleusercontent.com/d/1gGjOXw6VOG62eLOBlvGgnh-MKNNczDDX',
  alfaparf_products: 'https://lh3.googleusercontent.com/d/1l_6feX81b0UI8pLcrempdxk3thq9RtVK',
};

const Page = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden py-12 md:py-20 px-4 md:px-12 ${className}`}>
    {children}
  </section>
);

export default function ScheduleCatalog({ onClose }: { onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#FDFBF7] overflow-y-auto scroll-smooth grain"
      ref={containerRef}
    >
      {/* Background Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference pointer-events-none text-white">
        <div className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl italic">Elaine Valerios</span>
          <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-black opacity-50">High Performance Care</span>
        </div>
        <button 
          onClick={onClose}
          className="bg-white text-black px-6 py-2 rounded-full text-[9px] md:text-[10px] uppercase font-black tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all duration-300 pointer-events-auto flex items-center gap-2"
        >
          <span className="md:hidden">Voltar</span>
          <span className="hidden md:inline">Voltar ao Menu</span>
        </button>
      </nav>

      {/* PAGE 1: HERO */}
      <Page className="bg-[#FDFBF7] !justify-start !pt-24 relative">
        {/* Ghost Text */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none z-0">
          <span className="text-[30vw] font-black text-[#D4AF37]">EV</span>
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <h1 className="flex flex-col leading-none tracking-tighter">
              <span className="text-[14vw] md:text-[8vw] font-black text-black">CRONO</span>
              <span className="text-[14vw] md:text-[8vw] font-black text-black">GRA</span>
              <span className="text-[14vw] md:text-[8vw] font-black text-black ml-[2vw] md:ml-[4vw]">MA</span>
            </h1>
            <div className="mt-2 md:mt-4">
              <span className="text-[10vw] md:text-[5vw] font-serif italic text-black/20 leading-none">2026.</span>
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 md:mt-16 flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Select Brands</span>
                <div className="flex items-center gap-4 grayscale opacity-40">
                   <img src={IMAGES.truss_logo} className="h-4 md:h-6 object-contain" alt="Truss" />
                   <img src={IMAGES.wella_logo} className="h-4 md:h-6 object-contain" alt="Wella" />
                   <img src={IMAGES.alfaparf_logo} className="h-4 md:h-6 object-contain" alt="Alfaparf" />
                </div>
              </div>
              <div className="w-px h-12 bg-black/10 hidden md:block"></div>
              <p className="text-xs md:text-sm text-black/40 font-medium tracking-tight max-w-[200px]">
                Uma curadoria exclusiva dos protocolos mais sofisticados do mundo.
              </p>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative flex justify-center items-center w-full">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] md:max-w-[450px]"
            >
              <img src={IMAGES.truss_hero} alt="Truss Hero" className="w-full h-auto drop-shadow-2xl grayscale" />
              <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-black text-white p-4 md:p-10 min-w-[200px]">
                <span className="text-[8px] md:text-[12px] uppercase font-black tracking-[0.3em] block mb-1 md:mb-2 text-[#D4AF37]">Elaine Valerio</span>
                <span className="text-xl md:text-4xl font-serif italic">The Art of Care</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 origin-center mb-6">Scroll</span>
          <div className="w-px h-12 bg-black animate-pulse"></div>
        </div>
      </Page>


      {/* PAGE 2: TECNOLOGIA */}
      <Page className="bg-[#1A1512] text-white">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-[7vw] font-black tracking-tighter italic mb-6 md:mb-8 text-[#D4AF37]">TECNOLOGIA</h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm md:text-2xl text-white/70 font-light leading-relaxed">
                  Utilizamos o poder do <span className="text-white font-bold italic">O-ZÔNIO + LED</span> para potencializar cada tratamento. O Ozônio bactericida limpa profundamente o couro cabeludo, enquanto o LED de alta intensidade acelera a absorção dos ativos na fibra capilar.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-10">
                  <div className="border border-white/10 p-4 md:p-6 hover:bg-white/5 transition-colors group cursor-default">
                    <CheckCircle2 className="text-[#D4AF37] mb-2 md:mb-4 group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="text-[10px] md:text-sm font-bold uppercase mb-1 md:mb-2">Ozonioterapia</h3>
                    <p className="text-[9px] md:text-xs text-white/40">Recuperação celular profunda.</p>
                  </div>
                  <div className="border border-white/10 p-4 md:p-6 hover:bg-white/5 transition-colors group cursor-default">
                    <CheckCircle2 className="text-[#D4AF37] mb-2 md:mb-4 group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="text-[10px] md:text-sm font-bold uppercase mb-1 md:mb-2">Fotoestimulação</h3>
                    <p className="text-[9px] md:text-xs text-white/40">Crescimento e brilho extremo.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              src={IMAGES.device} 
              alt="Technology Device" 
              className="w-full max-w-[280px] md:max-w-[500px] h-auto grayscale brightness-125 select-none pointer-events-none" 
            />
          </div>
        </div>

        {/* Floating Detail */}
        <div className="w-full max-w-7xl mx-auto mt-12 md:mt-20 pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
           <h3 className="text-3xl md:text-6xl font-serif italic text-white/20">Anamnese Capilar</h3>
           <div className="flex flex-col md:items-end">
             <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-2 md:mb-1">Incluso em todos os planos</span>
             <p className="text-[10px] md:text-xs text-white/40 max-w-[280px] text-center md:text-right">Análise microscópica e teste de resistência antes de cada sessão.</p>
           </div>
        </div>
      </Page>


      {/* PAGE 3: TRUSS & WELLA */}
      <Page className="bg-[#FCF9F2]">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
          {/* TRUSS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4 relative group max-w-[280px] mx-auto md:max-w-none">
              <img src={IMAGES.truss_products} className="w-full h-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-700" alt="Truss Products" />
              <div className="absolute -top-4 -left-4 bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                <span className="text-[10px] md:text-xs font-black">TOP 1</span>
              </div>
            </div>
            
            <div className="md:col-span-8 flex flex-col md:pl-20 text-center md:text-left">
               <h2 className="text-lg md:text-4xl font-serif italic mb-1 md:mb-2 text-black/30">Cronograma</h2>
               <h3 className="text-4xl md:text-[6vw] font-black tracking-tighter text-black leading-none mb-6 md:mb-10 uppercase">TRUSS</h3>
               
               <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center md:items-end justify-center md:justify-start">
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-2 md:mb-4 italic">Pacote Premium (4 sessões)</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-5xl md:text-[5vw] font-black leading-none text-black">R$ 720</span>
                      <span className="text-base md:text-2xl font-bold opacity-30 text-black">,00</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-2 md:mb-4 italic">Sessão Avulsa</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-3xl md:text-5xl font-black text-[#D4AF37]">R$ 180</span>
                      <span className="text-sm md:text-lg font-bold opacity-30 text-[#D4AF37]">,00</span>
                    </div>
                  </div>
               </div>
               
               <p className="mt-8 md:mt-12 text-xs md:text-base text-black/50 max-w-xl leading-relaxed italic border-l-2 border-black/10 pl-6 mx-auto md:mx-0">
                A tecnologia de infusão lipídica mais premiada do Brasil. Recuperação imediata do brilho, toque aveludado e proteção térmica extrema.
               </p>
            </div>
          </div>

          <div className="h-px w-full bg-black/5"></div>

          {/* WELLA SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8 flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1">
               <h2 className="text-lg md:text-4xl font-serif italic mb-1 md:mb-2 text-black/30">Cronograma</h2>
               <h3 className="text-4xl md:text-[6vw] font-black tracking-tighter text-black leading-none mb-6 md:mb-10 uppercase">WELLA</h3>
               
               <div className="flex flex-col sm:flex-row-reverse gap-6 md:gap-12 items-center md:items-end justify-center md:justify-end">
                  <div className="flex flex-col items-center md:items-end">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-2 md:mb-4 italic">Pacote Excellence (4 sessões)</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                       <span className="text-5xl md:text-[5vw] font-black leading-none text-black">R$ 570</span>
                       <span className="text-base md:text-2xl font-bold opacity-30 text-black">,00</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-2 md:mb-4 italic">Sessão Avulsa</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                       <span className="text-3xl md:text-5xl font-black text-[#D4AF37]">R$ 143</span>
                       <span className="text-sm md:text-lg font-bold opacity-30 text-[#D4AF37]">,00</span>
                    </div>
                  </div>
               </div>
               
               <p className="mt-8 md:mt-12 text-xs md:text-base text-black/50 max-w-xl leading-relaxed italic border-r-2 border-black/10 pr-6 mx-auto md:mx-0">
                 Pioneirismo mundial em hidratação. A linha Professionals oferece nutrição otimizada para fios tingidos e danificados.
               </p>
            </div>

            <div className="md:col-span-4 relative group order-1 md:order-last max-w-[280px] mx-auto md:max-w-none">
              <img src={IMAGES.wella_products} className="w-full h-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-700" alt="Wella Products" />
              <div className="absolute -bottom-4 -right-4 bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                <span className="text-[10px] md:text-xs font-black">CLASSIC</span>
              </div>
            </div>
          </div>
        </div>
      </Page>


      {/* PAGE 4: ALFAPARF & ANEETHUN */}
      <Page className="bg-[#FDFBF7] text-black">
         <div className="w-full max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
          {/* ALFAPARF SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 relative group max-w-[280px] mx-auto md:max-w-none">
              <img src={IMAGES.alfaparf_products} className="w-full h-auto drop-shadow-2xl" alt="Alfaparf Milano" />
            </div>
            
            <div className="md:col-span-7 flex flex-col text-center md:text-left">
               <h2 className="text-base md:text-3xl font-serif italic text-black/40 mb-1 md:mb-2 font-bold lowercase">alfaparf milano</h2>
               <h3 className="text-4xl md:text-[5vw] font-black tracking-tighter text-black leading-[0.8] mb-6 md:mb-10 uppercase">CRONO<br/>GRAMA</h3>
               
               <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center md:items-start mt-4 md:mt-6 justify-center md:justify-start">
                  <div className="flex flex-col">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-black mb-1 md:mb-2 text-xs">4 Tratamentos</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-7xl font-bold">R$ 450</span>
                      <span className="text-base md:text-xl text-black/20">,00</span>
                    </div>
                  </div>
                  <div className="h-16 w-px bg-black/10 hidden md:block self-end mb-2"></div>
                  <div className="flex flex-col">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-black mb-1 md:mb-2 text-xs">Sessão</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-5xl font-bold text-[#D4AF37]">R$ 130</span>
                      <span className="text-base md:text-lg text-black/20">,00</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="h-px w-full bg-black/5"></div>

          {/* ANEETHUN SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
             <div className="flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1">
               <span className="text-black/30 text-[9px] md:text-xs font-black uppercase tracking-[0.5em] mb-2 md:mb-4">Aneethun Profissional</span>
               <h3 className="text-4xl md:text-8xl font-black text-black mb-4 md:mb-6 tracking-tighter leading-none italic uppercase">CRONO<br/>GRAMA</h3>
               
               <div className="space-y-4 md:space-y-6 mt-6 md:mt-10 w-full flex flex-col items-center md:items-end">
                  <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-6 border-b border-black/10 pb-6 md:pb-8 w-full justify-center md:justify-start">
                    <div className="flex flex-col">
                      <span className="text-5xl md:text-7xl font-black">R$ 400</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/40">4 Sessões</span>
                  </div>
                  <div className="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-4 justify-center md:justify-start">
                    <span className="text-3xl font-black text-[#D4AF37]">R$ 108</span>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/40 md:mb-1">Sessão</span>
                  </div>
               </div>
             </div>

             <div className="relative order-1 md:order-2 flex justify-center max-w-[280px] mx-auto md:max-w-none">
                <img src={IMAGES.alfaparf_products} className="w-full h-auto grayscale" alt="Aneethun" />
             </div>
          </div>
        </div>
      </Page>


      {/* FINAL CTA */}
      <section className="w-full bg-black py-20 md:py-32 px-4 md:px-12 text-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-4xl md:text-8xl font-serif italic mb-8 md:mb-12">Experiência Elaine Valerio.</h4>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
               <motion.a
                href="https://wa.me/5500000000000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 md:px-20 py-6 md:py-8 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px] rounded-full shadow-2xl hover:bg-[#D4AF37] transition-all"
              >
                Agendar Agora
              </motion.a>
              <div className="text-left border-l border-white/20 pl-8 hidden md:block">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] block mb-2">Exclusivo:</span>
                <p className="text-xs text-white/50 max-w-[180px]">Vagas limitadas para o acompanhamento premium 2026.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center bg-white gap-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">© 2026 Elaine Valerios</span>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
           <span>Instagram</span>
           <span>Serviços</span>
           <span>Cronograma</span>
        </div>
      </footer>
    </motion.div>
  );
}
