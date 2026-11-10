import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, Sliders } from 'lucide-react';
import { CookiePreferences, LegalDocType } from '../types';

interface CookieBannerProps {
  onOpenLegal: (doc: LegalDocType) => void;
  isPreferencesModalOpen: boolean;
  onClosePreferencesModal: () => void;
  onOpenPreferencesModal: () => void;
}

const STORAGE_KEY = 'levonweb_cookie_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenLegal,
  isPreferencesModalOpen,
  onClosePreferencesModal,
  onOpenPreferencesModal,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    responded: true, // initial state until client effect runs
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    setShowBanner(false);
    onClosePreferencesModal();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.warn('Unable to persist cookie consent', e);
    }
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      responded: true,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      responded: true,
      updatedAt: new Date().toISOString(),
    });
  };

  const [modalAnalytics, setModalAnalytics] = useState(preferences.analytics);
  const [modalMarketing, setModalMarketing] = useState(preferences.marketing);

  useEffect(() => {
    setModalAnalytics(preferences.analytics);
    setModalMarketing(preferences.marketing);
  }, [preferences, isPreferencesModalOpen]);

  const handleSaveModalCustom = () => {
    savePreferences({
      essential: true,
      analytics: modalAnalytics,
      marketing: modalMarketing,
      responded: true,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <>
      {/* Floating Cookie Banner */}
      {showBanner && (
        <div
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-40 bg-[#0b0f19]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 shadow-2xl animate-fadeIn"
          role="region"
          aria-label="Aviso de Privacidade e Cookies"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <h4 className="text-sm font-bold text-white mb-1">
                Controle de Cookies e Privacidade (LGPD)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Utilizamos cookies estritamente necessários para a navegação segura do site. Cookies analíticos e de terceiros dependem da sua autorização prévia. Consulte nossa{' '}
                <button
                  onClick={() => onOpenLegal('cookies')}
                  className="text-blue-400 underline hover:text-blue-300 font-medium"
                >
                  Política de Cookies
                </button>
                .
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
                >
                  Aceitar Todos
                </button>

                <button
                  onClick={handleRejectNonEssential}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
                >
                  Apenas Essenciais
                </button>

                <button
                  onClick={onOpenPreferencesModal}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Personalizar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {isPreferencesModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={onClosePreferencesModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0b0f19] border border-slate-700 rounded-2xl p-6 sm:p-7 w-full max-w-lg shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-400" />
                <h3 className="text-base font-bold text-white">
                  Preferências Detalhadas de Cookies
                </h3>
              </div>
              <button
                onClick={onClosePreferencesModal}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Em respeito aos princípios de necessidade e finalidade da LGPD, você pode definir individualmente quais categorias autoriza:
            </p>

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white">Cookies Estritamente Necessários</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Obrigatório</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Indispensáveis para a segurança da navegação, integridade de formulários e armazenamento deste consentimento.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 h-4 w-4 rounded bg-slate-800 border-slate-700 text-blue-600 opacity-60 cursor-not-allowed"
                />
              </div>

              {/* Analytics */}
              <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-white block mb-1">Cookies Analíticos e Desempenho</span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Coleta anônima e agregada de métricas de visitação para identificar melhorias na velocidade e usabilidade do site.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={modalAnalytics}
                  onChange={(e) => setModalAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-white block mb-1">Cookies de Marketing e Redes</span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Medição da eficácia de campanhas publicitárias e recursos de mídia externa.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={modalMarketing}
                  onChange={(e) => setModalMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={onClosePreferencesModal}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveModalCustom}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Salvar Minhas Preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
