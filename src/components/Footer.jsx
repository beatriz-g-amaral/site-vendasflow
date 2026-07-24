import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💳</span>
              <span className="text-lg font-bold gradient-text">VendasFlow</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              O sistema que ajuda pequenos negócios a controlar vendas parceladas e contas a pagar sem estresse.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Produto</h4>
            <ul className="space-y-3">
              {['Funcionalidades', 'Preços', 'Depoimentos', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-3">
              {['Sobre', 'Blog', 'Carreiras', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacidade', 'Termos', 'Cookies', 'LGPD'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} VendasFlow. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {['🐦', '📷', '💼', '📧'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-indigo-500/20 rounded-xl flex items-center justify-center text-sm transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
