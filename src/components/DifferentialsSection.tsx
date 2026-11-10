import React from 'react';
import { DIFFERENTIALS_LIST } from '../data/agencyData';
import { DifferentialItem } from '../types';

export const DifferentialsSection: React.FC = () => {
  const getCustomGeometry = (id: string) => {
    switch (id) {
      case 'design-personalizado':
        return (
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-blue-400" fill="none">
            <polygon points="24,4 44,14 44,34 24,44 4,34 4,14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="24,10 38,18 38,30 24,38 10,30 10,18" stroke="#60A5FA" strokeWidth="2" />
            <circle cx="24" cy="24" r="4" fill="#3B82F6" />
          </svg>
        );
      case 'responsividade-total':
        return (
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-blue-400" fill="none">
            <rect x="6" y="8" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="26" y="16" width="16" height="24" rx="3" fill="#0B0F19" stroke="#60A5FA" strokeWidth="2" />
            <line x1="16" y1="32" x2="16" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="38" x2="22" y2="38" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 'navegacao-intuitiva':
        return (
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-blue-400" fill="none">
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" />
            <circle cx="24" cy="24" r="10" stroke="#60A5FA" strokeWidth="1.5" />
            <path d="M 24 6 L 27 21 L 42 24 L 27 27 L 24 42 L 21 27 L 6 24 L 21 21 Z" fill="#3B82F6" fillOpacity="0.8" />
          </svg>
        );
      case 'estrutura-otimizada':
        return (
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-blue-400" fill="none">
            <path d="M 6 24 Q 15 6, 24 24 T 42 24" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 6 24 Q 15 42, 24 24 T 42 24" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="24" cy="24" r="3" fill="#3B82F6" />
          </svg>
        );
      case 'atencao-identidade':
        return (
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-blue-400" fill="none">
            <circle cx="18" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="30" cy="24" r="14" stroke="#60A5FA" strokeWidth="1.5" />
            <path d="M 24 16 A 14 14 0 0 1 24 32 A 14 14 0 0 1 24 16" fill="#3B82F6" fillOpacity="0.5" />
          </svg>
        );
      case 'possibilidade-manutencao':
        return (
          <svg viewBox="0 0 48 48" className="w-10 h-10 text-blue-400" fill="none">
            <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
            <path d="M 38 24 A 14 14 0 0 1 24 38 L 24 42 L 18 36 L 24 30 L 24 34 A 10 10 0 0 0 34 24 Z" fill="#60A5FA" />
            <circle cx="24" cy="24" r="4" fill="#3B82F6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 md:py-32 bg-[#07090e] border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">04</span>
              <span className="tracking-widest uppercase">ENGENHARIA & CRITÉRIOS DE QUALIDADE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Os 6 diferenciais do padrão Levon Web.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-3 md:mt-0 leading-relaxed font-normal">
            Não utilizamos atalhos. Construímos cada projeto com rigor visual, velocidade de carregamento e respeito integral aos dados do usuário.
          </p>
        </div>

        {/* Grade de Diferenciais Limpa e Alinhada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DIFFERENTIALS_LIST.map((item: DifferentialItem, index: number) => {
            const formattedIdx = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCustomGeometry(item.id)}
                    </div>
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-wider font-semibold">
                      {formattedIdx} · {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PADRÃO LEVON</span>
                  <span className="text-emerald-400 font-semibold">100% ASSEGURADO</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
