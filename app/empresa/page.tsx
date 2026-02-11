'use client';

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Users, MapPin, Building2, History } from "lucide-react";

export default function EmpresaPage() {
  
  // Animação de entrada
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Dados da Linha do Tempo
  const timeline = [
    {
      year: "1981",
      title: "A Fundação",
      desc: "Nasce a Dividata em Divinópolis-MG, pioneira em processamento de dados e bureau de serviços na região."
    },
    {
      year: "1990s",
      title: "Expansão Tecnológica",
      desc: "Início do desenvolvimento de softwares proprietários e expansão para automação comercial e gestão empresarial."
    },
    {
      year: "2010s",
      title: "Infraestrutura Crítica",
      desc: "Consolidação como parceira de grandes instituições financeiras (CAIXA), assumindo a gestão de hardware e field service."
    },
    {
      year: "Hoje",
      title: "Referência Nacional",
      desc: "Atuação em 26 estados + DF, combinando fábrica de software moderna com uma das maiores redes de técnicos de campo do país."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* 1. HERO SECTION: LEGADO */}
      <section className="relative pt-48 pb-32 bg-primary-dark overflow-hidden">
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent transform skew-x-12" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-bold tracking-widest uppercase mb-6">
              Nossa Identidade
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
              45 Anos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Evolução Contínua.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
              Não somos apenas uma empresa de TI. Somos a garantia de que a operação de nossos clientes — seja um banco federal ou um grande varejista — nunca pare.
            </p>
          </motion.div>
        </div>
      </section>

{/* 2. STATS GRID (Bento Grid Style) */}
      <section className="py-20 bg-gray-50 relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Sede (Já estava laranja, mantido) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Mantém border-secondary
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary"
            >
              <Building2 className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-primary-dark">Sede Própria</h3>
              <p className="text-gray-600 mt-2">
                Base operacional em Divinópolis-MG com estrutura de NOC (Network Operations Center) monitorando chamados em tempo real.
              </p>
            </motion.div>

            {/* Card 2: Capilaridade (Alterado para laranja) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              // MUDANÇA AQUI: border-secondary
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary"
            >
              {/* MUDANÇA AQUI: Ícone para text-secondary (para combinar) */}
              <MapPin className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-primary-dark">Presença Nacional</h3>
              <p className="text-gray-600 mt-2">
                Técnicos residentes e volantes cobrindo 100% do território nacional. Onde houver uma agência, a Dividata está lá.
              </p>
            </motion.div>

            {/* Card 3: Equipe (Alterado para laranja) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              // MUDANÇA AQUI: border-secondary
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary"
            >
              {/* MUDANÇA AQUI: Ícone para text-secondary (para combinar) */}
              <Users className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-primary-dark">Capital Humano</h3>
              <p className="text-gray-600 mt-2">
                Equipe multidisciplinar: Engenheiros, Desenvolvedores Full-stack e Técnicos de Campo certificados.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. LINHA DO TEMPO (Timeline) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-dark flex items-center justify-center gap-3">
              <History className="text-secondary" />
              Nossa Trajetória
            </h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Ícone do ano no meio */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-xs z-10">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                
                {/* Card de Conteúdo */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-primary-dark">{item.title}</div>
                    <time className="font-mono text-xs text-secondary font-bold">{item.year}</time>
                  </div>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CULTURA E VALORES */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">O DNA Dividata</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-secondary/20 p-2 rounded h-fit">
                  <CheckCircle2 className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Compromisso com SLA</h4>
                  <p className="text-blue-200 mt-2 text-sm leading-relaxed">
                    Entendemos que tempo parado é prejuízo. Nossa logística é desenhada para resolver incidentes críticos dentro dos prazos mais rigorosos do mercado bancário.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-secondary/20 p-2 rounded h-fit">
                  <Trophy className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Excelência Técnica</h4>
                  <p className="text-blue-200 mt-2 text-sm leading-relaxed">
                    Não somos apenas "trocadores de peças". Nossa equipe técnica é treinada para diagnosticar a raiz do problema, garantindo a longevidade dos ativos de TI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Espaço para Imagem de Cultura/Time */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent z-10" />
            {/* Placeholder Visual */}
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                    <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <span className="text-white/40 text-sm font-mono">
                        [Imagem da Equipe / Confraternização / Reunião]
                    </span>
                </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}