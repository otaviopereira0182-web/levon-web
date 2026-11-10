/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LegalModal } from './components/LegalModal';
import { AgencyConfigModal } from './components/AgencyConfigModal';
import { ComplianceModal } from './components/ComplianceModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { INITIAL_AGENCY_INFO } from './data/agencyData';
import { AgencyContactInfo, LegalDocType } from './types';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [agencyInfo, setAgencyInfo] = useState<AgencyContactInfo>(INITIAL_AGENCY_INFO);
  const [selectedServiceOrProject, setSelectedServiceOrProject] = useState<string>('');
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState(false);

  const handleSelectServiceForQuote = (serviceName: string) => {
    setSelectedServiceOrProject(serviceName);
    const contactElem = document.querySelector('#contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForQuote = (projectName: string) => {
    setSelectedServiceOrProject(projectName);
    const contactElem = document.querySelector('#contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePortfolio = () => {
    const portfolioElem = document.querySelector('#portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = () => {
    const contactElem = document.querySelector('#contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar
        agencyInfo={agencyInfo}
        onOpenSettings={() => setIsConfigModalOpen(true)}
        onOpenLegal={(doc) => setActiveLegalDoc(doc)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Floating 17 Boas Práticas quick verification badge */}
        <div className="fixed bottom-4 left-4 z-30 hidden sm:block">
          <button
            onClick={() => setIsComplianceModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#0b0f19]/90 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/50 rounded-full text-xs shadow-lg backdrop-blur-md transition-all group"
            title="Conferir implementação das 17 Boas Práticas & LGPD"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[11px]">17 Boas Práticas Ativas</span>
          </button>
        </div>

        {/* 1. Hero Section with multi-device mockup */}
        <Hero
          onExplorePortfolio={handleExplorePortfolio}
          onRequestQuote={handleRequestQuote}
        />

        {/* 2. Sobre nós */}
        <AboutSection />

        {/* 3. Serviços */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 4. Portfólio (6 conceptual projects) */}
        <PortfolioSection
          onSelectProjectForQuote={handleSelectProjectForQuote}
        />

        {/* 5. Diferenciais */}
        <DifferentialsSection />

        {/* 6. Processo de desenvolvimento (4 etapas) */}
        <ProcessSection />

        {/* 7. Perguntas frequentes */}
        <FaqSection />

        {/* 8. Contato e formulário funcional com LGPD */}
        <ContactSection
          agencyInfo={agencyInfo}
          selectedProjectOrService={selectedServiceOrProject}
          onOpenPrivacyPolicy={() => setActiveLegalDoc('privacidade')}
        />
      </main>

      {/* 9. Rodapé */}
      <Footer
        agencyInfo={agencyInfo}
        onOpenLegal={(doc) => setActiveLegalDoc(doc)}
        onOpenSettings={() => setIsConfigModalOpen(true)}
        onOpenCookiePreferences={() => setIsPreferencesModalOpen(true)}
      />

      {/* Botão de WhatsApp Oficial Requisitado com link e mensagem */}
      <FloatingWhatsApp />

      {/* Interactive Modals & Banners */}
      <CookieBanner
        onOpenLegal={(doc) => setActiveLegalDoc(doc)}
        isPreferencesModalOpen={isPreferencesModalOpen}
        onClosePreferencesModal={() => setIsPreferencesModalOpen(false)}
        onOpenPreferencesModal={() => setIsPreferencesModalOpen(true)}
      />

      <LegalModal
        initialDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        onSelectDoc={(doc) => setActiveLegalDoc(doc)}
      />

      <AgencyConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        agencyInfo={agencyInfo}
        onSave={(updated) => setAgencyInfo(updated)}
      />

      <ComplianceModal
        isOpen={isComplianceModalOpen}
        onClose={() => setIsComplianceModalOpen(false)}
        onOpenLegalDoc={(doc) => setActiveLegalDoc(doc)}
      />
    </div>
  );
}
