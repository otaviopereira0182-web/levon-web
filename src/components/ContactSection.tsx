import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageCircle,
  Copy,
  Check,
  ShieldCheck,
  AlertCircle,
  Lock,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { AgencyContactInfo } from '../types';
import { WHATSAPP_DIRECT_URL, WHATSAPP_RAW_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '../data/agencyData';

interface ContactSectionProps {
  agencyInfo: AgencyContactInfo;
  selectedProjectOrService?: string;
  onOpenPrivacyPolicy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  agencyInfo,
  selectedProjectOrService = '',
  onOpenPrivacyPolicy,
}) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [tipoProjeto, setTipoProjeto] = useState('Site Institucional');
  const [mensagem, setMensagem] = useState('');
  const [consentLgpd, setConsentLgpd] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const [submissionNotice, setSubmissionNotice] = useState<{
    type: 'backend_required';
    formattedMessage: string;
    jsonPayload: string;
  } | null>(null);

  const [copiedPayload, setCopiedPayload] = useState(false);

  useEffect(() => {
    if (selectedProjectOrService) {
      setMensagem((prev) =>
        prev
          ? `${prev}\n\n[Referência selecionada: ${selectedProjectOrService}]`
          : `Olá! Gostaria de um orçamento detalhado referente a: ${selectedProjectOrService}`
      );
    }
  }, [selectedProjectOrService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorNotice(null);

    if (!consentLgpd) {
      setErrorNotice('É necessário manifestar concordância com a Política de Privacidade para prosseguir.');
      return;
    }

    if (!nome.trim() || !whatsapp.trim()) {
      setErrorNotice('Por favor, preencha pelo menos Nome e WhatsApp para contato.');
      return;
    }

    const structuredText = `*Solicitação de Orçamento - Levon Web*\n\n` +
      `*Nome:* ${nome.trim()}\n` +
      `*Empresa:* ${empresa.trim() || 'Não informada'}\n` +
      `*WhatsApp:* ${whatsapp.trim()}\n` +
      `*Tipo de Projeto:* ${tipoProjeto}\n` +
      `*Mensagem:* ${mensagem.trim() || WHATSAPP_DEFAULT_MESSAGE}\n` +
      `*Consentimento LGPD:* Confirmado pelo titular\n` +
      `*Data:* ${new Date().toLocaleString('pt-BR')}`;

    const payload = JSON.stringify(
      {
        nome: nome.trim(),
        empresa: empresa.trim() || null,
        whatsapp: whatsapp.trim(),
        tipoProjeto,
        mensagem: mensagem.trim(),
        consentimentoLgpd: true,
        timestamp: new Date().toISOString(),
      },
      null,
      2
    );

    setSubmissionNotice({
      type: 'backend_required',
      formattedMessage: structuredText,
      jsonPayload: payload,
    });
  };

  const handleOpenWhatsAppFromForm = () => {
    const text = encodeURIComponent(
      `Olá, Levon Web! Solicito orçamento para um ${tipoProjeto}.\n\n` +
      `Nome: ${nome || '[Nome]'}\n` +
      (empresa ? `Empresa: ${empresa}\n` : '') +
      `WhatsApp: ${whatsapp || '[WhatsApp]'}\n` +
      (mensagem ? `Detalhes: ${mensagem}\n` : `Mensagem: ${WHATSAPP_DEFAULT_MESSAGE}\n`)
    );
    window.open(`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${text}`, '_blank');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2500);
  };

  return (
    <section id="contato" className="py-20 sm:py-28 md:py-32 bg-[#04060a] border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">07</span>
              <span className="tracking-widest uppercase">SOLICITAR ORÇAMENTO & CONTATO</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Vamos construir sua presença digital.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-3 md:mt-0 leading-relaxed font-normal">
            Preencha os campos abaixo para receber uma análise preliminar sob medida ou fale diretamente conosco pelo WhatsApp.
          </p>
        </div>

        {/* Grade de Contato: WhatsApp à Esquerda + Formulário à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Lado Esquerdo: WhatsApp & Informações Oficiais */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card com o Botão de WhatsApp Solicitado */}
            <div className="bg-[#0b0f19] border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block mb-2 font-semibold">
                CANAL PRIORITÁRIO
              </span>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Atendimento Imediato via WhatsApp
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                Clique no botão abaixo para iniciar uma conversa diretamente no WhatsApp oficial da Levon Web.
              </p>

              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Conversar no WhatsApp</span>
              </a>

              <div className="mt-4 text-[11px] font-mono text-emerald-400 text-center">
                Mensagem padrão já configurada
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 space-y-3.5 text-xs">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block font-semibold">
                CANAIS OFICIAIS
              </span>

              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Atendimento via WhatsApp Oficial</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{agencyInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{agencyInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{agencyInfo.hours}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Seus dados são protegidos em total conformidade com a LGPD.</span>
              </div>
            </div>

          </div>

          {/* Lado Direito: Formulário com Visual Limpo e Alinhado */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-6">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-wider font-semibold">
                FORMULÁRIO DE ORÇAMENTO
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                LGPD SEGURO
              </span>
            </div>

            {errorNotice && (
              <div className="mb-5 p-3.5 bg-rose-950/40 border border-rose-800 rounded-xl text-rose-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorNotice}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Ex: Silva Odontologia"
                    className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    WhatsApp para Retorno *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    Tipo de Projeto Desejado *
                  </label>
                  <select
                    value={tipoProjeto}
                    onChange={(e) => setTipoProjeto(e.target.value)}
                    className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-blue-500 outline-none"
                  >
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="Site Comercial / Catálogo">Site Comercial / Catálogo</option>
                    <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                    <option value="Site para Prestador de Serviços">Site para Prestador de Serviços</option>
                    <option value="Design Responsivo & Redesign">Design Responsivo & Redesign</option>
                    <option value="Manutenção & Suporte Web">Manutenção & Suporte Web</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1.5">
                  Mensagem / Resumo do Objetivo
                </label>
                <textarea
                  rows={3}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Conte sobre sua empresa e o que gostaria que o novo site tivesse..."
                  className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              {/* Consentimento LGPD */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-400">
                  <input
                    type="checkbox"
                    checked={consentLgpd}
                    onChange={(e) => setConsentLgpd(e.target.checked)}
                    className="mt-0.5 rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer shrink-0"
                  />
                  <span>
                    Concordo com a{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyPolicy}
                      className="text-blue-400 underline hover:text-blue-300 font-medium"
                    >
                      Política de Privacidade
                    </button>{' '}
                    para contato exclusivo referente a este orçamento (Lei nº 13.709/2018 - LGPD).
                  </span>
                </label>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsAppFromForm}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-950 hover:bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-xs font-bold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar no WhatsApp</span>
                </button>
              </div>
            </form>

            {/* Notificação Técnica Realista */}
            {submissionNotice && (
              <div className="mt-6 p-5 bg-slate-950 border border-blue-500/50 rounded-xl space-y-3.5 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Notificação de Integração Técnica
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Conforme os princípios de transparência técnica, conecte este formulário em produção ao seu serviço de recebimento (Webhook, Formspree ou API).
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2">
                  <button
                    onClick={handleOpenWhatsAppFromForm}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Disparar no WhatsApp</span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(submissionNotice.formattedMessage)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700 rounded-lg transition-colors"
                  >
                    {copiedPayload ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPayload ? 'Copiado!' : 'Copiar Dados'}</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
