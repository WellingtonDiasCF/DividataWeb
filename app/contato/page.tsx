'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Building2 
} from "lucide-react";

export default function ContatoPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // Simulação de envio de formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simula delay de rede
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  // Animações
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />

      {/* 1. HERO SECTION: CABEÇALHO */}
      <section className="relative pt-48 pb-24 bg-primary-dark overflow-hidden">
        {/* Background Tático */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-3/4 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Vamos Conectar <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sua Operação.</span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-light">
              Dúvidas sobre Field Service ou Desenvolvimento? Nossa equipe de especialistas está pronta para desenhar a solução ideal para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GRID PRINCIPAL: INFORMAÇÕES E FORMULÁRIO */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* COLUNA DA ESQUERDA: INFORMAÇÕES DE CONTATO (4 COLUNAS) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Card de Endereço (ATUALIZADO) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                  <MapPin className="text-primary-dark group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Sede Administrativa</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Praça Benedito Valadares, 84<br />
                  Sobre Loja, Centro<br />
                  Divinópolis - MG<br />
                  CEP: 35500-053
                </p>
              </motion.div>

              {/* Card de Canais (ATUALIZADO) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                  <Phone className="text-primary-dark group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Canais de Atendimento</h3>
                <div className="space-y-2">
                  <a href="tel:+553732212942" className="flex items-center gap-3 text-slate-600 text-sm hover:text-orange-600 transition-colors">
                    <Phone size={16} /> (37) 3221-2942
                  </a>
                  <a href="mailto:contato@dividata.com.br" className="flex items-center gap-3 text-slate-600 text-sm hover:text-orange-600 transition-colors">
                    <Mail size={16} /> contato@dividata.com.br
                  </a>
                </div>
              </motion.div>

              {/* Card de Horário */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                  <Clock className="text-primary-dark group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Horário de Funcionamento</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Segunda a Sexta: 08:00 às 18:00<br />
                  NOC (Monitoramento): 24/7
                </p>
              </motion.div>

            </div>

            {/* COLUNA DA DIREITA: FORMULÁRIO (8 COLUNAS) */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
              >
                <div className="p-8 md:p-12">
                  
                  {formStatus === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center h-[400px]"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                      <p className="text-slate-500 max-w-md">
                        Obrigado pelo contato. Nossa equipe técnica já recebeu sua solicitação e entrará em contato em breve.
                      </p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 text-orange-600 font-bold hover:text-orange-700 underline underline-offset-4"
                      >
                        Enviar nova mensagem
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Envie sua Mensagem</h2>
                        <p className="text-slate-500">Preencha o formulário abaixo para solicitar um orçamento ou tirar dúvidas.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Nome */}
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                            <input 
                              required 
                              type="text" 
                              placeholder="Seu nome"
                              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800"
                            />
                          </div>
                          
                          {/* Empresa */}
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Empresa</label>
                            <input 
                              type="text" 
                              placeholder="Nome da sua empresa"
                              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Email */}
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">E-mail Corporativo</label>
                            <input 
                              required 
                              type="email" 
                              placeholder="voce@empresa.com.br"
                              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800"
                            />
                          </div>
                          
                          {/* Telefone */}
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                            <input 
                              required 
                              type="tel" 
                              placeholder="(00) 00000-0000"
                              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800"
                            />
                          </div>
                        </div>

                        {/* Assunto */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Assunto</label>
                          <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800">
                            <option>Orçamento de Field Service</option>
                            <option>Desenvolvimento de Software</option>
                            <option>Parceria Comercial</option>
                            <option>Outros</option>
                          </select>
                        </div>

                        {/* Mensagem */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Como podemos ajudar?</label>
                          <textarea 
                            required 
                            rows={4}
                            placeholder="Descreva brevemente sua necessidade..."
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800 resize-none"
                          />
                        </div>

                        {/* Botão de Enviar */}
                        <div className="pt-4">
                          <button 
                            type="submit" 
                            disabled={formStatus === 'sending'}
                            className="w-full md:w-auto px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {formStatus === 'sending' ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Enviando...
                              </>
                            ) : (
                              <>
                                Enviar Mensagem <ArrowRight size={20} />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
                
                {/* Rodapé Decorativo do Form */}
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Seus dados estão protegidos pela LGPD.
                   </div>
                   <div className="flex items-center gap-4">
                      <span>Divinópolis - MG</span>
                      <span>•</span>
                      <span>Desde 1981</span>
                   </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAPA WIDE SECTION (ESTÁTICO COM PIN PERSONALIZADO) */}
      <section className="h-[450px] w-full relative bg-slate-200 overflow-hidden">
        {/* Filtro escuro para estilo Cyberpunk */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-slate-900/30 mix-blend-multiply" />
        
        {/* Container do Iframe com pointer-events-none para travar o mapa */}
        <div className="w-full h-full pointer-events-none">
            <iframe 
              // Link focado na Praça Benedito Valadares, 84
              src="https://maps.google.com/maps?q=Praça+Benedito+Valadares,84,Divinópolis,MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="150%" // Altura maior para compensar o topo e centralizar melhor
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} // Grayscale alto contraste
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              // 'pointer-events-none' aqui garante que o usuário não arraste o mapa
              className="grayscale relative z-0 -mt-[10%]" 
            ></iframe>
        </div>
        
        {/* PIN PERSONALIZADO (Fixo no centro da tela) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mt-4">
           <div className="relative flex flex-col items-center group">
              {/* Círculo Pulsante */}
              <div className="w-16 h-16 bg-orange-600/30 rounded-full animate-ping absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* O Pin em si */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-dark text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.5)] border-[3px] border-orange-500 relative z-10 mb-2">
                    <Building2 size={24} />
                </div>
                {/* Triângulo inferior do pin */}
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-orange-500 absolute left-1/2 -translate-x-1/2 bottom-[-10px]" />
              </div>
              
              {/* Label do Pin */}
              <div className="mt-4 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-bold text-slate-900 border border-slate-200">
                 HQ Dividata
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}