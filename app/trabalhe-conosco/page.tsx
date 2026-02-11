'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Rocket, 
  Heart, 
  GraduationCap, 
  MapPin, 
  ArrowRight,
  UploadCloud,
  CheckCircle2,
  Terminal,
  Wrench
} from "lucide-react";

export default function TrabalheConoscoPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // Simulação de vagas (Hardcoded para demonstração)
  const jobs = [
    {
      title: "Técnico de Campo (Field Service)",
      location: "São Paulo - SP",
      type: "Presencial",
      icon: <Wrench size={20} />,
      department: "Operações"
    },
    {
      title: "Desenvolvedor Full Stack Sênior",
      location: "Remoto / Híbrido",
      type: "CLT / PJ",
      icon: <Terminal size={20} />,
      department: "Engenharia de Software"
    },
    {
      title: "Analista de Suporte N2",
      location: "Divinópolis - MG",
      type: "Presencial",
      icon: <Briefcase size={20} />,
      department: "NOC"
    },
    {
      title: "Estágio em TI",
      location: "Divinópolis - MG",
      type: "Híbrido",
      icon: <GraduationCap size={20} />,
      department: "Infraestrutura"
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 2000);
  };

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

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 bg-primary-dark overflow-hidden">
        {/* Elementos Visuais de Fundo */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
           <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/30 blur-[120px] rounded-full" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeInUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
              Carreiras
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
              Construa o Futuro da <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Tecnologia Bancária.
              </span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-light">
              Junte-se a uma equipe de alta performance que mantém a infraestrutura crítica de grandes instituições financeiras em todo o Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CULTURA / BENEFÍCIOS */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Crescimento Acelerado</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ambiente dinâmico com oportunidades reais de evolução técnica e plano de carreira estruturado.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bem-estar e Saúde</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pacote de benefícios completo incluindo plano de saúde, odontológico e gympass para você e sua família.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aprendizado Contínuo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Incentivo à certificações e cursos. Aqui, a busca pelo conhecimento faz parte da rotina.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. VAGAS ABERTAS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Vagas em Aberto</h2>
            <p className="text-slate-500 mt-2">Encontre o desafio ideal para o seu perfil.</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {job.location}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{job.department}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-sm md:opacity-0 md:group-hover:opacity-100 md:-translate-x-4 md:group-hover:translate-x-0 transition-all">
                    Aplicar <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORMULÁRIO DE CANDIDATURA (BANCO DE TALENTOS) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl">
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900">Não encontrou sua vaga?</h2>
              <p className="text-slate-500 mt-2">
                Envie seu currículo para nosso Banco de Talentos. Estamos sempre em busca de gente boa.
              </p>
            </div>

            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Candidatura Enviada!</h3>
                <p className="text-slate-500">
                  Agradecemos o interesse. Nosso time de RH analisará seu perfil com carinho.
                </p>
                <button 
                  onClick={() => { setFormStatus('idle'); setSelectedFile(null); }}
                  className="mt-8 text-orange-600 font-bold hover:underline"
                >
                  Enviar outro currículo
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">E-mail</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 outline-none transition-all" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">LinkedIn (Opcional)</label>
                    <input type="url" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Área de Interesse</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 outline-none transition-all bg-white">
                      <option>Técnico / Field Service</option>
                      <option>Desenvolvimento</option>
                      <option>Suporte / Infraestrutura</option>
                      <option>Administrativo</option>
                    </select>
                  </div>
                </div>

                {/* Upload de Arquivo Estilizado */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Currículo (PDF)</label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer hover:bg-slate-100 hover:border-orange-400 transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-3 text-slate-400 group-hover:text-orange-500 transition-colors" />
                      <p className="mb-2 text-sm text-slate-500">
                        {selectedFile ? (
                          <span className="font-bold text-orange-600">{selectedFile}</span>
                        ) : (
                          <>
                            <span className="font-semibold">Clique para enviar</span> ou arraste
                          </>
                        )}
                      </p>
                      <p className="text-xs text-slate-400">PDF até 5MB</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'sending' ? 'Enviando...' : 'Cadastrar Currículo'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}