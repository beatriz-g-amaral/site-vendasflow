import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-gray-950 to-gray-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-300 mb-8">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Sistema #1 para pequenos negócios
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Adeus planilhas.{' '}
          <span className="gradient-text">Olá VendasFlow.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          Controle vendas parceladas, organize contas a pagar e receba
          notificações automáticas — tudo online, do celular ou computador.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://vendasflow.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 text-lg"
          >
            🚀 Começar Agora
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-2xl border border-white/10 transition-all duration-200 text-lg"
          >
            ▶ Ver Demonstração
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: '10k+', label: 'Vendas registradas' },
            { number: '98%', label: 'Clientes satisfeitos' },
            { number: '3min', label: 'Para começar' },
            { number: '24/7', label: 'Suporte online' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
