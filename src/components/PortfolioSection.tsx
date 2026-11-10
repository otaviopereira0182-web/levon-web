import React, { useState } from 'react';
import { Sparkles, Plus, Eye, Check, ShieldAlert, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PORTFOLIO_PROJECTS, WHATSAPP_RAW_NUMBER } from '../data/agencyData';
import { PortfolioProject, ProjectCategory } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

interface PortfolioSectionProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForQuote }) => {
  const [projects, setProjects] = useState<PortfolioProject[]>(PORTFOLIO_PROJECTS);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newSegment, setNewSegment] = useState('');
  const [newCategory, setNewCategory] = useState<ProjectCategory>('institucional');
  const [newDescription, setNewDescription] = useState('');
  const [newGoal, setNewGoal] = useState('');

  const filterCategories: { id: ProjectCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Projetos (06)' },
    { id: 'institucional', label: 'Institucional' },
    { id: 'comercial', label: 'Comercial & Vendas' },
    { id: 'landing-page', label: 'Landing Pages' },
    { id: 'servicos', label: 'Prestadores de Serviços' },
  ];

  const filteredProjects = activeCategory === 'todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSegment.trim()) return;

    const newProject: PortfolioProject = {
      id: `proj-${Date.now()}`,
      title: newTitle.trim(),
      segment: newSegment.trim(),
      category: newCategory,
      shortDescription: newDescription.trim() || 'Website estratégico personalizado com foco em credibilidade e conversão.',
      fullDescription: newDescription.trim() || 'Projeto arquitetado para ilustrar soluções visuais, desempenho ágil e experiência intuitiva.',
      image: '/src/assets/images/portfolio_realty_1793930493918.jpg',
      tags: ['Design Exclusivo', 'Mobile First', 'SEO Estruturado'],
      features: ['Interface moderna e responsiva', 'Canais de conversão direta', 'Estrutura otimizada'],
      colorPalette: [
        { name: 'Dark Navy', hex: '#0B0F19' },
        { name: 'Electric Blue', hex: '#3B82F6' },
      ],
      primaryGoal: newGoal.trim() || 'Fortalecer posicionamento digital no nicho de atuação.',
      isConceptual: true,
    };

    setProjects([newProject, ...projects]);
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewSegment('');
    setNewDescription('');
    setNewGoal('');
  };

  const handleWhatsAppQuote = (projectTitle: string, segment: string) => {
    const text = encodeURIComponent(
      `Olá! Vi o projeto demonstrativo de ${projectTitle} (${segment}) da Levon Web e gostaria de um site com padrão visual similar para o meu negócio.`
    );
    window.open(`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 md:py-32 bg-[#04060a] border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <span className="text-white font-bold bg-blue-600 px-2 py-0.5 rounded">03</span>
              <span className="tracking-widest uppercase">GALERIA DE PROJETOS DEMONSTRATIVOS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              A prova prática da nossa capacidade de criação.
            </h2>
          </div>

          <div className="mt-4 lg:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-blue-400" />
              <span>Cadastrar Novo Projeto</span>
            </button>
          </div>
        </div>

        {/* Aviso Obrigatório das 17 Boas Práticas */}
        <div className="mb-8 p-4 bg-[#0b0f19] border-l-4 border-l-amber-500 border-y border-r border-slate-800 rounded-r-xl flex items-start gap-3 text-xs">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-200">Aviso de Integridade Comercial:</span>{' '}
            As 6 obras apresentadas nesta galeria são <strong>estudos conceituais demonstrativos</strong> desenvolvidos pela equipe da Levon Web para evidenciar nossa capacidade técnica e estética em diferentes segmentos. Não são apresentadas como clientes comerciais reais.
          </div>
        </div>

        {/* Barra de Filtros Segmentada */}
        <div className="flex items-center gap-2 pb-3 mb-10 overflow-x-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grade de Projetos: Equilibrada, Alinhada e Focada em Mobile e Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: PortfolioProject) => (
            <div
              key={project.id}
              className="bg-[#0b0f19] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Visual Preview */}
                <div
                  className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`Interface do site demonstrativo para ${project.segment} - ${project.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 backdrop-blur-sm border border-slate-800 text-[10px] text-amber-400 font-mono rounded">
                    Demonstração Conceitual
                  </div>

                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      Visualizar Detalhes
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                    <span className="text-blue-400">{project.segment}</span>
                    <span>·</span>
                    <span className="capitalize">{project.category}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ações Inferiores do Card */}
              <div className="p-5 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-slate-300 hover:text-white inline-flex items-center justify-center gap-1 font-semibold py-2 sm:py-0"
                >
                  <span>Explorar projeto</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsAppQuote(project.title, project.segment)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir Similar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalhes */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProjectForQuote={onSelectProjectForQuote}
        />

        {/* Modal de Cadastro de Novos Projetos */}
        {isAddModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setIsAddModalOpen(false)}
          >
            <div
              className="bg-[#0b0f19] border border-slate-700 rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pb-3 border-b border-slate-800 mb-5">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">
                  ESTRUTURA ESCALÁVEL
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Cadastrar Novo Estudo de Caso
                </h3>
              </div>

              <form onSubmit={handleCreateProject} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Título do Projeto *</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ex: Alfa Consultoria Financeira"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-mono mb-1">Segmento *</label>
                    <input
                      type="text"
                      required
                      value={newSegment}
                      onChange={(e) => setNewSegment(e.target.value)}
                      placeholder="Ex: Finanças & B2B"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-mono mb-1">Categoria</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as ProjectCategory)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:border-blue-500 outline-none"
                    >
                      <option value="institucional">Institucional</option>
                      <option value="comercial">Comercial</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="servicos">Prestador de Serviços</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-mono mb-1">Descrição</label>
                  <textarea
                    rows={2}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Objetivo e particularidades da solução..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:border-blue-500 outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-slate-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg"
                  >
                    Salvar Projeto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
