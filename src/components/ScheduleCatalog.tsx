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
      className="fixed inset-0 z-50 bg-[#C29E7D] overflow-y-auto scroll-smooth grain"
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
      <Page className="bg-[#EDEDED] !justify-center !pt-0 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center"
          >
            {/* The Text Layout */}
            <h1 className="flex flex-col items-center leading-[0.75] uppercase w-full select-none">
              <div className="flex justify-between w-[85vw] md:w-[60vw] text-[20vw] md:text-[14vw] font-black text-[#B4B296] tracking-[-0.05em]">
                {"CRONO".split('').map((char, i) => <span key={i}>{char}</span>)}
              </div>
              <div className="flex justify-between w-[85vw] md:w-[60vw] text-[20vw] md:text-[14vw] font-black text-[#B4B296] tracking-[-0.05em]">
                {"GRAMA".split('').map((char, i) => <span key={i}>{char}</span>)}
              </div>
            </h1>

            {/* The Floating Product (Tilted) */}
            <motion.div 
              initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: -15, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] md:w-[25vw] z-20 pointer-events-none"
            >
              <img 
                src={IMAGES.truss_hero} 
                alt="Truss No Metal" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Left 2026. */}
          <div className="absolute bottom-10 left-6 md:left-12 flex flex-col">
            <span className="text-[12vw] md:text-[6vw] font-light text-black tracking-tight leading-none">2026.</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center gap-4 opacity-10">
          <div className="w-px h-16 bg-black"></div>
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
                <p className="text-lg md:text-3xl text-white/90 font-light leading-relaxed">
                  Utilizamos o poder do <span className="text-[#D4AF37] font-bold italic underline decoration-white/20 underline-offset-8 font-serif">O-ZÔNIO + LED</span> para potencializar cada tratamento.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-6 pt-4 md:pt-10">
                  <div className="border border-white/20 p-4 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                    <CheckCircle2 className="text-[#D4AF37] mb-2 md:mb-6 group-hover:scale-110 transition-transform" size={24} />
                    <h3 className="text-xs md:text-lg font-bold uppercase mb-1 md:mb-4">Ozonioterapia</h3>
                    <p className="text-[10px] md:text-sm text-white/50">Recuperação celular profunda.</p>
                  </div>
                  <div className="border border-white/20 p-4 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                    <CheckCircle2 className="text-[#D4AF37] mb-2 md:mb-6 group-hover:scale-110 transition-transform" size={24} />
                    <h3 className="text-xs md:text-lg font-bold uppercase mb-1 md:mb-4">Fotoestimulação</h3>
                    <p className="text-[10px] md:text-sm text-white/50">Crescimento e brilho extremo.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center mt-[-20px] md:mt-0">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              src={IMAGES.device} 
              alt="Technology Device" 
              className="w-full max-w-[300px] md:max-w-[550px] h-auto brightness-110 select-none pointer-events-none" 
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


      <Page className="bg-[#C29E7D]">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* TRUSS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="md:col-span-4 relative group max-w-[280px] mx-auto md:max-w-none">
              <img src={IMAGES.truss_products} className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" alt="Truss Products" />
              <div className="absolute -top-4 -left-4 bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 z-10">
                <span className="text-[10px] md:text-xs font-black">TOP 1</span>
              </div>
            </div>
            
            <div className="md:col-span-8 flex flex-col md:pl-16 text-center md:text-left mt-[-20px] md:mt-0">
               <h2 className="text-xl md:text-4xl font-serif italic mb-1 md:mb-2 text-white/40">Cronograma</h2>
               <h3 className="flex justify-between w-full text-5xl md:text-[7vw] font-black tracking-[0.15em] text-white leading-none mb-4 md:mb-10 uppercase border-b border-white/10 pb-4">
                 {"TRUSS".split('').map((c, i) => <span key={i}>{c}</span>)}
               </h3>
               
               <div className="flex flex-col sm:flex-row gap-6 md:gap-16 items-center md:items-end justify-center md:justify-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-2 md:mb-4 italic">Pacote Premium (4 sessões)</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-6xl md:text-[6vw] font-black leading-none text-white">R$ 720</span>
                      <span className="text-2xl md:text-3xl font-bold opacity-30 text-white">,00</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-2 md:mb-4 italic">Sessão Avulsa</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-4xl md:text-6xl font-black text-[#D4AF37]">R$ 180</span>
                      <span className="text-lg md:text-2xl font-bold opacity-30 text-[#D4AF37]">,00</span>
                    </div>
                  </div>
               </div>
               
               <p className="mt-6 md:mt-12 text-sm md:text-xl text-white/60 max-w-xl leading-relaxed italic border-l-2 border-white/20 pl-6 mx-auto md:mx-0">
                A tecnologia de infusão lipídica mais premiada do Brasil. Recuperação imediata do brilho e toque aveludado.
               </p>
            </div>
          </div>

          <div className="h-px w-full bg-white/10"></div>

          {/* WELLA SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="md:col-span-8 flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1 mt-[-20px] md:mt-0">
               <h2 className="text-xl md:text-4xl font-serif italic mb-1 md:mb-2 text-white/40">Cronograma</h2>
               <h3 className="flex justify-between w-full text-5xl md:text-[7vw] font-black tracking-[0.15em] text-white leading-none mb-4 md:mb-10 uppercase border-b border-white/10 pb-4">
                 {"WELLA".split('').map((c, i) => <span key={i}>{c}</span>)}
               </h3>
               
               <div className="flex flex-col sm:flex-row-reverse gap-6 md:gap-16 items-center md:items-end justify-center md:justify-end">
                  <div className="flex flex-col items-center md:items-end">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-2 md:mb-4 italic">Pacote Excellence (4 sessões)</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                       <span className="text-6xl md:text-[6vw] font-black leading-none text-white">R$ 570</span>
                       <span className="text-2xl md:text-3xl font-bold opacity-30 text-white">,00</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-2 md:mb-4 italic">Sessão Avulsa</span>
                    <div className="flex items-baseline gap-1 md:gap-2">
                       <span className="text-4xl md:text-6xl font-black text-[#D4AF37]">R$ 143</span>
                       <span className="text-lg md:text-2xl font-bold opacity-30 text-[#D4AF37]">,00</span>
                    </div>
                  </div>
               </div>
               
               <p className="mt-6 md:mt-12 text-sm md:text-xl text-white/60 max-w-xl leading-relaxed italic border-r-2 border-white/20 pr-6 mx-auto md:mx-0">
                 Pioneirismo mundial em hidratação. A linha Professionals oferece nutrição otimizada para fios danificados.
               </p>
            </div>

            <div className="md:col-span-4 relative group order-1 md:order-last max-w-[280px] mx-auto md:max-w-none">
              <img src={IMAGES.wella_products} className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" alt="Wella Products" />
              <div className="absolute -bottom-4 -right-4 bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 z-10">
                <span className="text-[10px] md:text-xs font-black">CLASSIC</span>
              </div>
            </div>
          </div>
        </div>
      </Page>


      {/* PAGE 4: ALFAPARF & ANEETHUN */}
      <Page className="bg-[#C29E7D] text-white">
         <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* ALFAPARF SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="md:col-span-5 relative group max-w-[280px] mx-auto md:max-w-none">
              <img src={IMAGES.alfaparf_products} className="w-full h-auto drop-shadow-2xl brightness-110" alt="Alfaparf Milano" />
            </div>
            
            <div className="md:col-span-7 flex flex-col text-center md:text-left mt-[-10px] md:mt-0">
               <h2 className="text-lg md:text-4xl font-serif italic text-white/50 mb-1 md:mb-2 font-bold lowercase">alfaparf milano</h2>
               <h3 className="flex flex-col w-full text-5xl md:text-[6vw] font-black text-white leading-[0.8] mb-4 md:mb-10 uppercase">
                 <div className="flex justify-between w-full">{"CRONO".split('').map((c, i) => <span key={i}>{c}</span>)}</div>
                 <div className="flex justify-between w-full opacity-30 mt-[-0.1em]">{"GRAMA".split('').map((c, i) => <span key={i}>{c}</span>)}</div>
               </h3>
               
               <div className="flex flex-col sm:flex-row gap-6 md:gap-16 items-center md:items-start mt-4 md:mt-6 justify-center md:justify-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/50 mb-1 md:mb-4 text-xs">4 Tratamentos</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl md:text-8xl font-bold">R$ 450</span>
                      <span className="text-2xl text-white/20">,00</span>
                    </div>
                  </div>
                  <div className="h-16 w-px bg-white/10 hidden md:block self-end mb-2"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/50 mb-1 md:mb-4 text-xs">Sessão</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-6xl font-bold text-[#D4AF37]">R$ 130</span>
                      <span className="text-xl text-white/20">,00</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10"></div>

          {/* ANEETHUN SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
             <div className="flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1 mt-[-20px] md:mt-0">
               <span className="text-white/40 text-[10px] md:text-sm font-black uppercase tracking-[0.5em] mb-2 md:mb-4">Aneethun Profissional</span>
               <h3 className="flex flex-col w-full text-5xl md:text-8xl font-black text-white mb-4 md:mb-6 leading-none italic uppercase">
                 <div className="flex justify-between w-full">{"CRONO".split('').map((c, i) => <span key={i}>{c}</span>)}</div>
                 <div className="flex justify-between w-full mt-[-0.1em]">{"GRAMA".split('').map((c, i) => <span key={i}>{c}</span>)}</div>
               </h3>
               
               <div className="space-y-4 md:space-y-6 mt-6 md:mt-10 w-full flex flex-col items-center md:items-end">
                  <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-10 border-b border-white/10 pb-6 md:pb-10 w-full justify-center md:justify-start">
                    <div className="flex flex-col">
                      <span className="text-6xl md:text-8xl font-black">R$ 400</span>
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/40">4 Sessões</span>
                  </div>
                  <div className="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-6 justify-center md:justify-start">
                    <span className="text-4xl md:text-5xl font-black text-[#D4AF37]">R$ 108</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/40 md:mb-2">Sessão</span>
                  </div>
               </div>
             </div>

             <div className="relative order-1 md:order-2 flex justify-center max-w-[280px] mx-auto md:max-w-none">
                <img src={IMAGES.alfaparf_products} className="w-full h-auto brightness-110" alt="Aneethun" />
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
