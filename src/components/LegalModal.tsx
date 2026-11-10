import React, { useEffect } from 'react';
import { X, Shield, FileText, Printer, AlertTriangle, ExternalLink } from 'lucide-react';
import { LEGAL_DOCUMENTS, LegalDocument } from '../data/legalDocsData';
import { LegalDocType } from '../types';

interface LegalModalProps {
  initialDoc: LegalDocType | null;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  initialDoc,
  onClose,
  onSelectDoc,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!initialDoc) return null;

  const currentDoc: LegalDocument = LEGAL_DOCUMENTS[initialDoc] || LEGAL_DOCUMENTS.privacidade;

  const tabs: { id: LegalDocType; label: string }[] = [
    { id: 'privacidade', label: 'Privacidade & LGPD' },
    { id: 'termos', label: 'Termos de Serviço' },
    { id: 'cookies', label: 'Política de Cookies' },
    { id: 'reembolso', label: 'Política de Reembolso' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-[#0b0f19] border border-slate-700 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/70">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-blue-400" />
            <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold text-white">
              Documentos de Conformidade Jurídica
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/40 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectDoc(tab.id)}
              className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                initialDoc === tab.id
                  ? 'border-blue-500 text-white bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Document Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* Header of doc */}
          <div>
            <span className="text-[11px] font-mono text-blue-400 block mb-1">
              Última atualização: {currentDoc.lastUpdated}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
              {currentDoc.title}
            </h3>

            {/* Legal Advisory Disclaimer */}
            <div className="p-3.5 bg-amber-950/20 border border-amber-800/40 rounded-lg flex items-start gap-2.5 text-amber-300/90 text-xs">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{currentDoc.notice}</span>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6 pt-2">
            {currentDoc.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {section.heading}
                </h4>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-300">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400 pt-1">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/70 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Levon Web · Transparência em Conformidade com a Lei Geral de Proteção de Dados (LGPD)
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
