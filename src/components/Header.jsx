import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#problema', label: 'Problema' },
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#bonus', label: 'Bônus' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl">💳</span>
            <span className="text-xl font-bold gradient-text">VendasFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://vendasflow.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Começar Grátis
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-400 hover:text-indigo-400 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://vendasflow.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-xl transition-all"
            >
              Começar Grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
