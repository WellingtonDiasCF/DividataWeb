'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="empresa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna de Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Muito além do Suporte Técnico. <br/>
              <span className="text-primary opacity-80">Parceiros Estratégicos.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-darkgrey leading-relaxed">
              <p>
                Fundada em 1981, em Divinópolis-MG, a Dividata nasceu com o DNA de inovação. O que começou como uma pioneira em processamento de dados evoluiu para se tornar uma das principais operadoras de Field Service e Outsourcing de TI do país.
              </p>
              <p>
                Não somos apenas uma prestadora de serviços; somos o braço direito da infraestrutura de nossos clientes. Atuamos onde a tecnologia não pode falhar: agências bancárias, órgãos governamentais e grandes varejistas.
              </p>
              <p>
                Nossa estrutura permite atender chamados em qualquer município do Brasil com o mesmo padrão de qualidade e SLA agressivo que grandes corporações exigem.
              </p>
            </div>

            {/* Selo / Certificação Visual (Opcional) */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Excelência Comprovada</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
          </div>

          {/* Coluna Visual (Imagem Institucional) */}
          <div className="relative h-[500px] w-full bg-white rounded-sm shadow-xl overflow-hidden border border-gray-100 p-4">
            {/* Aqui simulamos uma foto de "Sala de Controle" ou "Técnicos" */}
            <div className="w-full h-full bg-slate-200 flex items-center justify-center flex-col gap-4">
               <span className="text-slate-400 font-medium">[Espaço para Foto Institucional Real]</span>
               <p className="text-xs text-slate-400 text-center max-w-xs">
                 Sugestão: Foto da sede em Divinópolis ou equipe técnica uniformizada atendendo um servidor.
                 Passa credibilidade e "rosto" para a empresa.
               </p>
            </div>
            
            {/* Card Sobreposto */}
            <div className="absolute bottom-8 left-8 bg-primary-dark p-6 max-w-xs shadow-lg">
              <p className="text-white text-lg font-light italic">
                "Nossa missão é garantir que a tecnologia funcione para que o seu negócio nunca pare."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}