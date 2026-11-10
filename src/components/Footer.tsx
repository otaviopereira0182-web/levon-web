import React from 'react';
import { ShieldCheck, Edit3, MessageCircle, ArrowUpRight } from 'lucide-react';
import { AgencyContactInfo, LegalDocType } from '../types';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';

interface FooterProps {
  agencyInfo: AgencyContactInfo;
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenSettings: () => void;
  onOpenCookiePreferences: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  agencyInfo,
  onOpenLegal,
  onOpenSettings,
  onOpenCookiePreferences,
}) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030407] border-t border-slate-900 text-slate-400 text-xs relative overflow-hidden">
      {/* Linha técnica superior */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20 relative z-10">
        
        {/* Banner Superior do Rodapé com Chamada para WhatsApp */}
        <div className="pb-12 mb-12 border-b border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-2">
              PRONTO PARA DAR O PRÓXIMO PASSO?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Converse com a Levon Web e transforme sua presença digital.
            </h3>
          </div>

          <a
            href={WHATSAPP_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 shadow-lg shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Grade Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Marca & Filosofia (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 border border-slate-700 flex items-center justify-center">
                <span className="text-blue-400 font-bold font-display text-sm">LW</span>
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                LEVON<span className="text-blue-500 font-light ml-1">WEB</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Agência de design e engenharia digital focada na criação de sites profissionais, estratégicos e de alta autoridade para empresas que buscam liderança de mercado.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Desenvolvido sob o rigor das 17 Boas Práticas & LGPD</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div>
            <span className="font-mono text-[11px] text-white uppercase tracking-widest block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 font-normal">
              <li>
                <a href="#" onClick={(e) => handleScrollTo(e, '#root')} className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleScrollTo(e, '#sobre')} className="hover:text-white transition-colors">
                  Sobre o Ateliê
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, '#portfolio')} className="hover:text-white transition-colors">
                  Obras do Portfólio
                </a>
              </li>
              <li>
                <a href="#processo" onClick={(e) => handleScrollTo(e, '#processo')} className="hover:text-white transition-colors">
                  Processo em 4 Fases
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleScrollTo(e, '#contato')} className="hover:text-white transition-colors">
                  Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Páginas Jurídicas (17 Boas Práticas) */}
          <div>
            <span className="font-mono text-[11px] text-white uppercase tracking-widest block mb-4">
              Jurídico & LGPD
            </span>
            <ul className="space-y-2.5 font-normal">
              <li>
                <button onClick={() => onOpenLegal('privacidade')} className="hover:text-white transition-colors text-left">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('termos')} className="hover:text-white transition-colors text-left">
                  Termos de Serviço
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('cookies')} className="hover:text-white transition-colors text-left">
                  Política de Cookies
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('reembolso')} className="hover:text-white transition-colors text-left">
                  Política de Reembolso
                </button>
              </li>
              <li>
                <button onClick={onOpenCookiePreferences} className="text-blue-400 hover:text-blue-300 transition-colors text-left">
                  Gerenciar Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Dados da Empresa Editáveis */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] text-white uppercase tracking-widest">
                Dados Institucionais
              </span>
              <button
                onClick={onOpenSettings}
                className="text-[10px] text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
              >
                <Edit3 className="w-3 h-3" />
                <span>Editar</span>
              </button>
            </div>

            <div className="space-y-2.5 text-[11px] text-slate-400 font-mono leading-relaxed">
              <p>
                <span className="text-slate-300 block">Razão Social:</span>
                {agencyInfo.brandName}
              </p>
              <p>
                <span className="text-slate-300 block">CNPJ:</span>
                {agencyInfo.cnpj}
              </p>
              <p>
                <span className="text-slate-300 block">Atendimento:</span>
                {agencyInfo.address}
              </p>
              <p>
                <span className="text-slate-300 block">Canal Direto:</span>
                WhatsApp Oficial
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>
            &copy; {currentYear} {agencyInfo.brandName}. Todos os direitos reservados.
          </p>

          <p className="text-center sm:text-right">
            Modelos jurídicos orientativos sujeitos a revisão por assessoria legal.
          </p>
        </div>

      </div>
    </footer>
  );
};
