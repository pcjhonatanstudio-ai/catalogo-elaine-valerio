import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  <section className={`min-h-screen w-full relative flex flex-col items-center overflow-hidden py-12 md:py-20 px-4 md:px-12 ${className}`}>
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
      className="fixed inset-0 z-50 bg-[#F5F5F5] overflow-y-auto scroll-smooth"
      ref={containerRef}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="flex flex-col text-white">
          <span className="font-serif text-2xl md:text-3xl italic">Elaine Valerios</span>
        </div>
        <button 
          onClick={onClose}
          className="bg-white text-black px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-black hover:text-white transition-colors duration-500 pointer-events-auto"
        >
          Fechar
        </button>
      </nav>

      {/* PAGE 1: HERO */}
      <Page className="bg-[#FFFFFF] !justify-start">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 gap-12">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="flex flex-col leading-none tracking-tighter">
              <span className="text-[15vw] md:text-[8vw] font-black text-black">CRONO</span>
              <span className="text-[15vw] md:text-[8vw] font-black text-black">GRA</span>
              <span className="text-[15vw] md:text-[8vw] font-black text-black ml-[2vw] md:ml-[4vw]">MA</span>
            </h1>
            <div className="mt-4">
              <span className="text-[10vw] md:text-[5vw] font-serif italic text-black/20 leading-none">2026.</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative flex justify-center items-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-[300px] md:w-[450px]"
            >
              <img src={IMAGES.truss_hero} alt="Truss Hero" className="w-full h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute -bottom-10 -left-10 bg-black text-white p-6 md:p-10">
                <span className="text-[10px] md:text-[12px] uppercase font-black tracking-[0.3em] block mb-2">Exclusive Edition</span>
                <span className="text-2xl md:text-4xl font-serif italic">The Art of Care</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer info Page 1 */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-auto pt-20 border-t border-black/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Globe size={16} strokeWidth={3} className="text-black/30" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black/40">Campeões Mundiais</span>
            </div>
            <div className="flex flex-wrap gap-4 items-center grayscale opacity-60">
              <span className="text-xl font-bold tracking-tighter">TRUSS</span>
              <span className="text-xl font-bold tracking-tighter">WELLA</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2">
              <Zap size={16} strokeWidth={3} className="text-black/30" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black/40">Tecnologia</span>
            </div>
             <div className="flex flex-col">
              <span className="text-xs font-bold text-black italic">O-ZONE + LED</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2">
              <Lightbulb size={16} strokeWidth={3} className="text-black/30" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black/40">Consultoria</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-black">ANAMNESE PERSONALIZADA</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-end">
             <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black/40">Localização</span>
            </div>
            <span className="text-xs font-bold text-black">STUDIO PRIVÉ</span>
          </div>
        </div>
      </Page>

      {/* PAGE 2: TECNOLOGIA */}
      <Page className="bg-[#111111] text-white">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-[7vw] font-black tracking-tighter italic mb-8">TECNOLOGIA</h2>
              <div className="space-y-6">
                <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed">
                  Utilizamos o poder do <span className="text-white font-bold italic">O-ZÔNIO + LED</span> para potencializar cada tratamento. O Ozônio bactericida limpa profundamente o couro cabeludo, enquanto o LED de alta intensidade acelera a absorção dos ativos na fibra capilar.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-10">
                  <div className="border border-white/10 p-6">
                    <CheckCircle2 className="text-[#D4AF37] mb-4" />
                    <h3 className="text-sm font-bold uppercase mb-2">Ozonioterapia</h3>
                    <p className="text-xs text-white/40">Recuperação celular e oxigenação profunda.</p>
                  </div>
                  <div className="border border-white/10 p-6">
                    <CheckCircle2 className="text-[#D4AF37] mb-4" />
                    <h3 className="text-sm font-bold uppercase mb-2">Fotoestimulação</h3>
                    <p className="text-xs text-white/40">Crescimento acelerado e brilho espelhado.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
             <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <img src={IMAGES.device} alt="Technology Device" className="w-[300px] md:w-[500px] grayscale brightness-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto mt-20 pt-20 border-t border-white/5 space-y-12">
           <h3 className="text-4xl md:text-6xl font-serif italic text-white/20">Anamnese Capilar</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <p className="text-sm text-white/60">Análise técnica detalhada da elasticidade, porosidade e resistência do fio.</p>
              <p className="text-sm text-white/60">Mapeamento personalizado para definir a sequência ideal de tratamentos.</p>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Incluso em todos os planos</span>
              </div>
           </div>
        </div>
      </Page>

      {/* PAGE 3: TRUSS & WELLA */}
      <Page className="bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-32">
          {/* TRUSS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 relative group">
              <motion.img 
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 src={IMAGES.truss_products} 
                 className="w-full h-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-700" 
                 alt="Truss Products" 
              />
              <div className="absolute -top-6 -left-6 bg-black text-white w-20 h-20 flex items-center justify-center rounded-full shadow-2xl">
                <span className="text-xs font-black">TOP 1</span>
              </div>
            </div>
            
            <div className="md:col-span-8 flex flex-col md:pl-20">
               <h2 className="text-2xl md:text-4xl font-serif italic mb-2">Cronograma</h2>
               <h3 className="text-6xl md:text-[6vw] font-black tracking-tighter text-black leading-none mb-10">TRUSS</h3>
               
               <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4 italic">Pacote Premium (4 sessões)</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10vw] md:text-[5vw] font-black leading-none text-black">R$ 720</span>
                      <span className="text-2xl font-bold opacity-30 text-black">,00</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4 italic">Sessão Avulsa</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-[#D4AF37]">R$ 180</span>
                      <span className="text-lg font-bold opacity-30 text-[#D4AF37]">,00</span>
                    </div>
                  </div>
               </div>
               
               <p className="mt-12 text-sm md:text-base text-black/50 max-w-xl leading-relaxed italic border-l-2 border-black/10 pl-6">
                A tecnologia de infusão lipídica mais premiada do Brasil. Recuperação imediata do brilho, toque aveludado e proteção térmica extrema.
               </p>
            </div>
          </div>

          {/* WELLA SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 flex flex-col items-end text-right">
               <h2 className="text-2xl md:text-4xl font-serif italic mb-2">Cronograma</h2>
               <h3 className="text-6xl md:text-[6vw] font-black tracking-tighter text-black leading-none mb-10">WELLA</h3>
               
               <div className="flex flex-col md:flex-row-reverse gap-12 items-end">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4 italic">Pacote Excellence (4 sessões)</span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-[10vw] md:text-[5vw] font-black leading-none text-black">R$ 570</span>
                       <span className="text-2xl font-bold opacity-30 text-black">,00</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4 italic">Sessão Avulsa</span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-4xl md:text-5xl font-black text-[#D4AF37]">R$ 143</span>
                       <span className="text-lg font-bold opacity-30 text-[#D4AF37]">,00</span>
                    </div>
                  </div>
               </div>
               
               <p className="mt-12 text-sm md:text-base text-black/50 max-w-xl leading-relaxed italic border-r-2 border-black/10 pr-6">
                 Pioneirismo mundial em hidratação. A linha Professionals oferece nutrição otimizada para fios tingidos e danificados.
               </p>
            </div>

            <div className="md:col-span-4 relative group md:order-last order-first">
              <motion.img 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                src={IMAGES.wella_products} 
                className="w-full h-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-700" 
                alt="Wella Products" 
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white w-20 h-20 flex items-center justify-center rounded-full shadow-2xl">
                <span className="text-xs font-black">CLASSIC</span>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 4: ALFAPARF & ANEETHUN */}
      <Page className="bg-[#FFFFFF] text-black">
         <div className="w-full max-w-7xl mx-auto flex flex-col gap-32">
          {/* ALFAPARF SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative group">
              <motion.img 
                 initial={{ scale: 0.9, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 src={IMAGES.alfaparf_products} 
                 className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-all duration-700" 
                 alt="Alfaparf Milano" 
              />
            </div>
            
            <div className="md:col-span-7 flex flex-col">
               <h2 className="text-xl md:text-3xl font-serif italic text-black/40 mb-2 font-bold lowercase">alfaparf milano</h2>
               <h3 className="text-5xl md:text-[5vw] font-black tracking-tighter text-black leading-[0.8] mb-10">CRONO<br/>GRAMA</h3>
               
               <div className="flex flex-col md:flex-row gap-12 items-start mt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-2">4 Tratamentos</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl md:text-7xl font-bold">R$ 450</span>
                      <span className="text-xl text-black/20">,00</span>
                    </div>
                  </div>
                  <div className="h-20 w-px bg-black/10 hidden md:block self-end mb-2"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-2">Sessão</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-bold">R$ 130</span>
                      <span className="text-lg text-black/20">,00</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* ANEETHUN SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col md:items-end md:text-right order-2 md:order-1">
               <span className="text-black/30 text-xs font-black uppercase tracking-[0.5em] mb-4">Aneethun Profissional</span>
               <h3 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tighter leading-none italic">CRONO<br/>GRAMA</h3>
               
               <div className="space-y-6 mt-10">
                  <div className="flex md:flex-row-reverse items-center gap-6 border-b border-black/10 pb-8">
                    <div className="flex flex-col">
                      <span className="text-6xl font-black">R$ 400</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">4 Sessões</span>
                  </div>
                  <div className="flex md:flex-row-reverse items-center gap-4">
                    <span className="text-4xl font-black text-[#D4AF37]">R$ 108</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Sessão</span>
                  </div>
               </div>
             </div>

             <div className="relative order-1 md:order-2 flex justify-center">
                <motion.img 
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  src={IMAGES.alfaparf_products} 
                  className="w-[300px] md:w-[450px] h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-grayscale duration-1000"
                  alt="Aneethun"
                />
             </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="w-full max-w-7xl mx-auto py-32 flex flex-col items-center text-center">
           <h4 className="text-5xl md:text-7xl font-serif italic mb-12">Experiência Studio Privé.</h4>
           <motion.a
            href="https://wa.me/5500000000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-20 py-8 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-full shadow-2xl hover:bg-[#D4AF37] transition-colors duration-500"
          >
            Agendar Agora
          </motion.a>
        </div>
      </Page>
    </motion.div>
  );
}

