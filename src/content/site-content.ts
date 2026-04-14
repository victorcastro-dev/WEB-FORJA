import { siteRuntimeConfig } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroHighlight = {
  label: string;
  description: string;
};

export type ServicePageContent = {
  slug: "landing-pages" | "sites-institucionais" | "sistemas-web" | "automacoes";
  label: string;
  shortLabel: string;
  title: string;
  description: string;
  highlight: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  overview: string[];
  forWho: string[];
  problems: string[];
  benefits: string[];
  examples: string[];
  faq: FaqItem[];
};

export type CaseStudy = {
  id: string;
  name: string;
  sector: string;
  service: string;
  objective: string;
  solution: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  url: string;
};

const siteUrl = siteRuntimeConfig.siteUrl;
const whatsappNumber = siteRuntimeConfig.whatsappNumber ?? "";

export const siteConfig = {
  name: "WEBFORJA",
  url: siteUrl,
  whatsappNumber,
  email: "contato@webforja.com.br",
  description:
    "Criamos sites institucionais, landing pages, sistemas web e automações para negócios que precisam vender melhor, transmitir confiança e organizar a operação.",
  heroHeadline:
    "Sites, landing pages, sistemas e automações para negócios que precisam vender com mais clareza.",
  heroSubheadline:
    "A WEBFORJA estrutura presença digital, captação e fluxos para escritórios, negócios locais e operações em crescimento que querem sair do improviso e facilitar orçamento, consulta ou agendamento.",
  heroHighlights: [
    {
      label: "O que fazemos",
      description: "Sites institucionais, landing pages, sistemas web e automações com foco comercial.",
    },
    {
      label: "Para quem",
      description: "Negócios que precisam de presença profissional, prova real e jornada simples para contato.",
    },
    {
      label: "Próximo passo",
      description: "Briefing objetivo, proposta personalizada e continuação no WhatsApp quando fizer sentido.",
    },
  ] satisfies HeroHighlight[],
};

export const primaryNav = [
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Processo", href: "/processo" },
  { label: "Sobre", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Orçamento", href: "/orcamento" },
];

export const mobileNav = [
  ...primaryNav,
  { label: "Landing Pages", href: "/landing-pages" },
  { label: "Sites Institucionais", href: "/sites-institucionais" },
  { label: "Sistemas Web", href: "/sistemas-web" },
  { label: "Automações", href: "/automacoes" },
];

export const footerGroups = [
  {
    title: "Soluções",
    links: [
      { label: "Landing Pages", href: "/landing-pages" },
      { label: "Sites Institucionais", href: "/sites-institucionais" },
      { label: "Sistemas Web", href: "/sistemas-web" },
      { label: "Automações", href: "/automacoes" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Home", href: "/" },
      { label: "Portfólio", href: "/portfolio" },
      { label: "Processo", href: "/processo" },
      { label: "Sobre", href: "/sobre" },
      { label: "FAQ", href: "/faq" },
      { label: "Orçamento", href: "/orcamento" },
    ],
  },
];

export const servicePages: ServicePageContent[] = [
  {
    slug: "landing-pages",
    label: "Landing Pages",
    shortLabel: "Landing Pages",
    title: "Landing pages criadas para transformar clique em contato qualificado.",
    description:
      "Páginas orientadas a campanha, lançamento ou captação, com promessa clara, CTA forte e leitura rápida no mobile.",
    highlight: "Mensagem direta, oferta clara e jornada pensada para conversão.",
    hero: {
      eyebrow: "Landing Pages",
      title: "Quando a campanha precisa converter, a página precisa ser objetiva.",
      description:
        "Desenhamos landing pages para anúncios, lançamentos e captação de leads com estrutura enxuta, copy clara e foco no próximo passo.",
      bullets: [
        "Promessa clara sem excesso de texto",
        "CTA forte para lead, venda ou WhatsApp",
        "Estrutura pronta para tráfego e testes",
      ],
    },
    overview: [
      "Landing page não é só uma página bonita. Ela precisa organizar a proposta de valor, reduzir ruído e conduzir a pessoa para a ação certa.",
      "Na WEBFORJA, cada landing page nasce do objetivo do projeto, da origem do tráfego e do que precisa acontecer depois do clique.",
    ],
    forWho: [
      "Negócios que investem em tráfego pago e querem captar melhor.",
      "Empresas ou profissionais que vão lançar uma oferta específica.",
      "Operações comerciais que precisam validar mensagem, nicho ou serviço.",
    ],
    problems: [
      "Campanhas com clique, mas sem avanço para orçamento ou contato.",
      "Páginas genéricas que não deixam claro o que está sendo vendido.",
      "Experiência confusa no mobile, com perda de atenção e abandono.",
    ],
    benefits: [
      "Oferta apresentada com mais clareza e menos distração.",
      "Estrutura pronta para testes, mídia e acompanhamento futuro.",
      "Mais apoio para campanha, lançamento e validação comercial.",
    ],
    examples: [
      "Página de captação para tráfego pago.",
      "Landing para lançamento de serviço ou produto.",
      "Página única para validar uma oferta com CTA direto.",
    ],
    faq: [
      {
        question: "Landing page serve só para anúncios?",
        answer:
          "Não. Ela também funciona para lançamentos, links de bio, campanhas de e-mail e qualquer fluxo em que a mensagem precise ser mais focada.",
      },
      {
        question: "Vocês criam a estrutura de conversão da página?",
        answer:
          "Sim. O trabalho inclui organizar conteúdo, hierarquia, CTA e blocos estratégicos para facilitar a tomada de decisão.",
      },
      {
        question: "É possível evoluir a landing page depois?",
        answer:
          "Sim. A base já fica pronta para ajustes de copy, integrações e testes conforme o projeto amadurece.",
      },
    ],
  },
  {
    slug: "sites-institucionais",
    label: "Sites Institucionais",
    shortLabel: "Sites Institucionais",
    title: "Sites institucionais com autoridade visual, clareza comercial e base escalável.",
    description:
      "Projetos para empresas que precisam se apresentar melhor, transmitir confiança e transformar presença digital em ativo comercial.",
    highlight: "Posicionamento claro sem parecer site genérico.",
    hero: {
      eyebrow: "Sites Institucionais",
      title: "Seu site precisa explicar o valor do negócio antes da reunião.",
      description:
        "Criamos sites institucionais para marcas que querem unir clareza, identidade forte e uma jornada mais convincente para contato.",
      bullets: [
        "Narrativa comercial bem organizada",
        "Estrutura pronta para novas páginas e cases",
        "SEO de base e experiência mobile desde o início",
      ],
    },
    overview: [
      "Site institucional é a base da presença digital de uma empresa. Ele precisa apresentar a marca com consistência, explicar a oferta e facilitar o próximo passo comercial.",
      "Nosso foco é construir uma experiência que combine estética, informação útil, performance e capacidade de evolução.",
    ],
    forWho: [
      "Empresas que precisam elevar o padrão da marca no digital.",
      "Escritórios, consultorias, negócios locais e operações B2B.",
      "Marcas que saíram do improviso e querem uma apresentação profissional de verdade.",
    ],
    problems: [
      "Site antigo que não representa a qualidade do negócio.",
      "Informações desorganizadas, difíceis de navegar ou com visual amador.",
      "Dificuldade para transmitir credibilidade e gerar contatos qualificados.",
    ],
    benefits: [
      "Marca apresentada com mais clareza, confiança e consistência.",
      "Estrutura pronta para SEO básico, portfólio e expansão futura.",
      "Melhor apoio para comercial, atendimento e posicionamento da empresa.",
    ],
    examples: [
      "Site institucional para escritório de advocacia.",
      "Site para empresa técnica ou consultoria especializada.",
      "Presença digital para negócio local com foco em contato.",
    ],
    faq: [
      {
        question: "O site institucional pode ter blog ou áreas futuras?",
        answer:
          "Sim. A V1 pode focar em apresentação e conversão, enquanto a estrutura já fica pronta para crescer sem refazer tudo.",
      },
      {
        question: "Vocês ajudam a organizar o conteúdo do site?",
        answer:
          "Sim. Ajudamos a transformar informações soltas em uma narrativa mais clara e convincente para o visitante.",
      },
      {
        question: "O projeto considera mobile e performance?",
        answer:
          "Sim. O site é pensado para funcionar bem em telas menores e com boa base de performance desde a implementação.",
      },
    ],
  },
  {
    slug: "sistemas-web",
    label: "Sistemas Web",
    shortLabel: "Sistemas Web",
    title: "Sistemas web para reduzir retrabalho e organizar processos reais.",
    description:
      "Desenvolvemos aplicações personalizadas para fluxos que já não cabem mais em planilhas, improvisos ou ferramentas genéricas.",
    highlight: "Menos ruído operacional, mais controle e mais aderência ao processo.",
    hero: {
      eyebrow: "Sistemas Web",
      title: "Quando a operação cresce, o sistema precisa acompanhar a lógica do negócio.",
      description:
        "Construímos sistemas web para centralizar processos, automatizar etapas e dar mais previsibilidade ao dia a dia da operação.",
      bullets: [
        "Fluxos modelados conforme a rotina do negócio",
        "Base preparada para novas integrações",
        "Interface clara para reduzir dependência operacional",
      ],
    },
    overview: [
      "Nem todo negócio precisa de um software complexo, mas muitos já precisam de algo melhor do que processos manuais espalhados em várias ferramentas.",
      "A WEBFORJA desenvolve sistemas com foco em aderência operacional, clareza de uso e arquitetura preparada para evolução.",
    ],
    forWho: [
      "Empresas que já sentem gargalos em processos manuais.",
      "Operações que precisam centralizar dados, tarefas ou acompanhamentos.",
      "Negócios que demandam regras específicas e não querem se adaptar a um sistema genérico.",
    ],
    problems: [
      "Retrabalho por falta de centralização e padronização.",
      "Planilhas, mensagens e ferramentas desconectadas entre si.",
      "Baixa visibilidade do andamento de pedidos, atendimentos ou rotinas internas.",
    ],
    benefits: [
      "Processos mais organizados e rastreáveis.",
      "Ferramenta desenhada para o que o negócio realmente precisa.",
      "Base técnica pronta para módulos, integrações e novas regras no futuro.",
    ],
    examples: [
      "Painel interno para atendimento e acompanhamento.",
      "Sistema para gestão de solicitações e fluxos específicos.",
      "Aplicação para operação comercial ou administrativa.",
    ],
    faq: [
      {
        question: "Vocês desenvolvem sistema totalmente personalizado?",
        answer:
          "Sim. O escopo é definido conforme o processo, as regras do negócio e o que precisa ser resolvido nesta fase do projeto.",
      },
      {
        question: "Dá para começar com uma versão enxuta?",
        answer:
          "Sim. Em muitos casos, faz mais sentido lançar uma primeira versão funcional e evoluir com base no uso real.",
      },
      {
        question: "É possível integrar com outras ferramentas depois?",
        answer:
          "Sim. A arquitetura já pode ser preparada para CRM, automações, dashboards e integrações específicas.",
      },
    ],
  },
  {
    slug: "automacoes",
    label: "Automações",
    shortLabel: "Automações",
    title: "Automações para ganhar tempo, reduzir falhas e dar previsibilidade ao fluxo.",
    description:
      "Automatizamos etapas repetitivas e conexões entre ferramentas para liberar o time do trabalho manual e dar mais consistência à operação.",
    highlight: "Automação com lógica de negócio, não só conexão por conectar.",
    hero: {
      eyebrow: "Automações",
      title: "Automatizar bem é desenhar um fluxo confiável para o negócio funcionar melhor.",
      description:
        "Criamos automações que conectam ferramentas, eliminam tarefas repetitivas e ajudam a operação a responder com mais velocidade e consistência.",
      bullets: [
        "Mapeamento do fluxo antes da automação",
        "Integrações planejadas para evitar retrabalho",
        "Base pronta para evoluir com CRM e novos canais",
      ],
    },
    overview: [
      "Automação não é só economia de tempo. Ela também melhora consistência, reduz falhas humanas e libera atenção do time para atividades mais importantes.",
      "Nosso trabalho parte do processo real, identifica gargalos e conecta as peças com pragmatismo.",
    ],
    forWho: [
      "Negócios que repetem tarefas em atendimento, vendas ou operação.",
      "Empresas que precisam integrar formulários, CRM, planilhas e notificações.",
      "Times enxutos que querem ganhar eficiência sem criar mais complexidade.",
    ],
    problems: [
      "Copiar e colar informações entre ferramentas todos os dias.",
      "Leads, demandas ou pedidos se perdendo no caminho.",
      "Dependência excessiva de processos manuais para tarefas previsíveis.",
    ],
    benefits: [
      "Mais velocidade e menos falha operacional.",
      "Fluxos mais previsíveis e fáceis de acompanhar.",
      "Estrutura pronta para crescer com novas integrações ou regras.",
    ],
    examples: [
      "Formulário que envia lead para webhook, CRM ou planilha.",
      "Notificações automáticas para equipe comercial ou atendimento.",
      "Rotinas conectando site, sistema interno e ferramentas externas.",
    ],
    faq: [
      {
        question: "Vocês automatizam processos já existentes?",
        answer:
          "Sim. Primeiro entendemos o fluxo atual, depois organizamos o que faz sentido automatizar nesta etapa.",
      },
      {
        question: "Automação serve só para grandes empresas?",
        answer:
          "Não. Negócios menores costumam ganhar muito com automações bem escolhidas porque o time costuma ser mais enxuto.",
      },
      {
        question: "É possível integrar com o site ou sistema depois?",
        answer:
          "Sim. As automações podem ser tratadas como uma camada complementar e evoluir junto com o restante da operação digital.",
      },
    ],
  },
];

export const homeProofPoints = [
  {
    title: "3 projetos reais já publicados",
    description: "Atlas Cálculos, Castro & Alves Advogados e Erick Davi Barbearia estão no ar.",
  },
  {
    title: "Portfólio com links oficiais",
    description: "Cada case leva para o projeto publicado, sem mockup vazio nem caso em preparação.",
  },
  {
    title: "Captação pronta para hoje",
    description: "O orçamento continua útil mesmo sem webhook, com fallback validado para WhatsApp.",
  },
];

export const homeClientFit = [
  "Escritórios e empresas que precisam transmitir autoridade com mais clareza.",
  "Negócios locais que querem transformar visita em contato ou agendamento.",
  "Operações que precisam de site, sistema ou automação sem depender de solução genérica.",
];

export const homeDifferentials = [
  {
    title: "Copy e estrutura pensadas para decisão",
    description:
      "O visitante entende rápido o que você faz, para quem faz e qual é o próximo passo para contratar.",
  },
  {
    title: "Design com função comercial",
    description:
      "A estética reforça confiança e valor percebido sem atrapalhar leitura, CTA ou navegação.",
  },
  {
    title: "Código pronto para crescer",
    description:
      "A base técnica já nasce organizada para evoluções, integrações e novas páginas sem refatoração desnecessária.",
  },
  {
    title: "Processo claro do briefing à entrega",
    description:
      "Escopo, proposta, desenvolvimento, revisão e publicação com comunicação objetiva ao longo do caminho.",
  },
];

export const caseStudies = [
  {
    id: "atlas-calculos",
    name: "Atlas Cálculos",
    sector: "Cálculos trabalhistas para advogados",
    service: "Site institucional",
    objective:
      "Apresentar a Atlas como suporte técnico em cálculos trabalhistas para advogados e escritórios, com comunicação clara e contato rápido.",
    solution:
      "Estrutura institucional com páginas por etapa do processo, narrativa técnica mais organizada e CTA direto para solicitar análise.",
    highlights: [
      "Frentes organizadas por etapa processual",
      "Comunicação técnica com leitura clara",
      "WhatsApp de análise em evidência",
    ],
    imageSrc: "/portfolio/atlas-calculos-hero.png",
    imageAlt: "Screenshot do site Atlas Cálculos",
    url: "https://www.atlascalculos.com.br/",
  },
  {
    id: "castro-e-alves",
    name: "Castro & Alves Advogados",
    sector: "Advocacia especializada",
    service: "Site institucional",
    objective:
      "Fortalecer a presença digital do escritório com uma apresentação mais confiável, clara e orientada a consulta.",
    solution:
      "Site institucional com áreas de atuação em destaque, apresentação do escritório, agendamento de consulta e calculadoras jurídicas.",
    highlights: [
      "Trabalhista, Previdenciário, Saúde e Isenção de IR",
      "Agendamento de consulta em destaque",
      "Calculadoras jurídicas na jornada",
    ],
    imageSrc: "/portfolio/castro-e-alves.png",
    imageAlt: "Screenshot do site Castro & Alves Advogados",
    url: "https://www.castroealvesadvogados.com.br/",
  },
  {
    id: "erick-davi-barbearia",
    name: "Erick Davi Barbearia",
    sector: "Barbearia premium em Itaquera",
    service: "Site + painel administrativo",
    objective:
      "Profissionalizar a presença da barbearia, facilitar o agendamento online e dar ao barbeiro controle real sobre agenda, reservas e pagamentos.",
    solution:
      "Site comercial com serviços, valores e reserva com sinal de R$ 15,00 integrado a um painel administrativo com login, indicadores financeiros, inserção manual de horários, bloqueio de agenda e acompanhamento completo das reservas.",
    highlights: [
      "Agendamento online com sinal",
      "Painel administrativo com agenda e reservas",
      "Indicadores financeiros e status de pagamento",
    ],
    imageSrc: "/portfolio/erick-davi-barbearia.png",
    imageAlt: "Screenshot do site Erick Davi Barbearia",
    url: "https://www.erickdavibarbearia.com.br/",
  },
] satisfies CaseStudy[];

export const processSteps = [
  {
    title: "Briefing",
    description:
      "Entendemos contexto, objetivo, prioridade e escopo inicial para construir a direção mais coerente para o projeto.",
  },
  {
    title: "Análise",
    description:
      "Organizamos referências, necessidades, prioridades e caminhos técnicos antes de transformar isso em proposta.",
  },
  {
    title: "Proposta",
    description:
      "Apresentamos o escopo recomendado, a estrutura do projeto e as condições comerciais de forma objetiva.",
  },
  {
    title: "Sinal",
    description:
      "Com a aprovação, reservamos a agenda e iniciamos o projeto conforme a combinação fechada.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construção da solução com foco em clareza, performance, consistência visual e aderência ao objetivo do negócio.",
  },
  {
    title: "Revisão",
    description:
      "Ajustes finos para lapidar conteúdo, interface e comportamento antes da publicação.",
  },
  {
    title: "Entrega",
    description:
      "Publicação, documentação essencial e orientação sobre o uso da solução conforme o projeto.",
  },
  {
    title: "Suporte opcional",
    description:
      "Depois da entrega, você pode seguir com autonomia ou contratar acompanhamento contínuo quando fizer sentido.",
  },
];

export const maintenanceChoices = [
  {
    title: "Entrega com autonomia",
    description:
      "Ideal para quem quer receber o projeto com organização, documentação essencial e liberdade para conduzir a próxima etapa internamente.",
  },
  {
    title: "Continuidade e manutenção",
    description:
      "Ideal para quem prefere manter a evolução com suporte, pequenos ajustes, acompanhamento técnico e uma relação de longo prazo.",
  },
];

export const generalFaq: FaqItem[] = [
  {
    question: "Como funciona o orçamento?",
    answer:
      "Cada orçamento é personalizado. Avaliamos contexto, escopo, objetivos e complexidade antes de propor a melhor estrutura para o projeto.",
  },
  {
    question: "Vocês fazem projetos personalizados?",
    answer:
      "Sim. O foco da WEBFORJA é construir soluções alinhadas ao negócio, sem empurrar pacote genérico como resposta para tudo.",
  },
  {
    question: "O site terá versão mobile?",
    answer:
      "Sim. Todos os projetos são pensados para funcionar bem em desktop e mobile, com atenção à leitura, navegação e performance.",
  },
  {
    question: "Vocês fazem manutenção?",
    answer:
      "Sim, como serviço complementar. Depois da entrega, você pode escolher entre seguir com autonomia ou manter acompanhamento contínuo.",
  },
  {
    question: "Eu posso pedir alterações?",
    answer:
      "Sim. O projeto prevê etapa de revisão e ajustes, e mudanças adicionais podem ser tratadas conforme o momento e o escopo.",
  },
  {
    question: "Vocês trabalham com sistemas personalizados?",
    answer:
      "Sim. Desenvolvemos sistemas web e fluxos digitais quando o processo do negócio pede algo além de um site institucional.",
  },
  {
    question: "Vocês registram domínio e hospedagem?",
    answer:
      "Podemos orientar a contratação e a melhor estrutura para o projeto. Em alguns casos, também apoiamos a configuração inicial.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "A proposta comercial apresenta as condições combinadas para o projeto, incluindo sinal para início e possibilidade de parcelamento com condições informadas ao cliente.",
  },
];

export const budgetProjectTypes = [
  {
    value: "landing-page",
    label: "Landing Page",
    description: "Página focada em campanha, captação ou oferta específica.",
  },
  {
    value: "site-institucional",
    label: "Site Institucional",
    description: "Presença digital profissional para apresentar marca, serviços e autoridade.",
  },
  {
    value: "sistema-web",
    label: "Sistema Web",
    description: "Aplicação personalizada para organizar processos, dados ou operação.",
  },
  {
    value: "automacao",
    label: "Automação",
    description: "Fluxo automatizado entre ferramentas, leads, atendimento ou operação.",
  },
  {
    value: "nao-sei",
    label: "Não sei ao certo",
    description: "Ajudamos a identificar qual formato faz mais sentido para o seu cenário.",
  },
];

export const budgetRanges = [
  { value: "nao-sei", label: "Ainda não sei" },
  { value: "ate-1000", label: "Até R$ 1.000" },
  { value: "1000-3000", label: "R$ 1.000 a R$ 3.000" },
  { value: "3000-8000", label: "R$ 3.000 a R$ 8.000" },
  { value: "acima-8000", label: "Acima de R$ 8.000" },
];

export const aboutManifesto = [
  "A WEBFORJA nasce para construir presença digital e soluções personalizadas com o cuidado de quem trata cada projeto como peça estratégica do negócio, não como produção em série.",
  "Nosso trabalho mistura clareza, funcionalidade e pragmatismo. O objetivo não é só entregar um site bonito, mas estruturar algo que comunique melhor, funcione com consistência e acompanhe o crescimento da operação.",
];

export const aboutPrinciples = [
  {
    title: "Personalização com critério",
    description:
      "Cada solução responde ao contexto do cliente, à maturidade do negócio e ao objetivo real do projeto.",
  },
  {
    title: "Clareza como valor",
    description:
      "Organizamos informação, estrutura e comunicação para que a experiência seja bonita, mas também fácil de entender e navegar.",
  },
  {
    title: "Funcionalidade que sustenta a estética",
    description:
      "Design, código, conteúdo e performance trabalham juntos para entregar uma experiência profissional de verdade.",
  },
  {
    title: "Resultado sem promessa vazia",
    description:
      "Falamos em direção, processo e eficiência, sem vender atalho ou prazo irreal para projeto personalizado.",
  },
];

export const budgetExpectations = [
  "O orçamento é personalizado conforme objetivo, escopo e complexidade do projeto.",
  "Não publicamos preço fechado de criação porque cada solução tem prioridades e exigências diferentes.",
  "O pagamento de sinal é tratado na proposta, e parcelamento pode ser avaliado com as condições informadas ao cliente.",
  "Se o webhook ainda não estiver conectado no lançamento, o envio continua com fallback para WhatsApp após a validação.",
];

export function getServiceBySlug(slug: ServicePageContent["slug"]) {
  return servicePages.find((service) => service.slug === slug);
}
