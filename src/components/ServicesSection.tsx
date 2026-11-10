import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Check, MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import { WHATSAPP_RAW_NUMBER } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === activeServiceId) || SERVICES_LIST[0];

  const handleWhatsAppInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no serviço de ${serviceTitle} da Levon Web e gostaria de solicitar uma proposta técnica.`
    );
    window.open(`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 md:py-32 bg-[#07090e] border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">02</span>
              <span className="tracking-widest uppercase">CATÁLOGO DE SERVIÇOS TÉCNICOS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Soluções sob medida para o seu estágio de negócio.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-3 md:mt-0 leading-relaxed font-normal">
            Cada projeto é planejado conforme a meta da sua empresa: credibilidade institucional, geração de orçamentos ou vendas diretas.
          </p>
        </div>

        {/* Layout: Lista Interativa + Painel de Especificação */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Lado Esquerdo: Lista de Serviços (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80">
            {SERVICES_LIST.map((service: ServiceItem, index: number) => {
              const isSelected = activeServiceId === service.id;
              const formattedNumber = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-blue-950/30 border-l-4 border-l-blue-500'
                      : 'hover:bg-slate-900/50 border-l-4 border-l-transparent'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveServiceId(service.id);
                  }}
                  aria-selected={isSelected}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold ${
                        isSelected ? 'text-blue-400' : 'text-slate-600'
                      }`}
                    >
                      {formattedNumber}
                    </span>

                    <div>
                      <h3
                        className={`font-display text-base sm:text-lg font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                    <span className="text-[10px] font-mono text-slate-500 sm:hidden">
                      Toque para ver detalhes
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'border-slate-800 text-slate-500'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lado Direito: Especificações do Serviço Selecionado (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0b0f19] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-5">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                  ESCOPO EM DESTAQUE
                </span>
                <span className="text-xs font-mono text-slate-500">
                  REF: {activeService.id}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {activeService.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {activeService.fullDesc}
              </p>

              <div className="mb-5 p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs">
                <span className="font-mono text-[10px] text-blue-400 uppercase block mb-1">
                  Público-Alvo Recomendado:
                </span>
                <p className="text-slate-300">{activeService.targetAudience}</p>
              </div>

              <div className="space-y-2 mb-6">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  Benefícios da Solução:
                </span>
                {activeService.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80 mb-6">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-2">
                  Entregáveis Inclusos:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-slate-300 text-[11px] font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => handleWhatsAppInquiry(activeService.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotar via WhatsApp</span>
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                >
                  <span>Formulário</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
