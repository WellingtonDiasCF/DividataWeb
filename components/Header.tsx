'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Server, ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'A Empresa', href: '/empresa' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll quando o menu mobile abre
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2.5 group relative z-50">
              <div className="bg-orange-600 p-2.5 rounded-xl text-white shadow-lg shadow-orange-500/20 group-hover:bg-orange-700 group-hover:scale-105 transition-all duration-300">
                <Server size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-xl font-extrabold tracking-tight transition-colors ${
                  isScrolled || isOpen ? 'text-gray-900' : 'text-white'
                }`}>
                  DIVIDATA
                </span>
                <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase ${
                  isScrolled || isOpen ? 'text-orange-600' : 'text-orange-200'
                }`}>
                  Processamento de Dados
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group overflow-hidden rounded-full"
                >
                  <span className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-600 group-hover:text-orange-600' 
                      : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${
                      isScrolled ? 'bg-orange-50' : 'bg-white/10'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* BOTÃO DE AÇÃO (DESKTOP) - ALTERADO PARA TRABALHE CONOSCO */}
            <div className="hidden md:flex items-center">
              <Link
                href="/trabalhe-conosco"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 group"
              >
                <Briefcase size={18} className="transition-transform group-hover:scale-110" />
                <span className="text-sm">Trabalhe Conosco</span>
                <ChevronRight size={16} className="ml-1 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className={`md:hidden relative z-50 p-2 rounded-lg transition-colors ${
                isScrolled || isOpen ? 'text-orange-600 hover:bg-orange-50' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode='wait'>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[320px] bg-white z-40 md:hidden shadow-2xl flex flex-col"
            >
              <div className="h-24" />

              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
                <div className="mb-6">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Navegação
                  </span>
                </div>

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl text-lg font-bold text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-all group"
                    >
                      {link.name}
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-8 pb-6"
                >
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">Faça parte do time</h3>
                    <p className="text-sm text-gray-500 mb-4">Confira nossas vagas abertas e venha crescer com a Dividata.</p>
                    <Link
                      href="/trabalhe-conosco"
                      className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95"
                      onClick={() => setIsOpen(false)}
                    >
                      <Briefcase size={18} />
                      Ver Vagas
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}