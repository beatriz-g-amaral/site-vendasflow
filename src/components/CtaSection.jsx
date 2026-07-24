import React from 'react';

export default function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <span className="text-5xl block mb-6">💳</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Pronto para organizar seu negócio?
            </h2>
            <p className="max-w-lg mx-auto text-gray-400 text-lg mb-10">
              Mais de <strong className="text-white">10 mil vendas</strong> já foram registradas no VendasFlow.
              Junte-se a outros empreendedores que trocaram o caderninho pelo controle digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vendasflow.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 text-lg"
              >
                🔥 Criar Conta Gratuita
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-2xl border border-white/10 transition-all duration-200 text-lg"
              >
                📞 Falar com Suporte
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              🚀 Sem cartão de crédito • Cancela quando quiser • Dados seguros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
