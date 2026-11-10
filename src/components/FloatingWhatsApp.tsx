import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Floating Preview Card on hover / open */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] max-w-xs sm:w-80 bg-[#0b0f19] border border-slate-700/80 rounded-2xl p-4 shadow-2xl shadow-black/80 animate-fadeIn backdrop-blur-xl relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar prévia de WhatsApp"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0b0f19]" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Atendimento Levon Web</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-400">Online agora · Resposta ágil</div>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed my-3 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            &ldquo;Olá! Tenho interesse nos serviços da Levon Web e gostaria de conhecer melhor as soluções oferecidas.&rdquo;
          </p>

          <a
            href={WHATSAPP_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02]"
          >
            <span>Iniciar conversa direta</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div className="flex items-center gap-2">
        <a
          href={WHATSAPP_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 pl-3 pr-4 py-2.5 bg-[#0b0f19]/95 hover:bg-emerald-950/40 text-white border border-slate-700/80 hover:border-emerald-500/60 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          title="Fale conosco via WhatsApp oficial da Levon Web"
          aria-label="Abrir conversa no WhatsApp da Levon Web"
        >
          <div className="relative w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>

          <div className="flex flex-col text-left pr-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 leading-none">
              Atendimento Online
            </span>
            <span className="text-xs font-bold text-slate-100 group-hover:text-white leading-tight">
              Conversar no WhatsApp
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
