import React, { useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import { LegalDocType } from '../types';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLegalDoc: (doc: LegalDocType) => void;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({
  isOpen,
  onClose,
  onOpenLegalDoc,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const practices = [
    {
      num: 1,
      name: 'Política de Privacidade',
      desc: 'Página/modal detalhado explicando a coleta, finalidade, retenção e direitos dos titulares conforme a Lei 13.709/2018 (LGPD).',
      action: () => onOpenLegalDoc('privacidade'),
      actionLabel: 'Ver Política',
    },
    {
      num: 2,
      name: 'Termos de Serviço',
      desc: 'Condições de utilização do website, proteção de propriedade intelectual e regras de propostas comerciais.',
      action: () => onOpenLegalDoc('termos'),
      actionLabel: 'Ver Termos',
    },
    {
      num: 3,
      name: 'Aviso de Cookies & Preferências',
      desc: 'Banner interativo com gestão granular de cookies essenciais, analíticos e de marketing.',
      action: () => onOpenLegalDoc('cookies'),
      actionLabel: 'Ver Política',
    },
    {
      num: 4,
      name: 'Política de Reembolso',
      desc: 'Cláusulas justas e transparentes adequadas à prestação de serviços de desenvolvimento sob medida e aprovação por fases.',
      action: () => onOpenLegalDoc('reembolso'),
      actionLabel: 'Ver Regras',
    },
    {
      num: 5,
      name: 'Formulários na LGPD',
      desc: 'Mecanismo explícito de consentimento e aviso prévio de finalidade em todos os campos de coleta.',
    },
    {
      num: 6,
      name: 'Só Dados Necessários',
      desc: 'Coleta estritamente enxuta: Nome, Empresa, WhatsApp e Mensagem, eliminando perguntas invasivas.',
    },
    {
      num: 7,
      name: 'Scripts de Tracking Conscientes',
      desc: 'Nenhum script espião invasivo ou rastreador não essencial carregado sem permissão do usuário.',
    },
    {
      num: 8,
      name: 'Acessibilidade Web (WCAG)',
      desc: 'Hierarquia semântica de tags (H1 a H4), labels para leitores de tela e alvos de toque adequados.',
    },
    {
      num: 9,
      name: 'Alt nas Imagens',
      desc: 'Todas as imagens e mockups possuem atributos alt descritivos e com contexto de uso.',
    },
    {
      num: 10,
      name: 'Contraste Rigorosamente Corrigido',
      desc: 'Paleta testada para atingir padrão WCAG AA (texto branco/cinza claro sobre fundo obsidian/navy).',
    },
    {
      num: 11,
      name: 'Navegação Completa por Teclado',
      desc: 'Skip link para conteúdo, indicadores de foco com outline azul elétrico e suporte a ESC e TAB.',
    },
    {
      num: 12,
      name: 'Sem Avaliações Falsas',
      desc: 'Nenhum depoimento forjado ou cliente inventado. Foco no trabalho autoral e transparente.',
    },
    {
      num: 13,
      name: 'Sem Promessas Falsas',
      desc: 'Sem garantias milagrosas de vendas ou #1 no Google. Comunicação honesta sobre o impacto de um bom site.',
    },
    {
      num: 14,
      name: 'Copyright & Imagens Licenciadas',
      desc: 'Imagens geradas e autorais, sem uso indevido de fotografias de terceiros ou marcas registradas.',
    },
    {
      num: 15,
      name: 'Dados da Empresa Editáveis',
      desc: 'Painel dinâmico para preencher CNPJ, WhatsApp, e-mail e endereço oficiais sem dados fictícios permanentes.',
    },
    {
      num: 16,
      name: 'Conformidade LGPD Ativa',
      desc: 'Observância aos princípios de finalidade, adequação, livre acesso, segurança e prevenção de dados.',
    },
    {
      num: 17,
      name: 'Prevenção de Riscos Jurídicos',
      desc: 'Avisos explícitos de que as minutas são modelos para revisão jurídica da empresa e que os projetos do portfólio são estudos conceituais.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#0b0f19] border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white">
              Painel das 17 Boas Práticas Implementadas
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-3">
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            A Levon Web foi construída sob os mais rigorosos padrões de conformidade técnica, transparência comercial e segurança jurídica:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {practices.map((p) => (
              <div
                key={p.num}
                className="p-3.5 bg-slate-900/50 border border-slate-800 rounded-xl flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-xs shrink-0 mt-0.5">
                  {p.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white">{p.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
                  {p.action && (
                    <button
                      onClick={() => {
                        onClose();
                        p.action!();
                      }}
                      className="mt-2 text-[10px] text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                    >
                      <span>{p.actionLabel}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            17 de 17 Boas Práticas 100% integradas no projeto
          </span>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
