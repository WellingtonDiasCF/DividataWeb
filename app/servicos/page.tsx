'use client';

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Server, Code2, Wifi, ShieldCheck, Smartphone, Database } from "lucide-react";

export default function ServicesPage() {
  
  // Dados dos serviços para o mapa (Infraestrutura)
  const infraServices = [
    {
      title: "Field Service Nacional",
      desc: "Técnicos residentes ou volantes em 26 estados + DF. Atendimento on-site com SLA agressivo para agências bancárias e varejo.",
      icon: <Server className="w-6 h-6 text-white" />
    },
    {
      title: "Cabeamento Estruturado",
      desc: "Projetos de rede lógica e elétrica, certificação de pontos e organização de racks (Data Center).",
      icon: <Wifi className="w-6 h-6 text-white" />
    },
    {
      title: "Manutenção de Hardware",
      desc: "Gestão completa do ciclo de vida dos ativos de TI. Reparo, logística reversa e descarte ecológico.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />
    }
  ];

  // Dados dos serviços de Software
  const softwareServices = [
    {
      title: "Fábrica de Software",
      desc: "Desenvolvimento de sistemas web sob medida, focados na regra de negócio específica da sua operação.",
      icon: <Code2 className="w-6 h-6 text-white" />
    },
    {
      title: "Aplicativos Mobile",
      desc: "Soluções corporativas para Android e iOS. Apps de força de vendas, coleta de dados e field service.",
      icon: <Smartphone className="w-6 h-6 text-white" />
    },
    {
      title: "Integração & APIs",
      desc: "Conectamos seu legado a novas tecnologias. Migração de dados e construção de APIs seguras.",
      icon: <Database className="w-6 h-6 text-white" />
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* HERO DA PÁGINA INTERNA */}
      <section className="pt-40 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-20 skew-x-12 transform origin-top-right" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Nossas Soluções
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Da infraestrutura física ao código. Uma abordagem completa para sustentar operações críticas.
          </motion.p>
        </div>
      </section>

      {/* BLOCO 1: INFRAESTRUTURA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark flex items-center gap-3">
              <span className="p-2 bg-primary rounded-lg"><Server className="text-white" /></span>
              Infraestrutura & Field Service
            </h2>
            <p className="text-gray-600 mt-4 ml-14 max-w-2xl">
              Nossa equipe de campo atua como uma extensão da sua TI. Garantimos que seus equipamentos e redes estejam operacionais, não importa onde sua agência esteja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infraServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-blue-900/20 shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 2: SOFTWARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-right">
            <h2 className="text-3xl font-bold text-primary-dark flex items-center justify-end gap-3">
              Software & Desenvolvimento
              <span className="p-2 bg-secondary rounded-lg"><Code2 className="text-white" /></span>
            </h2>
            <p className="text-gray-600 mt-4 ml-auto max-w-2xl">
              Transformamos processos manuais em sistemas inteligentes. Do legado ao cloud, nossa fábrica de software entrega agilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-orange-500/20 shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-primary-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Precisa de um projeto personalizado?</h2>
          <p className="text-blue-200 mb-8">
            Nossa equipe de engenharia e desenvolvimento está pronta para desenhar a solução ideal para o seu negócio.
          </p>
          <a href="/contato" className="inline-block bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:scale-105">
            Falar com Consultor
          </a>
        </div>
      </section>

    </main>
  );
}