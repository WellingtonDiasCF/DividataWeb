'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Server } from 'lucide-react'; // Usamos o ícone do servidor como logo

const LOADING_PHRASES = [
  "ESTABELECENDO HANDSHAKE CRIPTOGRAFADO...",
  "ATIVANDO NÚCLEOS DE PROCESSAMENTO...",
  "RASTREANDO VETORES DE INFRAESTRUTURA...",
  "SINCRONIZANDO REDE NEURAL...",
  "CALIBRANDO SENSORES GEOSPACIAIS...",
  "COMPILANDO 2.000 NÓS DE DADOS...",
  "ACESSO AO SISTEMA AUTORIZADO."
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [randomData, setRandomData] = useState("00");
  
  // NOVO ESTADO: Boot Inicial (O momento estático)
  const [isBooting, setIsBooting] = useState(true);

  // 1. Fase de Boot (Estático -> Dinâmico)
  useEffect(() => {
    // Fica 1.5 segundos parado mostrando a marca antes de começar a "Matrix"
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 1500);
    return () => clearTimeout(bootTimer);
  }, []);

  // 2. Fase de Progresso (Só começa depois do Boot)
  useEffect(() => {
    if (isBooting) return; // Não faz nada enquanto estiver no boot

    const interval = setInterval(() => {
      setRandomData(Math.random().toString(16).substring(2, 8).toUpperCase());

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Velocidade: 0.5% a cada 40ms (~8 segundos total)
        return prev + 0.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isBooting]);

  // 3. Finalização
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Calcula índice do texto baseado no progresso
  const textIndex = Math.min(
    Math.floor((progress / 100) * LOADING_PHRASES.length),
    LOADING_PHRASES.length - 1
  );

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden font-mono"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 1 } }}
    >
      {/* --- FUNDO (SEMPRE VISÍVEL) --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(234,88,12,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(234,88,12,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />
      </div>

      <AnimatePresence mode="wait">
        
        {/* --- FASE 1: TELA ESTÁTICA (BOOT) --- */}
        {isBooting ? (
          <motion.div
            key="boot-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="z-20 flex flex-col items-center justify-center"
          >
            {/* Logo Pulsante */}
            <motion.div 
              animate={{ boxShadow: ["0 0 0px rgba(234,88,12,0)", "0 0 30px rgba(234,88,12,0.5)", "0 0 0px rgba(234,88,12,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-orange-600 p-6 rounded-2xl mb-6 shadow-2xl"
            >
              <Server size={48} className="text-white" strokeWidth={2} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-2">
              DIVIDATA
            </h1>
            <p className="text-orange-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Processamento de Dados
            </p>
          </motion.div>
        ) : (
          
          /* --- FASE 2: HUD TÁTICO (ANIMADO) --- */
          <motion.div
            key="hud-screen"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="z-20 flex flex-col items-center w-full"
          >
            
            {/* DECORAÇÃO: CANTOS */}
            <div className="absolute inset-4 md:inset-8 pointer-events-none border border-orange-500/10 rounded-lg">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/50" />
            </div>

            {/* DATA STREAM LATERAL */}
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

            {/* CENTRO: HUD */}
            <div className="relative z-20 flex flex-col items-center">
              
              {/* Círculos Giratórios */}
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
                        key={textIndex}
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
                      transition={{ duration: 0.05, ease: "linear" }}
                    />
                </div>

                <div className="flex justify-between text-[8px] text-slate-500 uppercase tracking-widest mt-1">
                    <span>ID: {randomData}</span>
                    <span>{progress < 100 ? 'PROCESSING...' : 'COMPLETE'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}