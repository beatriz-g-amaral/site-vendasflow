import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '👥',
      title: 'Cadastro de Clientes',
      desc: 'Nome e telefone. Simples, rápido e sempre à mão.',
    },
    {
      icon: '💸',
      title: 'Vendas Parceladas',
      desc: 'Registre valor + parcelas. O sistema calcula tudo automaticamente.',
    },
    {
      icon: '📊',
      title: 'Painel Financeiro',
      desc: 'Veja quanto já recebeu, quanto vai receber e o que está vencido.',
    },
    {
      icon: '✅',
      title: 'Baixa de Parcelas',
      desc: 'Marque como pago com um clique. Atualiza tudo na hora.',
    },
    {
      icon: '🏭',
      title: 'Controle de Fornecedores',
      desc: 'Cadastre fornecedores e organize contas a pagar sem estresse.',
    },
    {
      icon: '📱',
      title: 'Acessível de Qualquer Lugar',
      desc: 'Funciona no celular, tablet e computador. Tudo online.',
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 sm:py-28 bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Tudo que você precisa
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Ferramentas completas para gerenciar seu negócio sem complicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient border border-white/5 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-indigo-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
