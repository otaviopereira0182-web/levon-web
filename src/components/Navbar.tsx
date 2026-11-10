import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Settings2 } from 'lucide-react';
import { AgencyContactInfo } from '../types';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';

interface NavbarProps {
  agencyInfo: AgencyContactInfo;
  onOpenSettings: () => void;
  onOpenLegal: (doc: 'privacidade' | 'termos' | 'cookies' | 'reembolso') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  agencyInfo,
  onOpenSettings,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Sobre', href: '#sobre', index: '01' },
    { label: 'Serviços', href: '#servicos', index: '02' },
    { label: 'Portfólio', href: '#portfolio', index: '03' },
    { label: 'Diferenciais', href: '#diferenciais', index: '04' },
    { label: 'Processo', href: '#processo', index: '05' },
    { label: 'FAQ', href: '#faq', index: '06' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06080d]/90 backdrop-blur-xl border-b border-slate-800/80 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-12">
          {/* Top Bar: 3 Zones with high-end architectural layout */}
          <div className="flex items-center justify-between gap-2 sm:gap-6">
            {/* Zone 1: Brand Monogram & Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-3 text-white tracking-tighter shrink-0 group focus:outline-none"
              aria-label="Levon Web - Início"
            >
              {/* Bespoke Geometric Icon: Interlocking architectural angle */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-slate-900 border border-slate-700/80 rounded-lg flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:border-blue-500/80">
                <svg viewBox="0 0 36 36" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none">
                  <path
                    d="M6 6H14V22H30V30H6V6Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M18 6L30 18H22L14 10V6H18Z"
                    fill="#60A5FA"
                  />
                  <circle cx="26" cy="10" r="2.5" fill="#93C5FD" />
                </svg>
                {/* Precision corner crosshair */}
                <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-blue-400/60" />
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white leading-none whitespace-nowrap">
                  LEVON<span className="text-blue-500 ml-1 font-light tracking-normal">WEB</span>
                </span>
                <span className="hidden md:block text-[9px] font-mono tracking-widest text-slate-500 uppercase mt-0.5 whitespace-nowrap">
                  Design Studio · Sites Profissionais
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links with Editorial Indexing (Desktop) */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-wider font-medium text-slate-400"
              aria-label="Navegação Principal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors relative py-1 group whitespace-nowrap shrink-0"
                >
                  <span className="font-mono text-[10px] text-slate-600 mr-1.5 group-hover:text-blue-400 transition-colors">
                    {link.index}
                  </span>
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Direct WhatsApp Trigger + Quote CTA + Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-800/40 rounded transition-all whitespace-nowrap"
                title="Atendimento direto WhatsApp"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenSettings}
                className="hidden md:inline-flex p-2 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
                title="Configurações e dados institucionais"
                aria-label="Configurar agência"
              >
                <Settings2 className="w-3.5 h-3.5" />
              </button>

              {/* Botão Solicitar Orçamento - 100% visível e inteiro no celular e computador */}
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg sm:rounded-xl transition-all duration-200 whitespace-nowrap shadow-md shadow-blue-600/20 active:scale-95 shrink-0"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white border border-slate-800 rounded-lg focus:outline-none shrink-0"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#06080d] border-l border-slate-800 p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="font-display font-extrabold text-white text-lg">
                    LEVON<span className="text-blue-500 font-light">WEB</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white border border-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between p-3 border border-slate-900 hover:border-slate-800 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900/40 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-blue-400">{link.index}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
