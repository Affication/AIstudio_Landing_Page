import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Industries', href: '#industries' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="SatisPro" 
                className="w-10 h-10 object-contain rounded-lg"
                onError={() => setLogoError(true)}
              />
            ) : (
              <svg className="w-10 h-10 text-blue-600" viewBox="0 0 40 40" fill="currentColor">
                <path d="M10 20C10 14.4772 14.4772 10 20 10H28C29.1046 10 30 10.8954 30 12V14C30 15.1046 29.1046 16 28 16H20C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24H24C27.3137 24 30 26.6863 30 30C30 33.3137 27.3137 36 24 36H12C10.8954 36 10 35.1046 10 34V32C10 30.8954 10.8954 30 12 30H24C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26H20C14.4772 26 10 21.5228 10 16V20Z" />
                <circle cx="32" cy="12" r="2" className="text-blue-400" />
                <circle cx="12" cy="32" r="2" className="text-blue-400" />
                <path d="M28 12H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0" />
              </svg>
            )}
            <span className="font-bold text-xl tracking-tight text-slate-900">SatisPro</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://app.satispro.net"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-blue-600/20"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="https://app.satispro.net"
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};