import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  WhatsappLogo, 
  Info, 
  Heart, 
  Sparkle, 
  CaretDown,
  CaretLeft
} from '@phosphor-icons/react';

interface MechasPresentationProps {
  onClose: () => void;
}

const MandalaBg = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08] flex items-center justify-center">
    <div className="relative w-[800px] h-[800px]">
      <div className="absolute inset-0 border-[0.5px] border-[#D9A07E] rounded-full scale-100"></div>
      <div className="absolute inset-0 border-[0.5px] border-[#D9A07E] rounded-full scale-75"></div>
      <div className="absolute inset-0 border-[0.5px] border-[#D9A07E] rounded-full scale-50"></div>
      <div className="absolute inset-0 border-[0.5px] border-[#D9A07E] rounded-full scale-[0.25]"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#D9A07E] rotate-45"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#D9A07E] -rotate-45"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-[#D9A07E]"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-[#D9A07E] rotate-90"></div>
    </div>
  </div>
);

const Slide: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`h-[100dvh] w-full flex-shrink-0 snap-start relative flex flex-col overflow-hidden bg-[#F5F1E9] ${className}`}>
    <MandalaBg />
    {children}
  </section>
);

const PriceItem: React.FC<{ name: string; price: string | number }> = ({ name, price }) => (
  <div className="flex items-center gap-4 py-3 group">
    <span className="font-sans text-[13px] text-[#4A4A4A] tracking-wider uppercase font-light">{name}</span>
    <div className="flex-1 border-b border-dotted border-[#D9A07E]/30 h-3"></div>
    <span className="font-sans text-[16px] text-[#D9A07E] font-semibold">R${price}</span>
  </div>
);

const MechasPresentation: React.FC<MechasPresentationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-y-auto scroll-smooth snap-y snap-mandatory h-screen no-scrollbar">
      {/* Global Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 left-6 z-[110] w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
      >
        <CaretLeft className="w-6 h-6" weight="light" />
      </button>

      {/* Slide 1: Capa */}
      <Slide className="items-center justify-center px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center z-10"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-px bg-[#D9A07E]/40 self-center"></div>
            <Sparkle className="mx-4 w-6 h-6 text-[#D9A07E]" weight="light" />
            <div className="w-20 h-px bg-[#D9A07E]/40 self-center"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#4A4A4A] mb-4">Catálogo de Mechas</h1>
          <p className="font-sans text-[11px] md:text-sm tracking-[0.5em] text-[#D9A07E] uppercase font-light">Expertise & Sofisticação</p>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          >
            <span className="text-[10px] tracking-[0.2em] font-sans uppercase">Deslize</span>
            <CaretDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </Slide>

      {/* Categories Slides */}
      {[
        {
          id: 'iluminar',
          title: 'Iluminar',
          image: 'https://lh3.googleusercontent.com/d/10ZyFi-WdgBx7k0XOajdBicLUaXFWdgiT',
          services: [
            { name: 'Iluminação Pontual', price: 350 },
            { name: 'Sun Kissed', price: 420 },
            { name: 'Baby Lights', price: 480 },
            { name: 'Contour Light', price: 380 }
          ]
        },
        {
          id: 'contraste',
          title: 'Contraste',
          image: 'https://lh3.googleusercontent.com/d/1kssz8lXblrQPU0gwqNko8E-7Kubyy8_n',
          services: [
            { name: 'Balayage Contrast', price: 550 },
            { name: 'Mechas Slice', price: 620 },
            { name: 'Low Lights', price: 450 },
            { name: 'Dimension Blond', price: 680 }
          ]
        },
        {
          id: 'camuflar',
          title: 'Camuflar',
          image: 'https://lh3.googleusercontent.com/d/1QiUmD8jrcJmEgzoSH5NDVvDMpVGMNJup',
          services: [
            { name: 'Camuflagem de Brancos', price: 280 },
            { name: 'Ice Grey Blond', price: 520 },
            { name: 'Neutralização', price: 180 },
            { name: 'Glossing', price: 120 }
          ]
        },
        {
          id: 'super-blond',
          title: 'Super Blond',
          image: 'https://lh3.googleusercontent.com/d/1vNXCDTOUWIIZwvd9DDLL9bV--TG1EfBF',
          services: [
            { name: 'Pérola Total', price: 850 },
            { name: 'Platinado Luxo', price: 950 },
            { name: 'Nude Blond', price: 780 },
            { name: 'Baunilha Ice', price: 820 }
          ]
        }
      ].map((cat) => (
        <Slide key={cat.id}>
          {/* Vertical Large Text */}
          <div className="absolute right-0 top-0 h-full flex items-center pr-4 pointer-events-none overflow-hidden">
            <span className="font-serif text-[18vh] text-black/[0.03] rotate-90 origin-center whitespace-nowrap uppercase tracking-tighter">
              {cat.title}
            </span>
          </div>

          <div className="flex flex-col md:flex-row h-full w-full z-10 pt-20">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 h-[45%] md:h-full p-8 md:p-16 flex flex-col justify-center">
              <div className="relative w-full h-full rounded-b-[150px] overflow-hidden border border-[#D9A07E]/20 shadow-2xl">
                <img src={cat.image} className="w-full h-full object-cover" alt={cat.title} />
                <div className="absolute inset-0 bg-[#D9A07E]/10 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Right List Section */}
            <div className="w-full md:w-1/2 h-[55%] md:h-full px-8 md:px-20 pb-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl text-[#4A4A4A] mb-2">{cat.title}</h2>
                <p className="font-sans text-[10px] tracking-[0.4em] text-[#D9A07E] uppercase mb-10">Tabela de Valores</p>
                
                <div className="space-y-2">
                  {cat.services.map((svc, i) => (
                    <PriceItem key={i} {...svc} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Slide>
      ))}

      {/* Slide Products */}
      <Slide className="items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center z-10 w-full max-w-lg px-8"
        >
          <h2 className="font-serif text-4xl text-[#4A4A4A] mb-4">Produtos Premium</h2>
          <p className="font-sans text-[10px] tracking-[0.4em] text-[#D9A07E] uppercase mb-12">Performance & Cuidado</p>
          
          <div className="relative aspect-video rounded-[30px] overflow-hidden mb-12 border border-[#D9A07E]/20 shadow-xl">
             <img src="https://lh3.googleusercontent.com/d/1TLOZ7XfuqkDmHdQCUwEDrvC6hwVNjwuX" className="w-full h-full object-cover" alt="Premium Products" />
             <div className="absolute inset-0 bg-black/5"></div>
          </div>

          <div className="flex justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <span className="font-serif text-base tracking-widest text-[#4A4A4A]">WELLA</span>
             <span className="font-serif text-base tracking-widest text-[#4A4A4A]">ALFAPARF MILANO</span>
             <span className="font-serif text-base tracking-widest text-[#4A4A4A]">TRUSS PROFESSIONAL</span>
          </div>
        </motion.div>
      </Slide>

      {/* Slide FAQ */}
      <Slide className="items-center justify-center px-6">
        <div className="w-full max-w-4xl z-20">
          <h2 className="font-serif text-5xl text-[#4A4A4A] mb-12 text-center">Perguntas frequentes</h2>
          
          {/* Info Box */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#D9A07E]/10 border border-[#D9A07E]/30 rounded-2xl p-6 mb-10 flex items-start gap-4"
          >
            <Info className="w-6 h-6 text-[#D9A07E] flex-shrink-0 mt-0.5" weight="light" />
            <p className="text-[12px] text-[#4A4A4A] leading-relaxed font-sans">
              <strong>Importante:</strong> Os valores da tabela são bases referenciais. O investimento final pode variar conforme o <strong>volume, densidade e comprimento</strong> do cabelo, bem como a necessidade de tratamentos complementares de reconstrução.
            </p>
          </motion.div>

          {/* Table based on image */}
          <div className="bg-white/60 backdrop-blur-md rounded-xl overflow-hidden border border-[#D9A07E]/20 shadow-lg">
            <div className="grid grid-cols-2 bg-[#D1C2BA]">
              <div className="px-6 py-4 text-center border-r border-white/20">
                <span className="font-serif italic text-white text-lg tracking-wide">Pergunta</span>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="font-serif italic text-white text-lg tracking-wide">Resposta</span>
              </div>
            </div>
            
            <div className="divide-y divide-[#D9A07E]/20">
              {/* Row 1 */}
              <div className="grid grid-cols-2">
                <div className="p-6 border-r border-[#D9A07E]/20 flex items-center">
                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-snug">Meu cabelo é virgem. Preciso fazer teste de mechas?</p>
                </div>
                <div className="p-6 flex items-center">
                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-relaxed">Sim! É preciso fazer testes até mesmo nos cabelos virgens.</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2">
                <div className="p-6 border-r border-[#D9A07E]/20 flex items-center">
                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-snug font-light italic">Mechas em cabelos que há progressivas danifica?</p>
                </div>
                <div className="p-6 flex items-center">
                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-relaxed italic">
                    Depende! Cabelos que tem resíduos químicos tem mais probabilidades de ficarem frágeis. Porém podemos decidir se é algo seguro ou não no teste de mechas.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2">
                <div className="p-6 border-r border-[#D9A07E]/20 flex items-center">
                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-snug">Não pretendo largar a progressiva, consigo manter os dois?</p>
                </div>
                <div className="p-6 flex items-center">
                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-relaxed">
                    Sim! Mas a progressiva vai comprometer o fundo de clareamento que o fio suportará chegar. Então não é recomendado para loiros muito claros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide CTA */}
      <Slide className="items-center justify-center px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center z-10"
        >
          <Heart className="w-12 h-12 text-[#D9A07E] mx-auto mb-8" weight="light" />
          <h2 className="font-serif text-4xl text-[#4A4A4A] mb-12">Pronta para transformar seu visual?</h2>
          
          <motion.a 
            href="https://wa.me/5500000000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-[#D9A07E] text-white px-12 py-6 rounded-full font-sans font-semibold tracking-[0.2em] shadow-lg shadow-[#D9A07E]/30"
          >
            <WhatsappLogo className="w-6 h-6" weight="light" />
            AGENDAR NO WHATSAPP
          </motion.a>
          
          <p className="mt-12 text-[10px] uppercase tracking-[0.1em] text-[#4A4A4A]/40 font-sans">
            Atendimento com excelência e carinho
          </p>
        </motion.div>
      </Slide>
    </div>
  );
};

export default MechasPresentation;
