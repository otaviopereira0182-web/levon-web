import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Sparkles, Monitor, Smartphone, Check, ArrowRight, ShieldAlert } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProjectForQuote,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="bg-[#0b0f19] border border-slate-700/80 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              {project.segment}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Projeto Conceitual Demonstrativo
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Device switcher */}
            <div className="hidden sm:inline-flex items-center p-0.5 bg-slate-950 border border-slate-800 rounded-lg">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceView === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Visualizar em Desktop"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceView === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Visualizar em Celular"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Fechar modal de detalhes do projeto"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-[#07090e] p-4 sm:p-6 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-slate-800">
            <div
              className={`transition-all duration-300 w-full ${
                deviceView === 'mobile' ? 'max-w-[320px]' : 'max-w-2xl'
              }`}
            >
              <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group relative">
                {/* Simulated browser header */}
                <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded truncate flex-1">
                    demo.levonweb.com.br/{project.id}
                  </div>
                </div>

                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Interface do projeto demonstrativo ${project.title} desenvolvido pela Levon Web`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Notice under preview */}
              <div className="mt-3 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                <span>Demonstração estética criada pela equipe Levon Web. Não representa cliente real.</span>
              </div>
            </div>
          </div>

          {/* Project Details (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h2 id="project-title" className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                {project.fullDescription}
              </p>

              {/* Goal */}
              <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-lg mb-5">
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  Objetivo Estratégico do Projeto:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{project.primaryGoal}</p>
              </div>

              {/* Features */}
              <div className="mb-5">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Recursos Implementados na Solução:
                </span>
                <ul className="space-y-1.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Palette */}
              <div className="mb-5">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Identidade Visual & Paleta Aplicada:
                </span>
                <div className="flex items-center gap-3">
                  {project.colorPalette.map((col, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span
                        className="w-4 h-4 rounded-full border border-slate-700 shadow-sm"
                        style={{ backgroundColor: col.hex }}
                        title={`${col.name} (${col.hex})`}
                      />
                      <span className="text-[11px] font-mono text-slate-400">{col.hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags - clean text separators */}
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-400 mr-1.5">Foco técnico:</span>
                {project.tags.join(' · ')}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5">
              <a
                href={`https://wa.me/559180240316?text=${encodeURIComponent(
                  `Olá! Gostei muito do projeto demonstrativo de ${project.title} (${project.segment}) da Levon Web e gostaria de um orçamento similar para o meu negócio.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-600/20 transition-colors"
              >
                <span>Falar sobre este projeto no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  onClose();
                  onSelectProjectForQuote(`Projeto inspirado em: ${project.title} (${project.segment})`);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <span>Preencher formulário de briefing</span>
              </button>

              <button
                onClick={onClose}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors py-1"
              >
                Fechar detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
