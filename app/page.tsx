'use client';

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [isMapReady, setIsMapReady] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  // Scroll Reset
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Lógica: Só sai do loading se o mapa estiver pronto E a animação tiver terminado
  const showLoading = !isMapReady || !isAnimationDone;

  return (
    <main className="bg-white min-h-screen relative overflow-x-hidden">
      
      {/* O Loading agora controla sua própria saída visual com AnimatePresence */}
      <AnimatePresence>
        {showLoading && (
          <LoadingScreen onComplete={() => setIsAnimationDone(true)} />
        )}
      </AnimatePresence>

      {/* Conteúdo do site */}
      <div className={`transition-opacity duration-1000 delay-200 ${showLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        
        {/* Hero avisa: "Cálculos matemáticos terminaram" */}
        <Hero onMapReady={() => setIsMapReady(true)} />
        
        <About />
        {/* Outras seções... */}
      </div>
    </main>
  );
}