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

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const showLoading = !isMapReady || !isAnimationDone;

  return (
    <main className="bg-white min-h-screen relative overflow-x-hidden">
      
      <AnimatePresence>
        {showLoading && (
          <LoadingScreen onComplete={() => setIsAnimationDone(true)} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 delay-200 ${showLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        
        <Hero onMapReady={() => setIsMapReady(true)} />
        
        {/* --- ADICIONE O ID AQUI --- */}
        <div id="proxima-sessao">
           <About />
        </div>
        
        {/* Outras seções... */}
      </div>
    </main>
  );
}