import React from 'react';

export default function ProblemSection() {
  const problems = [
    {
      icon: '📋',
      title: 'Planilhas confusas',
      desc: 'Fórmulas quebradas, dados perdidos, ninguém entende nada.',
    },
    {
      icon: '📒',
      title: 'Caderninho desorganizado',
      desc: 'Risca aqui, anota ali — fácil errar e perder o controle.',
    },
    {
      icon: '😰',
      title: 'Clientes esquecendo de pagar',
      desc: 'Você perde tempo cobrando e ainda fica sem saber se vão pagar.',
    },
    {
      icon: '📉',
      title: 'Sem visão do negócio',
      desc: 'Quanto entra? Quanto sai? Quem deve? Sem respostas claras.',
    },
  ];

  return (
    <section id="problema" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">O Problema</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Cansado de se enrolar com as contas?
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Se você usa planilha ou caderninho para controlar vendas parceladas, já sabe como é estressante.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="card-gradient border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl">
            <span className="text-2xl">💡</span>
            <p className="text-gray-300">
              <strong className="text-white">VendasFlow</strong> resolve tudo isso em 3 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
