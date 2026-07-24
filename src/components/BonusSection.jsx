import React from 'react';

export default function BonusSection() {
  return (
    <section id="bonus" className="py-20 sm:py-28 bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 rounded-full text-sm font-semibold text-amber-300 mb-6">
              🎯 Bônus Exclusivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Robô que cobra por você
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Chega de ficar mandando mensagem atrás de cliente. Nosso robô inteligente dispara
              lembretes automáticos no dia do vencimento — educado, profissional e eficiente.
            </p>
            <ul className="space-y-4">
              {[
                '📲 Mensagem automática no dia do vencimento',
                '💬 Cliente recebe lembrete educado e profissional',
                '⏰ Você não precisa fazer nada — o robô trabalha 24h',
                '📈 Aumento de 40% na taxa de recebimento no prazo',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="text-indigo-400 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gray-800/50 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-400">Robô VendasFlow • Online</span>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 max-w-[80%]">
                  <p className="text-sm text-gray-300">
                    Olá, Maria! 👋 Passando para lembrar que sua parcela de <strong>R$ 100,00</strong> vence hoje, dia 15/05. Qualquer dúvida é só chamar! 💙
                  </p>
                  <span className="text-xs text-gray-500 mt-2 block">Hoje • 08:00</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 max-w-[80%] ml-auto">
                  <p className="text-sm text-gray-300">Obrigada pelo lembrete! Vou pagar ainda hoje 😊</p>
                  <span className="text-xs text-gray-500 mt-2 block">Hoje • 08:15</span>
                </div>
                <div className="bg-gray-800 border border-white/5 rounded-2xl p-4 max-w-[80%]">
                  <p className="text-sm text-gray-400 italic">
                    ✅ Pagamento confirmado! Próxima parcela: 15/06.
                  </p>
                  <span className="text-xs text-gray-500 mt-2 block">Hoje • 14:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
