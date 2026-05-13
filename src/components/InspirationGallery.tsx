import React from 'react';
import { motion } from 'motion/react';
import { X, CaretDown, Sparkle, House } from '@phosphor-icons/react';

const IMAGES = [
  '1_Ob8nVE13ni75Z6tu5-UaBVO7y95gqIm',
  '1T3o5UaKRmwL1ZQYSHDKJdILzKkRMIFK3',
  '1QqFhsh0nZGGYlAyL_Qlm6FAfIu5jq7tE',
  '1zyX1fADmyLldf6wngvdvml6UIO0FDTQ4',
  '1hpxjKuBYryvHZSzS86208YagYSP0EWEB',
  '1BD9mMop20VvJWmDk2H2Gy2JTU3WQIc8K',
  '15-1Jqd6AzMkZGAsdlrKjP8kukG6VGiWg',
  '1aP0MtlKtAR0w6SFn6-4kkyzKmiFWeKMW',
  '13ByMaCAWuKkrlUBV4mDpnFkK4PAHUhMe',
  '13sgW5DbUBfZ2gXfolJDF8dPPJZR9HIiK',
  '10jKJm79MjqH_L7s2XhGUGbMNcoBxzXbN',
  '16iK0gUAYYt1bvLZbgOT6E6GPGWAX646B',
  '1UluuEtfqH8AEpdJCoCv0MCNTWNTscrga',
  '1aWsd1tYh6oQvH7adkDrpwuKDMLlM_uZb',
  '1bYN-hMtupU1dGEyr0Mg0BgQzhLsmhZZb',
  '1nVkk4WTQZIXgyWWMQTiaf5MQmfBZwdZP',
  '1ko23lAwmClrc28Ps9TKrs48FBHlimFnx',
  '12HDuZ0H1OntMSLEEiCLIaKtivwoITq6P',
  '1Hepdmq-nd7fmr6RQceol1RCLdj92T_Wz',
  '10fywKPBbvhFf6YCq5hUoZvek1Duc4jud',
  '1fH7Gx8RbJy0fvjr4PutwSBRtps1N5cSX',
  '1jK7MrE4gQnW98GP1iuU8rmXGW36VBzn4',
  '1gJMkv-ZjyOWkGnIx6MqkJ8UeuoiBoGCR',
  '1VHb0QnaaEGuCC87i-HNEONl9K6TWfLW1',
  '1bR_whWvioYbe4WM4srfsFkCqFr-o0MGR'
];

export default function InspirationGallery({ onClose }: { onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0D0D0D] text-[#E5E5E5] overflow-y-scroll snap-y snap-mandatory font-sans"
    >
      {/* Back Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] bg-white border-2 border-[#C5A059] text-[#C5A059] p-3 rounded-full shadow-[0_4px_20px_rgba(197,160,89,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <X className="w-6 h-6 group-hover:rotate-90 transition-transform" weight="bold" />
      </button>

      {/* Cover Slide */}
      <section className="h-screen w-full snap-start relative flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-2 tracking-tight">
            Inspire-se
          </h1>
          <div className="flex items-center gap-4 my-6">
            <div className="w-12 md:w-20 h-px bg-[#C5A059]/40"></div>
            <Sparkle className="w-6 h-6 text-[#C5A059]" weight="light" />
            <div className="w-12 md:w-20 h-px bg-[#C5A059]/40"></div>
          </div>
          <p className="font-serif italic text-xl md:text-3xl text-[#C5A059]/80 max-w-md">
            Transformações que traduzem a sua melhor versão.
          </p>
          
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20 text-[#C5A059]/50"
          >
            <CaretDown className="w-8 h-8" weight="light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Slides */}
      {IMAGES.map((id, index) => (
        <section 
          key={id}
          className="h-screen w-full snap-start relative flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Blur Image */}
          <div className="absolute inset-0 z-0">
             <img 
               src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} 
               alt="" 
               className="w-full h-full object-cover blur-2xl opacity-20"
             />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-4xl h-full max-h-[75vh] relative group"
            >
              <div className="absolute -inset-4 border border-[#C5A059]/20 rounded-3xl -z-10 group-hover:border-[#C5A059]/40 transition-colors duration-500"></div>
              
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20">
                <img 
                  src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} 
                  alt={`Inspiração ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Indicator for scrolling down */}
          {index < IMAGES.length - 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
              <CaretDown className="w-6 h-6 animate-bounce" />
            </div>
          )}
        </section>
      ))}

      {/* Footer */}
      <footer className="h-[40vh] w-full snap-start bg-[#050505] flex flex-col items-center justify-center border-t border-[#C5A059]/10 px-6 text-center">
         <Sparkle className="w-10 h-10 text-[#C5A059] mb-6 opacity-40" weight="light" />
         <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">Sua vez de brilhar.</h3>
         <div className="w-12 h-px bg-[#C5A059]/20 mb-8"></div>
         <button 
           onClick={onClose}
           className="flex items-center gap-3 text-[#C5A059] hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-bold"
         >
            <House className="w-5 h-5" />
            Voltar ao Menu
         </button>
      </footer>
    </motion.div>
  );
}
