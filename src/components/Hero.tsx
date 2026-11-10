import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle, Monitor, Smartphone, Tablet, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';

interface HeroProps {
  onExplorePortfolio: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onRequestQuote }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-900 bg-[#06080d]">
      {/* Elementos visuais de fundo contidos (sem transbordamento horizontal) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Barra superior de status - Otimizada para mobile */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">LEVON WEB · DIGITAL STUDIO</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-500">
            <span>SITES ESTRATÉGICOS & ALTA PERFORMANCE</span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400">DISPONÍVEL P/ PROJETOS</span>
          </div>
        </div>

        {/* Grade Principal: Texto Editorial + Demonstração dos Dispositivos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna de Texto (7 cols em desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Tag de Marca */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-[11px] font-mono text-blue-400 uppercase tracking-wider rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agência de Criação de Sites Profissionais</span>
            </div>

            {/* Título Principal com Tipografia Moderna e Harmoniosa */}
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Seu negócio merece uma presença digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 font-extrabold">
                extraordinária.
              </span>
            </h1>

            {/* Descrição Exata do Briefing */}
            <p className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Criamos sites modernos, estratégicos e profissionais para empresas que querem fortalecer sua presença na internet.
            </p>

            {/* Botões de Ação Principais */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Solicitar orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200"
              >
                <span>Explorar portfólio</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Canal do WhatsApp Requisitado pelo Usuário - Sem exibir número de telefone no botão */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs text-slate-400">
              <span className="text-slate-500">Atendimento via WhatsApp:</span>
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-emerald-400" />
                </div>
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Pilares do Ateliê em Linha Limpa */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Design 100% Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Responsivo Mobile & PC</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>LGPD & Segurança Total</span>
              </div>
            </div>

          </div>

          {/* Coluna da Composição Visual Multi-dispositivo (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black relative">
              
              {/* Seletor de Dispositivo Claro e Acessível */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-xs font-mono text-slate-400">VISUALIZAÇÃO RESPONSIVA</span>
                
                <div className="inline-flex items-center p-1 bg-slate-950 border border-slate-800 rounded-lg">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 transition-colors ${
                      deviceView === 'desktop'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>

                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 transition-colors ${
                      deviceView === 'tablet'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Tablet</span>
                  </button>

                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 transition-colors ${
                      deviceView === 'mobile'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Celular</span>
                  </button>
                </div>
              </div>

              {/* Moldura do Dispositivo Ativo - Perfeitamente dimensionado para celular e tela grande */}
              <div className="flex items-center justify-center min-h-[300px] sm:min-h-[380px]">
                
                {/* 1. MODO DESKTOP */}
                {deviceView === 'desktop' && (
                  <div className="w-full bg-[#07090e] border border-slate-700 rounded-xl overflow-hidden shadow-xl animate-fadeIn">
                    <div className="bg-[#0b0f19] px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="bg-slate-950 px-3 py-0.5 rounded text-[10px] text-slate-300 truncate max-w-[200px]">
                        levonweb.com.br/empresa
                      </div>
                      <span className="text-[9px] text-blue-400">DESKTOP</span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src="/src/assets/images/portfolio_realty_1793930493918.jpg"
                        alt="Simulação de site imobiliário no computador desktop pela Levon Web"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                        <div className="text-left">
                          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">
                            Caso Imobiliário · Vanguard
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white">
                            Arquitetura de Alta Conversão
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MODO TABLET */}
                {deviceView === 'tablet' && (
                  <div className="w-full max-w-sm bg-[#07090e] border-2 border-slate-700 rounded-2xl p-2 shadow-xl animate-fadeIn">
                    <div className="rounded-xl overflow-hidden border border-slate-800">
                      <div className="bg-[#0b0f19] px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>iPad Pro 11″</span>
                        <span className="text-blue-400">TOUCH ADAPTIVE</span>
                      </div>
                      <div className="relative aspect-[4/3] bg-slate-950">
                        <img
                          src="/src/assets/images/portfolio_bistro_1793930493990.jpg"
                          alt="Simulação em tablet de site gastronômico pela Levon Web"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/80 p-3 text-left">
                          <span className="text-[9px] font-mono text-amber-400 uppercase block">Aura Bistrô</span>
                          <span className="text-xs font-bold text-white">Reservas Online em Tempo Real</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. MODO CELULAR */}
                {deviceView === 'mobile' && (
                  <div className="w-full max-w-[240px] bg-slate-950 border-2 border-blue-500/60 rounded-3xl p-2 shadow-xl animate-fadeIn">
                    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#07090e]">
                      <div className="bg-black py-1 px-3 flex items-center justify-between text-[8px] font-mono text-slate-400">
                        <span>09:41</span>
                        <div className="w-12 h-2.5 bg-slate-800 rounded-full" />
                        <span>5G</span>
                      </div>
                      <div className="relative aspect-[9/16] bg-slate-950">
                        <img
                          src="/src/assets/images/portfolio_barbershop_1793930479401.jpg"
                          alt="Simulação em celular smartphone de site de barbearia pela Levon Web"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-2 bottom-2 bg-slate-900/95 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800 text-left">
                          <span className="text-[8px] font-mono text-blue-400 uppercase block">Barbearia Studio</span>
                          <span className="text-[10px] font-bold text-white block">Agendamento em 2 Toques</span>
                          <div className="mt-1.5 w-full bg-blue-600 text-white text-[9px] font-bold py-1 text-center rounded-lg">
                            Agendar Agora
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Rodapé explicativo da composição */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>RESPONSIVIDADE NATIVA</span>
                <span className="text-emerald-400">TESTADO EM TODAS AS TELAS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
