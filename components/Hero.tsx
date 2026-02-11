'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import NetworkBackground from './NetworkBackground';
import { Outfit } from 'next/font/google';

// Fonte moderna e arredondada
const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-outfit'
});

// 1. DEFINIMOS O QUE O HERO VAI RECEBER (A interface)
interface HeroProps {
  onMapReady?: () => void; 
}

// 2. RECEBEMOS A PROP AQUI
export default function Hero({ onMapReady }: HeroProps) {
  const textFadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section className={`relative bg-primary-dark min-h-screen flex items-center ${outfit.className} overflow-hidden`}>
      
      {/* Elemento de fundo para "aquecer" a cena com laranja */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          
          {/* COLUNA DA ESQUERDA: TEXTO */}
          <div className="lg:col-span-6 flex flex-col justify-center py-12 lg:py-0">
            
            {/* Badge Superior UNIFICADO */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={textFadeUp} className="inline-flex mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(234,88,12,0.1)]">
                Atuação Nacional
                <span className="text-orange-500/40 text-[10px]">•</span>
                Desde 1981
              </span>
            </motion.div>
            
            {/* Título Principal */}
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={textFadeUp} className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              Processamento de Dados & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 relative">
                Field Service.
              </span>
            </motion.h1>
            
            {/* Descrição Direta */}
            <motion.p custom={2} initial="hidden" animate="visible" variants={textFadeUp} className="text-lg md:text-xl text-blue-100/70 mb-8 leading-relaxed max-w-lg font-light">
              Soluções completas de infraestrutura e suporte técnico para grandes operações. Atendimento especializado e <strong>presença garantida em todo o território nacional.</strong>
            </motion.p>

            {/* Ícones de Check */}
            <motion.div custom={2.5} initial="hidden" animate="visible" variants={textFadeUp} className="flex flex-wrap gap-6 mb-10 text-sm font-medium text-blue-100/60">
                <span className="flex items-center gap-2 group">
                  <div className="bg-orange-500/20 p-1 rounded-full group-hover:bg-orange-500/40 transition-colors">
                    <CheckCircle2 size={14} className="text-orange-500" /> 
                  </div>
                  Gestão de Infraestrutura
                </span>
                <span className="flex items-center gap-2 group">
                  <div className="bg-orange-500/20 p-1 rounded-full group-hover:bg-orange-500/40 transition-colors">
                    <CheckCircle2 size={14} className="text-orange-500" />
                  </div>
                  Suporte Técnico Presencial
                </span>
            </motion.div>

            {/* Botões */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={textFadeUp} className="flex flex-wrap gap-4">
              <Link href="/servicos" className="group relative flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all hover:bg-orange-700 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  Conheça Nossas Soluções
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/empresa" className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 hover:border-orange-500/50 hover:text-orange-100 transition-all backdrop-blur-sm">
                A Dividata
              </Link>
            </motion.div>
          </div>

          {/* COLUNA DA DIREITA: MAPA */}
          <div className="lg:col-span-6 relative h-[500px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end">
              
              {/* Brilho laranja atrás do mapa */}
              <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative w-full h-full">
                 {/* 3. REPASSAMOS A FUNÇÃO PARA O MAPA AQUI */}
                 <NetworkBackground onReady={onMapReady} />
              </div>

          </div>

        </div>
        
        {/* Seta Scroll */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-500/50 animate-bounce cursor-pointer hover:text-orange-500 transition-colors z-20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
