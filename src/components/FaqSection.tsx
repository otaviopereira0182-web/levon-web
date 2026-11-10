import React, { useState } from 'react';
import { FAQ_LIST, WHATSAPP_DIRECT_URL } from '../data/agencyData';
import { HelpCircle, Search, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-32 bg-[#07090e] border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Lado Esquerdo (Sticky em Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">06</span>
              <span className="tracking-widest uppercase">PERGUNTAS FREQUENTES</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tudo o que você precisa saber antes de iniciar.
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Respostas claras e transparentes sobre domínio, hospedagem, prazos, manutenção e processo de publicação do seu site.
            </p>

            {/* Barra de Pesquisa */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar dúvida (ex: domínio, prazo, manutenção)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Card de Contato Direto com WhatsApp */}
            <div className="p-6 bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-xl space-y-3.5">
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block font-semibold">
                DÚVIDA ESPECÍFICA?
              </span>
              <h4 className="font-display text-base font-bold text-white">
                Fale com nossa equipe diretamente no WhatsApp
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tire suas dúvidas técnicas ou solicite uma análise preliminar para o seu negócio sem compromisso.
              </p>
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Accordion */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80">
            {filteredFaqs.length === 0 ? (
              <div className="py-12 text-center text-sm text-slate-500 font-mono">
                Nenhuma resposta encontrada para &ldquo;{searchTerm}&rdquo;.
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);

                return (
                  <div key={faq.id} className="p-5 sm:p-6 transition-colors">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left flex items-start justify-between gap-4 focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </span>

                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-sm shrink-0 transition-transform duration-200 border ${
                          isOpen
                            ? 'bg-blue-600 text-white border-blue-500 rotate-45'
                            : 'border-slate-800 text-slate-400'
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
