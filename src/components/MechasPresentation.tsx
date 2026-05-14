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

const Slide: React.FC<{ children: React.ReactNode; className?: string; noSnap?: boolean; autoHeight?: boolean }> = ({ 
  children, 
  className = "",
  noSnap = false,
  autoHeight = false
}) => (
  <section className={`
    ${autoHeight ? 'h-auto min-h-screen' : 'h-[100dvh]'} 
    w-full flex-shrink-0 
    ${noSnap ? '' : 'snap-start'} 
    relative flex flex-col overflow-hidden bg-[#F5F1E9] 
    ${className}
  `}>
    <MandalaBg />
    {children}
  </section>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-[#D9A07E]/20 w-full group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left transition-all px-2"
      >
        <span className="font-sans text-[15px] font-medium text-[#4A4A4A] pr-6 leading-snug group-hover:text-[#D9A07E] transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-[#D9A07E]/20 flex items-center justify-center transition-all ${isOpen ? 'bg-[#D9A07E] border-[#D9A07E]' : ''}`}>
          <CaretDown className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-180 text-white' : 'text-[#D9A07E]'}`} weight="bold" />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-2 pb-8">
           <p className="font-sans text-[14px] text-[#4A4A4A]/70 leading-relaxed max-w-2xl">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

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
        className="fixed top-6 left-6 z-[110] w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(197,160,89,0.4)] border-2 border-[#D9A07E] flex items-center justify-center text-[#D9A07E] hover:scale-110 active:scale-95 transition-all group"
      >
        <CaretLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" weight="bold" />
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
            { name: 'CURTO - PIXIE CUT', price: '544,50' },
            { name: 'CURTO - NUCA', price: '654,50' },
            { name: 'MÉDIO - PESCOÇO', price: 869 },
            { name: 'MÉDIO - OMBRO', price: 935 },
            { name: 'LONGO - SOUTIEN', price: '1.120' },
            { name: 'LONGO - CINTURA', price: '1.320' }
          ]
        },
        {
          id: 'contraste',
          title: 'Contraste',
          image: 'https://lh3.googleusercontent.com/d/1kssz8lXblrQPU0gwqNko8E-7Kubyy8_n',
          services: [
            { name: 'CURTO - PIXIE CUT', price: '544,50' },
            { name: 'CURTO - NUCA', price: '654,50' },
            { name: 'MÉDIO - PESCOÇO', price: 869 },
            { name: 'MÉDIO - OMBRO', price: 935 },
            { name: 'LONGO - SOUTIEN', price: '1.120' },
            { name: 'LONGO - CINTURA', price: '1.320' }
          ]
        },
        {
          id: 'camuflar',
          title: 'Camuflar',
          image: 'https://lh3.googleusercontent.com/d/1QiUmD8jrcJmEgzoSH5NDVvDMpVGMNJup',
          services: [
            { name: 'CURTO - PIXIE CUT', price: '544,50' },
            { name: 'CURTO - NUCA', price: '654,50' },
            { name: 'MÉDIO - PESCOÇO', price: 869 },
            { name: 'MÉDIO - OMBRO', price: 935 },
            { name: 'LONGO - SOUTIEN', price: '1.120' },
            { name: 'LONGO - CINTURA', price: '1.320' }
          ]
        },
        {
          id: 'super-blond',
          title: 'Super Blond',
          image: 'https://lh3.googleusercontent.com/d/1vNXCDTOUWIIZwvd9DDLL9bV--TG1EfBF',
          services: [
            { name: 'CURTO - NUCA', price: 759 },
            { name: 'MÉDIO - PESCOÇO', price: 979 },
            { name: 'MÉDIO - OMBRO', price: '1.045' },
            { name: 'LONGO - SOUTIEN', price: '1.122' },
            { name: 'EXTRA LONGO CINTURA', price: '1.375' }
          ]
        },
        {
          id: 'blond-iluminar',
          title: 'Blond Iluminar',
          image: 'https://lh3.googleusercontent.com/d/10jt0RxQGTxWIAk_kMv3DUHKqQ8yqzLkt', 
          services: [
            { name: 'CURTO - NUCA', price: 959 },
            { name: 'MÉDIO - PESCOÇO', price: '1.179' },
            { name: 'MÉDIO - OMBRO', price: '1.245' },
            { name: 'LONGO - SOUTIEN', price: '1.322' },
            { name: 'EXTRA LONGO CINTURA', price: '1.595' }
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
                <img src={cat.image} className="w-full h-full object-cover object-top" alt={cat.title} />
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

          <div className="flex justify-center gap-10 opacity-60 transition-all duration-700">
             <span className="font-serif text-base tracking-widest text-[#4A4A4A]">WELLA</span>
             <span className="font-serif text-base tracking-widest text-[#4A4A4A]">ALFAPARF MILANO</span>
             <span className="font-serif text-base tracking-widest text-[#4A4A4A]">TRUSS PROFESSIONAL</span>
          </div>
        </motion.div>
      </Slide>

      {/* Slide FAQ */}
      <Slide className="items-center justify-center px-6">
        <div className="w-full max-w-3xl z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl text-[#4A4A4A] mb-4">Perguntas frequentes</h2>
            <p className="font-sans text-[10px] tracking-[0.4em] text-[#D9A07E] uppercase font-light">Tire suas dúvidas</p>
          </motion.div>
          
          <div className="space-y-2">
            <AccordionItem 
              question="Meu cabelo é virgem. Preciso fazer teste de mechas?"
              answer="Sim! O teste de mechas é indispensável mesmo em fios virgens. Ele avalia não só a cor, mas a resistência e elasticidade do fio antes de receber a química, garantindo total segurança no procedimento."
            />
            <AccordionItem 
              question="Mechas em cabelos que há progressivas danifica?"
              answer="Depende da saúde do fio e do tipo de química. Cabelos com resíduos químicos têm mais probabilidades de ficarem frágeis ou apresentarem incompatibilidade. Por isso, a decisão final sempre acontece após o teste de mechas, onde verificamos até onde o fio suporta clarear com saúde."
            />
            <AccordionItem 
              question="Não pretendo largar a progressiva, consigo manter os dois?"
              answer="Sim, é possível conciliar, porém com ressalvas. A progressiva cria uma barreira que compromete o fundo de clareamento, dificultando a chegada em tons muito claros. O ideal é manter um cronograma de tratamento rigoroso para sustentar as duas químicas."
            />
            <AccordionItem 
              question="Quanto tempo dura o procedimento?"
              answer="O tempo total varia entre 4 a 7 horas, dependendo da técnica escolhida, densidade do cabelo e tempo de abertura do clareamento. Prezamos pela saúde do fio, por isso respeitamos o tempo natural de cada cabelo."
            />
          </div>

          {/* Info Box */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#D9A07E]/5 border border-[#D9A07E]/20 rounded-2xl p-6 mt-12 flex items-start gap-4"
          >
            <Info className="w-6 h-6 text-[#D9A07E] flex-shrink-0 mt-0.5" weight="light" />
            <p className="text-[12px] text-[#4A4A4A]/80 leading-relaxed font-sans">
              <strong>Nota:</strong> Os valores são referenciais e variam conforme o volume, densidade e comprimento do cabelo, além da necessidade de tratamentos complementares.
            </p>
          </motion.div>
        </div>
      </Slide>

      {/* Slide CTA */}
      <Slide className="items-center justify-center px-10 pb-20 md:pb-0" noSnap autoHeight>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center z-10"
        >
          <Heart className="w-12 h-12 text-[#D9A07E] mx-auto mb-8" weight="light" />
          <h2 className="font-serif text-4xl text-[#4A4A4A] mb-12">Pronta para transformar seu visual?</h2>
          
          <motion.a 
            href="https://wa.me/5522988335171"
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
