import React from 'react';
import { ShieldCheck, Compass, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 sm:py-28 md:py-32 bg-[#04060a] border-b border-slate-900 overflow-hidden">
      {/* Ticker Cinético Superior com Contenção de Overflow */}
      <div className="w-full bg-blue-600/10 border-y border-blue-500/20 py-2.5 overflow-hidden mb-12 sm:mb-16">
        <div className="animate-ticker whitespace-nowrap text-[10px] sm:text-xs font-mono tracking-widest text-blue-300 uppercase flex items-center">
          <span className="mx-4 sm:mx-6">· LEVON WEB DESIGN STUDIO</span>
          <span className="mx-4 sm:mx-6">· SITES ESTRATÉGICOS SOB MEDIDA</span>
          <span className="mx-4 sm:mx-6">· CONFORMIDADE LGPD 100%</span>
          <span className="mx-4 sm:mx-6">· DESIGN AUTORAL DE ALTO PADRÃO</span>
          <span className="mx-4 sm:mx-6">· ARQUITETURA RESPONSIVA FLUÍDA</span>
          <span className="mx-4 sm:mx-6">· LEVON WEB DESIGN STUDIO</span>
          <span className="mx-4 sm:mx-6">· SITES ESTRATÉGICOS SOB MEDIDA</span>
          <span className="mx-4 sm:mx-6">· CONFORMIDADE LGPD 100%</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-6">
          <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">01</span>
          <span className="tracking-widest uppercase">SOBRE A LEVON WEB</span>
        </div>

        {/* Layout Equilibrado: Manifesto à Esquerda + Princípios Estruturados à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Lado Esquerdo: Texto Institucional Obrigatório */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="relative pl-4 sm:pl-6 border-l-2 border-blue-500">
              <p className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Transformamos ideias em experiências digitais.{' '}
                <span className="font-normal text-slate-300">
                  Nosso objetivo é ajudar negócios a apresentarem seus serviços com mais profissionalismo, clareza e credibilidade.
                </span>
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                A <strong>Levon Web</strong> é uma agência focada no desenvolvimento de sites profissionais modernos, responsivos e pensados estrategicamente para valorizar a percepção de mercado de cada negócio.
              </p>
              <p>
                Rejeitamos templates repetitivos e designs genéricos. Cada layout, escolha de tipografia e estrutura de navegação é planejado para transmitir <strong>autoridade, confiança, tecnologia e profissionalismo</strong>.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-400">Atendimento direto e sem burocracia</span>
            </div>
          </div>

          {/* Lado Direito: Princípios em Cards Sólidos e Elegantes (sem cantos cortados) */}
          <div className="lg:col-span-5 bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-mono text-slate-400 mb-6">
              <span>PRINCÍPIOS DE ENGENHARIA</span>
              <span className="text-blue-400 font-bold">LEVON STANDARD</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-400">01.</span>
                  <h3 className="font-display text-base font-bold text-white">
                    Design Intencional & Autoral
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  Construção visual alinhada à realidade do seu segmento comercial, sem clichês ou ornamentos vazios.
                </p>
              </div>

              <div className="pt-5 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-400">02.</span>
                  <h3 className="font-display text-base font-bold text-white">
                    Responsividade Fluida no Celular
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  Navegação natural ao toque, sem quebras de linha defeituosas e carregamento ultrarrápido em redes móveis.
                </p>
              </div>

              <div className="pt-5 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-400">03.</span>
                  <h3 className="font-display text-base font-bold text-white">
                    Segurança, Transparência & LGPD
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  Sem dados falsos, sem promessas irrealistas e com respeito absoluto à privacidade dos titulares.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                17 Boas Práticas Integradas
              </span>
              <span className="text-emerald-400">ATIVO</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
