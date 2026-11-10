import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, ArrowRight, FileCheck, ShieldCheck, Code, Globe2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileCheck className="w-5 h-5 text-blue-400" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Code className="w-5 h-5 text-blue-400" />;
      case 3:
        return <Globe2 className="w-5 h-5 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="processo" className="py-20 sm:py-28 md:py-32 bg-[#04060a] border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">05</span>
              <span className="tracking-widest uppercase">PROCESSO DE DESENVOLVIMENTO</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Como construímos o seu site em 4 etapas.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-3 md:mt-0 leading-relaxed font-normal">
            Metodologia transparente com validações claras. Você acompanha e aprova cada etapa antes de qualquer publicação definitiva.
          </p>
        </div>

        {/* Grade dos 4 Passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStepIdx === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-950/30 border-blue-500 shadow-xl'
                    : 'bg-[#0b0f19] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-blue-400' : 'text-slate-500'
                      }`}
                    >
                      ETAPA 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-base sm:text-lg font-bold mb-1.5 transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500">STATUS</span>
                  <span className={isSelected ? 'text-blue-400 font-bold' : 'text-slate-500'}>
                    {isSelected ? 'SELECIONADO' : 'VER DETALHES'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detalhes da Etapa Ativa */}
        <div className="bg-[#0b0f19] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold">
                  ETAPA 0{activeStepIdx + 1}
                </span>
                <span>·</span>
                <span className="text-slate-400">{PROCESS_STEPS[activeStepIdx].durationEstimate}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {PROCESS_STEPS[activeStepIdx].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                {PROCESS_STEPS[activeStepIdx].summary}
              </p>

              <div className="pt-2 space-y-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  Atividades e Validações desta Fase:
                </span>
                {PROCESS_STEPS[activeStepIdx].details.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950 p-5 rounded-xl border border-slate-800 text-xs space-y-3">
              <span className="font-mono text-[10px] text-blue-400 uppercase block font-semibold">
                VALIDAÇÃO PRÉVIA COM O CLIENTE
              </span>
              <p className="text-slate-400 leading-relaxed">
                Você recebe acesso a um link privado de homologação para testar o site no seu próprio celular antes de qualquer apontamento definitivo de domínio.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-slate-500 font-mono text-[10px]">
                <span>GARANTIA LEVON</span>
                <span className="text-emerald-400 font-semibold">CHECKPOINT ATIVO</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
