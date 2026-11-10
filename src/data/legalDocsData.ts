export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  notice: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const LEGAL_DOCUMENTS: Record<string, LegalDocument> = {
  privacidade: {
    id: 'privacidade',
    title: 'Política de Privacidade e Proteção de Dados (LGPD)',
    lastUpdated: '05 de Novembro de 2026',
    notice: 'Aviso Importante: Este documento reflete as diretrizes da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD). Trata-se de um modelo estruturado para a Levon Web e deve ser revisado periodicamente pela assessoria jurídica da empresa.',
    sections: [
      {
        heading: '1. Introdução e Compromisso com a Privacidade',
        paragraphs: [
          'A Levon Web respeita a privacidade de seus visitantes e clientes. Esta Política de Privacidade descreve com total transparência quais informações coletamos, por que as coletamos, como são tratadas e quais são os seus direitos enquanto titular de dados pessoais, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).',
          'Atuamos guiados pelo princípio da minimização: coletamos estritamente os dados necessários para o atendimento da sua solicitação comercial.',
        ],
      },
      {
        heading: '2. Dados Coletados e Finalidade do Tratamento',
        paragraphs: [
          'Quando você interage com a Levon Web por meio de nosso formulário de contato, WhatsApp ou e-mail, podemos tratar as seguintes informações:',
        ],
        bullets: [
          'Nome completo: para identificar você e personalizar nosso atendimento.',
          'Nome da empresa / organização: para compreender o contexto do projeto solicitado.',
          'Número de WhatsApp / Telefone: para responder à sua solicitação de orçamento com agilidade.',
          'Tipo de projeto e mensagem descritiva: para preparar uma proposta técnica preliminar fundamentada.',
        ],
      },
      {
        heading: '3. Base Legal para o Tratamento (Art. 7º da LGPD)',
        paragraphs: [
          'O tratamento dos seus dados fundamenta-se principalmente no Artigo 7º, Inciso V da LGPD — procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados — bem como no seu consentimento expresso manifestado ao assinalar a caixa de concordância em nossos formulários.',
        ],
      },
      {
        heading: '4. Compartilhamento e Armazenamento dos Dados',
        paragraphs: [
          'A Levon Web não comercializa, não aluga e não repassa seus dados pessoais a terceiros para fins de marketing ou prospecção não autorizada.',
          'O compartilhamento ocorre exclusivamente com prestadores de serviços de infraestrutura tecnológica essenciais para a operação do site (como provedores de hospedagem segura, servidores de e-mail e mensageria criptografada), todos submetidos a rígidos padrões de segurança da informação.',
        ],
      },
      {
        heading: '5. Seus Direitos como Titular de Dados (Art. 18 da LGPD)',
        paragraphs: [
          'Você possui o direito de, a qualquer momento e mediante requisição formal:',
        ],
        bullets: [
          'Confirmar a existência de tratamento dos seus dados;',
          'Acessar os dados que possuímos a seu respeito;',
          'Solicitar a correção de dados incompletos, inexatos ou desatualizados;',
          'Solicitar a eliminação dos dados tratados com o seu consentimento;',
          'Revogar o consentimento previamente concedido.',
        ],
      },
      {
        heading: '6. Segurança da Informação e Canal do Encarregado (DPO)',
        paragraphs: [
          'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, incidentes de destruição, perda ou alteração. A transmissão de dados é protegida por protocolo seguro HTTPS (SSL/TLS).',
          'Para exercer qualquer um dos seus direitos ou tirar dúvidas sobre o tratamento de dados, entre em contato pelo e-mail: contato@levonweb.com.br (ou diretamente pelo canal de suporte indicado no rodapé).',
        ],
      },
    ],
  },
  termos: {
    id: 'termos',
    title: 'Termos de Serviço e Condições de Uso',
    lastUpdated: '05 de Novembro de 2026',
    notice: 'Aviso Importante: Estes termos regulam a utilização do website institucional da Levon Web. As contratações de serviços de desenvolvimento de sites são regidas adicionalmente por proposta comercial formal e contrato específico de prestação de serviços.',
    sections: [
      {
        heading: '1. Aceitação dos Termos',
        paragraphs: [
          'Ao acessar e navegar pelo website da Levon Web, você declara ter lido, compreendido e concordado com as condições descritas nestes Termos de Serviço. Caso não concorde com qualquer termo, recomendamos que interrompa a navegação.',
        ],
      },
      {
        heading: '2. Escopo do Website e Projetos Conceituais',
        paragraphs: [
          'O presente website tem o propósito de apresentar os serviços de criação de sites profissionais oferecidos pela Levon Web, bem como demonstrar a nossa capacidade técnica e estética de desenvolvimento.',
          'Os projetos exibidos na seção de portfólio identificados como conceituais constituem demonstrações de habilidades de design e engenharia de software para diferentes nichos comerciais (como barbearia, clínica odontológica, pizzaria, imobiliária, restaurante e escritório de advocacia), não representando necessariamente vínculo comercial prévio ou endosso de terceiros.',
        ],
      },
      {
        heading: '3. Propriedade Intelectual',
        paragraphs: [
          'Todos os textos, logotipos, códigos-fonte, estruturas de navegação, layouts e elementos gráficos deste site são de propriedade exclusiva da Levon Web ou foram devidamente licenciados para uso. É vedada a reprodução, cópia, distribuição ou engenharia reversa sem autorização prévia por escrito.',
        ],
      },
      {
        heading: '4. Propostas Comerciais e Orçamentos',
        paragraphs: [
          'O preenchimento do formulário de contato ou o envio de mensagem via WhatsApp constitui uma solicitação de contato e orçamento sem compromisso. Os prazos, valores e especificações técnicas de cada projeto tornam-se vinculantes apenas após a celebração de Contrato de Prestação de Serviços formal assinado entre as partes.',
        ],
      },
      {
        heading: '5. Foro e Legislação Aplicável',
        paragraphs: [
          'Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias decorrentes do uso deste website, elege-se o foro da comarca da sede da empresa, com renúncia expressa a qualquer outro, por mais privilegiado que seja.',
        ],
      },
    ],
  },
  cookies: {
    id: 'cookies',
    title: 'Política e Gerenciamento de Cookies',
    lastUpdated: '05 de Novembro de 2026',
    notice: 'Aviso Importante: A Levon Web preza pela privacidade. Nosso site utiliza apenas cookies estritamente necessários para a funcionalidade básica do sistema e respeita as escolhas de consentimento para métricas analíticas.',
    sections: [
      {
        heading: '1. O que são Cookies?',
        paragraphs: [
          'Cookies são pequenos arquivos de texto gravados no seu navegador quando você visita uma página web. Eles permitem que o site se lembre de ações e preferências (como escolhas de tema e consentimento de privacidade) durante determinado período.',
        ],
      },
      {
        heading: '2. Categorias de Cookies Utilizadas',
        paragraphs: [
          'Classificamos os cookies utilizados em nosso website nas seguintes categorias:',
        ],
        bullets: [
          'Cookies Estritamente Necessários: fundamentais para o funcionamento do site, navegação segura, integridade de formulários e registro do seu consentimento. Não podem ser desativados sem comprometer o funcionamento da página.',
          'Cookies de Desempenho e Analíticos (Opcionais): nos ajudam a entender de forma anônima e agregada como os visitantes interagem com as páginas, permitindo melhorias de usabilidade e velocidade.',
          'Cookies de Marketing e Terceiros (Opcionais): utilizados para mensurar a eficácia de eventuais campanhas de anúncios e fornecer recursos interativos.',
        ],
      },
      {
        heading: '3. Como Gerenciar ou Revogar suas Preferências',
        paragraphs: [
          'Você tem total autonomia para aceitar, recusar ou personalizar as categorias de cookies opcionais através do nosso banner de consentimento ou clicando no link "Preferências de Cookies" no rodapé desta página a qualquer momento.',
          'Você também pode bloquear ou excluir cookies diretamente nas configurações de privacidade do seu navegador de internet.',
        ],
      },
    ],
  },
  reembolso: {
    id: 'reembolso',
    title: 'Política de Reembolso e Condições de Desenvolvimento',
    lastUpdated: '05 de Novembro de 2026',
    notice: 'Aviso Importante: O desenvolvimento de websites e soluções digitais sob medida envolve prestação de serviços intelectuais personalizados, regidos pelas cláusulas contratuais de cada projeto.',
    sections: [
      {
        heading: '1. Natureza do Serviço Personalizado',
        paragraphs: [
          'Os websites, landing pages e portais desenvolvidos pela Levon Web são projetos inteiramente customizados e construídos sob medida para a sua empresa, com alocação dedicada de tempo de design, redação e engenharia de software desde o momento da contratação.',
        ],
      },
      {
        heading: '2. Etapas de Aprovação e Validação Prévia',
        paragraphs: [
          'Para garantir total alinhamento e satisfação mútua, nosso processo de trabalho é dividido em marcos claros de entrega:',
        ],
        bullets: [
          'Etapa 1 (Briefing e Planejamento): levantamento detalhado de requisitos;',
          'Etapa 2 (Apresentação Visual): envio do layout para revisão e aprovação antes do início da codificação;',
          'Etapa 3 (Codificação e Homologação): ambiente de testes com acesso privado para conferência;',
          'Etapa 4 (Publicação Definitiva): disponibilização no domínio final após validação.',
        ],
      },
      {
        heading: '3. Regras para Cancelamento e Reembolso',
        paragraphs: [
          'Caso o cliente solicite o cancelamento do projeto antes da aprovação do layout preliminar, será retida apenas a taxa referente às horas já investidas no briefing e concepção arquitetônica, conforme especificado no contrato individual.',
          'Após a aprovação formal do design e início da etapa de codificação técnica, os valores já investidos não serão passíveis de reembolso integral, em razão do esforço dedicado e da natureza personalizada do serviço prestado.',
          'Garantimos garantia de suporte corretivo gratuita por 30 (trinta) dias corridos após a entrega do site para sanar eventuais bugs ou ajustes técnicos de conformidade.',
        ],
      },
    ],
  },
};
