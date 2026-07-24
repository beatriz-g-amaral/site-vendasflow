import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Cadastre seus clientes',
    desc: 'Adicione nome e telefone de quem compra de você. Leva 10 segundos.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    number: '02',
    title: 'Registre a venda',
    desc: 'Informe cliente, valor total e em quantas parcelas. O sistema já calcula as datas de vencimento.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Acompanhe no painel',
    desc: 'Veja de um relance o que já recebeu, o que vai receber e quais parcelas estão vencidas.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    number: '04',
    title: 'Marque como pago',
    desc: 'Quando o cliente pagar, um clique e pronto. Tudo se atualiza automaticamente.',
    color: 'from-rose-500 to-indigo-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Como Funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Comece em 3 minutos
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Quatro passos simples para nunca mais perder o controle das suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
              )}
              <div className="card-gradient border border-white/5 rounded-2xl p-8 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
