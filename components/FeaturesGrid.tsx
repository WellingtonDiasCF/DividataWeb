'use client';

import { motion } from 'framer-motion';
import { Cpu, Map, Users, LayoutTemplate } from 'lucide-react';

const features = [
  {
    title: "Field Service",
    desc: "Técnicos em campo em todo território nacional.",
    icon: <Map className="w-8 h-8 text-white" />,
    color: "bg-primary",
    span: "col-span-1 md:col-span-2" // Ocupa 2 espaços
  },
  {
    title: "Software House",
    desc: "Desenvolvimento sob medida.",
    icon: <LayoutTemplate className="w-8 h-8 text-white" />,
    color: "bg-secondary",
    span: "col-span-1"
  },
  {
    title: "Outsourcing",
    desc: "Terceirização de TI completa.",
    icon: <Users className="w-8 h-8 text-primary" />,
    color: "bg-gray-100 text-primary-dark", // Card claro
    span: "col-span-1"
  },
  {
    title: "Hardware",
    desc: "Manutenção e fornecimento.",
    icon: <Cpu className="w-8 h-8 text-white" />,
    color: "bg-primary-dark",
    span: "col-span-1 md:col-span-2"
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-dark">Ecossistema Dividata</h2>
          <p className="text-gray-500 mt-4">Soluções integradas para grandes operações.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }} // Efeito de levantar ao passar o mouse
              className={`${item.span} ${item.color} ${item.color.includes('bg-gray') ? '' : 'text-white'} p-8 rounded-2xl shadow-lg cursor-pointer group`}
            >
              <div className="mb-4 bg-white/10 w-fit p-3 rounded-xl backdrop-blur-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className={`opacity-80 ${item.color.includes('bg-gray') ? 'text-gray-600' : 'text-blue-50'}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}