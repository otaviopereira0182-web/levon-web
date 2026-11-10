import React, { useState, useEffect } from 'react';
import { X, Settings, ShieldCheck, Check } from 'lucide-react';
import { AgencyContactInfo } from '../types';

interface AgencyConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  agencyInfo: AgencyContactInfo;
  onSave: (updated: AgencyContactInfo) => void;
}

export const AgencyConfigModal: React.FC<AgencyConfigModalProps> = ({
  isOpen,
  onClose,
  agencyInfo,
  onSave,
}) => {
  const [formData, setFormData] = useState<AgencyContactInfo>(agencyInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(agencyInfo);
  }, [agencyInfo, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#0b0f19] border border-slate-700 rounded-2xl p-6 sm:p-7 w-full max-w-xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white">
              Configurações e Dados da Agência
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-5 p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <span>
            <strong>Item 15 das Boas Práticas:</strong> Os campos abaixo permitem personalizar em tempo real o telefone de WhatsApp, CNPJ e localização da Levon Web com dados oficiais da empresa.
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nome da Marca / Agência
              </label>
              <input
                type="text"
                required
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Número WhatsApp (apenas dígitos: DDI+DDD+Nº)
              </label>
              <input
                type="text"
                required
                placeholder="5511999999999"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value.replace(/\D/g, '') })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Telefone de Exibição
              </label>
              <input
                type="text"
                required
                value={formData.phoneDisplay}
                onChange={(e) => setFormData({ ...formData, phoneDisplay: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                E-mail de Contato
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              CNPJ (preencher com CNPJ ativo da empresa)
            </label>
            <input
              type="text"
              value={formData.cnpj}
              onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Endereço / Sede
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Configuração Salva!</span>
                </>
              ) : (
                <span>Salvar Alterações</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
