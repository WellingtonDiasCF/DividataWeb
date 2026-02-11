'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// FRASES MAIS TÁTICAS E "LEGAIS"
const LOADING_PHRASES = [
  "ESTABELECENDO HANDSHAKE CRIPTOGRAFADO...",
  "ATIVANDO NÚCLEOS DE PROCESSAMENTO PARALELO...",
  "RASTREANDO VETORES DE INFRAESTRUTURA...",
  "SINCRONIZANDO REDE NEURAL DA DIVIDATA...",
  "CALIBRANDO SENSORES GEOSPACIAIS...",
  "COMPILANDO 2.000 NÓS DE DADOS...",
  "ACESSO AO SISTEMA AUTORIZADO."
];

interface LoadingScreenProps {
  onComplete: () => void; // Nova prop: avisa quando acabar
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [randomData, setRandomData] = useState("00");
  
  // Calcula qual frase mostrar baseado no progresso (0 a 100)
  // Ex: se estiver em 50%, mostra a frase do meio do array
  const textIndex = Math.min(
    Math.floor((progress / 100) * LOADING_PHRASES.length),
    LOADING_PHRASES.length - 1
  );

  useEffect(() => {
    // A barra sobe 0.5% a cada 50ms = 10 segundos total
    const interval = setInterval(() => {
      setRandomData(Math.random().toString(16).substring(2, 8).toUpperCase());

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Monitora o 100% para avisar a página principal
  useEffect(() => {
    if (progress === 100) {
      // Pequeno delay para o usuário ler "Acesso Autorizado" antes de sumir
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden font-mono"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 1 } }}
    >
      {/* --- FUNDO TÁTICO --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(234,88,12,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(234,88,12,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />
      </div>

      {/* --- CANTOS --- */}
      <div className="absolute inset-4 md:inset-8 z-10 pointer-events-none border border-orange-500/10 rounded-lg">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/50" />
      </div>

      {/* --- DATA STREAM --- */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 text-[10px] text-orange-500/30 font-bold hidden md:flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span 
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.05 }}
            >
              0x{randomData.substring(0, 4)}-F{i}
            </motion.span>
          ))}
      </div>

      {/* --- CENTRO --- */}
      <div className="relative z-20 flex flex-col items-center">
        
        {/* HUD Circular */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-10 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-slate-700/50 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-[3px] border-t-orange-600 border-r-transparent border-b-orange-900/30 border-l-transparent rounded-full shadow-[0_0_15px_rgba(234,88,12,0.3)]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 border border-b-orange-400 border-t-transparent border-l-orange-400/20 border-r-transparent rounded-full"
          />
          <div className="relative flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-white tracking-widest">
              {Math.floor(progress)}<span className="text-orange-500 text-sm">%</span>
            </span>
          </div>
        </div>

        {/* Texto e Barra */}
        <div className="w-[280px] md:w-[400px] flex flex-col gap-2">
          <div className="h-8 flex items-center justify-center relative mb-2 overflow-hidden">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={textIndex} // Garante a animação quando a frase muda
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center w-full"
                >
                  <p className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center w-full px-2">
                    {LOADING_PHRASES[textIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
          </div>

          {/* Barra de Progresso */}
          <div className="relative h-1.5 bg-slate-900 rounded-sm border border-slate-800 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:4px_100%] z-10 opacity-30 pointer-events-none" />
              
              <motion.div 
                className="h-full bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 shadow-[0_0_20px_#ea580c]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
          </div>

          <div className="flex justify-between text-[8px] text-slate-500 uppercase tracking-widest mt-1">
              <span>ID: {randomData}</span>
              <span>{progress < 100 ? 'PROCESSING...' : 'COMPLETE'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}