import { siteRuntimeConfig } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroHighlight = {
  label: string;
  description: string;
};

export type ServiceChooser = {
  whenToChoose: string;
  solves: string;
  bestFor: string;
};

export type ServiceAngle = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export type ServicePageContent = {
  slug: "landing-pages" | "sites-institucionais" | "sistemas-web" | "automacoes";
  label: string;
  shortLabel: string;
  cardTitle: string;
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
  chooser: ServiceChooser;
  angle: ServiceAngle;
  problems: string[];
  benefits: string[];
  examples: string[];
  faq: FaqItem[];
  cta: {
    title: string;
    description: string;
  };
};

export type CaseStudy = {
  id: string;
  name: string;
  sector: string;
  service: string;
  context: string;
  problem: string;
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
  heroHeadline: "Sites, landing pages, sistemas e automações para vender melhor.",
  heroSubheadline:
    "A WEBFORJA cria estruturas digitais para negócios que precisam explicar melhor o serviço, captar com mais clareza e organizar a operação.",
  heroHighlights: [
    {
      label: "O que fazemos",
      description: "Sites, landing pages, sistemas web e automações com lógica comercial e técnica.",
    },
    {
      label: "Para quem",
      description: "Empresas que precisam transmitir confiança, captar melhor e reduzir improviso.",
    },
    {
      label: "Como começa",
      description: "Briefing objetivo, escopo recomendado e continuidade pelo canal mais prático.",
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
    cardTitle: "Landing pages para campanhas e captação",
    title: "Landing pages com foco em clique virando contato.",
    description:
      "Páginas orientadas a campanha, oferta ou lançamento, com mensagem direta e menos distração.",
    highlight: "Oferta clara e CTA forte",
    hero: {
      eyebrow: "Landing Pages",
      title: "Quando a campanha pede resposta rápida, a página precisa converter sem rodeios.",
      description:
        "Criamos landing pages enxutas para tráfego pago, lançamentos e captação com foco no próximo passo.",
      bullets: [
        "Promessa clara acima da dobra",
        "Estrutura pensada para mobile e mídia",
        "CTA alinhado a lead, venda ou WhatsApp",
      ],
    },
    overview: [
      "Landing page faz sentido quando a pessoa precisa entender a oferta em segundos e agir sem dispersão.",
      "A estrutura nasce do objetivo da campanha, da origem do tráfego e da ação esperada depois do clique.",
    ],
    chooser: {
      whenToChoose: "Quando existe uma oferta, campanha ou lançamento com objetivo específico.",
      solves: "Reduz ruído, destaca a proposta e encurta o caminho até o contato.",
      bestFor: "Negócios que precisam captar, validar mensagem ou apoiar mídia paga.",
    },
    angle: {
      eyebrow: "Conversão",
      title: "O foco é tirar fricção entre o clique e a ação.",
      description:
        "A hierarquia prioriza promessa, prova e CTA sem transformar a página em um bloco longo de texto.",
      bullets: [
        "Headline e oferta alinhadas ao tráfego",
        "Blocos curtos com prova e objeções essenciais",
        "Estrutura pronta para testes e integrações",
      ],
    },
    problems: [
      "Campanha gera clique, mas o visitante não avança para contato.",
      "A oferta não fica clara e a página parece genérica.",
      "No mobile, a leitura trava e a atenção se perde rápido.",
    ],
    benefits: [
      "Mais clareza para a oferta principal.",
      "Jornada curta até lead, venda ou WhatsApp.",
      "Base pronta para mídia, ajustes e testes futuros.",
    ],
    examples: [
      "Captação de leads para tráfego pago.",
      "Página de lançamento de serviço ou produto.",
      "Oferta única para validar mensagem e conversão.",
    ],
    faq: [
      {
        question: "Landing page serve só para anúncios?",
        answer:
          "Não. Ela também funciona para lançamentos, links de bio, campanhas de e-mail e ofertas específicas.",
      },
      {
        question: "Vocês ajudam na estrutura de conversão?",
        answer: "Sim. Organizamos conteúdo, hierarquia, prova e chamadas para facilitar a decisão.",
      },
      {
        question: "Ela pode evoluir depois?",
        answer: "Sim. A base já fica pronta para ajustes de copy, integrações e testes.",
      },
    ],
    cta: {
      title: "Vamos estruturar uma landing page que faça a campanha avançar.",
      description: "Se o objetivo é captar melhor, o briefing ajuda a definir oferta, escopo e CTA.",
    },
  },
  {
    slug: "sites-institucionais",
    label: "Sites Institucionais",
    shortLabel: "Sites Institucionais",
    cardTitle: "Sites institucionais para autoridade e confiança",
    title: "Sites institucionais que explicam valor antes da reunião.",
    description:
      "Projetos para empresas que precisam se apresentar com mais confiança, clareza e leitura profissional.",
    highlight: "Autoridade sem parecer genérico",
    hero: {
      eyebrow: "Sites Institucionais",
      title: "Seu site institucional precisa vender confiança antes do primeiro contato.",
      description:
        "Criamos sites institucionais para marcas que precisam organizar a apresentação da empresa e facilitar a decisão do cliente.",
      bullets: [
        "Narrativa comercial bem distribuída",
        "Base pronta para novas páginas e cases",
        "SEO de base e mobile desde o início",
      ],
    },
    overview: [
      "Site institucional é a referência digital da marca. Ele precisa apresentar a empresa, mostrar maturidade e facilitar o contato.",
      "O foco é unir posicionamento, informação útil e estrutura técnica para o site continuar servindo ao comercial depois da publicação.",
    ],
    chooser: {
      whenToChoose: "Quando a empresa precisa se apresentar melhor, ganhar confiança e apoiar a venda consultiva.",
      solves: "Organiza a narrativa da marca e reduz a sensação de improviso na presença digital.",
      bestFor: "Escritórios, consultorias, empresas técnicas e negócios locais com operação mais madura.",
    },
    angle: {
      eyebrow: "Autoridade",
      title: "O site precisa responder quem é a empresa, o que entrega e por que confiar.",
      description:
        "A experiência combina clareza institucional, hierarquia de conteúdo e espaço para expansão futura.",
      bullets: [
        "Mensagem alinhada ao posicionamento da marca",
        "Páginas pensadas para serviços, cases e prova",
        "Estrutura estável para crescer sem refazer tudo",
      ],
    },
    problems: [
      "O site atual não representa a qualidade da empresa.",
      "O visitante se perde entre páginas, textos e serviços.",
      "A marca perde confiança antes mesmo da conversa comercial.",
    ],
    benefits: [
      "Apresentação mais profissional e convincente.",
      "Base pronta para SEO, portfólio e expansão.",
      "Melhor apoio para comercial, atendimento e marca.",
    ],
    examples: [
      "Site institucional para escritório de advocacia.",
      "Apresentação digital para consultoria ou empresa técnica.",
      "Site de negócio local com foco em contato qualificado.",
    ],
    faq: [
      {
        question: "O site pode crescer depois?",
        answer: "Sim. A V1 pode ser mais enxuta e a estrutura já fica pronta para novas páginas.",
      },
      {
        question: "Vocês ajudam a organizar o conteúdo?",
        answer: "Sim. Transformamos informações soltas em uma narrativa mais clara para o visitante.",
      },
      {
        question: "O projeto considera mobile e performance?",
        answer: "Sim. O site já nasce pensado para leitura e navegação consistentes em telas menores.",
      },
    ],
    cta: {
      title: "Vamos desenhar um site institucional à altura da sua marca.",
      description: "Se a empresa precisa se apresentar melhor, o briefing ajuda a definir a estrutura certa.",
    },
  },
  {
    slug: "sistemas-web",
    label: "Sistemas Web",
    shortLabel: "Sistemas Web",
    cardTitle: "Sistemas web para centralizar a operação",
    title: "Sistemas web para organizar processo, dados e evolução futura.",
    description:
      "Aplicações personalizadas para fluxos que não cabem mais em planilhas ou ferramentas desconectadas.",
    highlight: "Processo centralizado e escalável",
    hero: {
      eyebrow: "Sistemas Web",
      title: "Quando a operação cresce, planilha e improviso começam a cobrar caro.",
      description:
        "Desenvolvemos sistemas web para centralizar rotinas, reduzir retrabalho e dar visibilidade ao que acontece no dia a dia.",
      bullets: [
        "Fluxos modelados pela lógica do negócio",
        "Base preparada para módulos e integrações",
        "Interface clara para uso frequente",
      ],
    },
    overview: [
      "Um sistema web entra quando o problema deixa de ser só execução manual e passa a exigir regra, controle e histórico.",
      "O escopo começa pelo fluxo crítico e pode evoluir por etapas sem travar a operação.",
    ],
    chooser: {
      whenToChoose: "Quando existem regras, aprovações, acompanhamento ou dados que precisam ficar em um só lugar.",
      solves: "Centraliza processo e reduz dependência de planilhas, mensagens e controles paralelos.",
      bestFor: "Operações que precisam de aderência real ao processo e espaço para crescer.",
    },
    angle: {
      eyebrow: "Aderência ao negócio",
      title: "Sistema web não é automação isolada. É a base onde o processo passa a morar.",
      description:
        "A prioridade é refletir a rotina real do negócio, com estrutura preparada para novas regras e integrações.",
      bullets: [
        "MVP orientado ao gargalo principal",
        "Permissões, status e etapas definidas pelo fluxo",
        "Arquitetura pronta para evolução contínua",
      ],
    },
    problems: [
      "Retrabalho causado por controles espalhados.",
      "Baixa visibilidade do andamento das rotinas.",
      "Ferramentas genéricas que não acompanham a lógica do negócio.",
    ],
    benefits: [
      "Processos mais rastreáveis e organizados.",
      "Ferramenta feita para o fluxo real da operação.",
      "Base pronta para módulos, integrações e novas regras.",
    ],
    examples: [
      "Painel interno para atendimento e acompanhamento.",
      "Sistema para solicitações, aprovações e status.",
      "Aplicação sob medida para rotinas comerciais ou administrativas.",
    ],
    faq: [
      {
        question: "O sistema é totalmente personalizado?",
        answer: "Sim. O escopo é definido conforme o processo, as regras e a prioridade desta fase.",
      },
      {
        question: "Dá para começar enxuto?",
        answer: "Sim. Em muitos casos, a melhor escolha é lançar uma primeira versão funcional e evoluir depois.",
      },
      {
        question: "É possível integrar com outras ferramentas?",
        answer: "Sim. A arquitetura já pode nascer preparada para CRM, dashboards e integrações futuras.",
      },
    ],
    cta: {
      title: "Vamos transformar o gargalo do processo em um sistema útil.",
      description: "Se a operação já não cabe no improviso, o briefing ajuda a priorizar o que entra primeiro.",
    },
  },
  {
    slug: "automacoes",
    label: "Automações",
    shortLabel: "Automações",
    cardTitle: "Automações para ganhar velocidade e previsibilidade",
    title: "Automações para eliminar tarefas repetitivas e reduzir falhas.",
    description:
      "Fluxos conectando ferramentas, atendimento e operação para o time gastar menos energia com trabalho manual.",
    highlight: "Menos tarefa manual, mais previsibilidade",
    hero: {
      eyebrow: "Automações",
      title: "Se a rotina repete a mesma ação todo dia, isso já pode virar automação.",
      description:
        "Criamos automações para mover dados, acionar equipes e manter o fluxo andando sem depender de copiar e colar.",
      bullets: [
        "Mapeamento do processo antes da integração",
        "Regras claras para evitar falhas silenciosas",
        "Base pronta para CRM, notificações e novos canais",
      ],
    },
    overview: [
      "Automação resolve etapas previsíveis entre ferramentas. Ela não substitui um sistema completo quando o processo exige regra própria, histórico e interface dedicada.",
      "O trabalho começa pelo ganho imediato: menos repetição, menos atraso e menos perda no caminho.",
    ],
    chooser: {
      whenToChoose: "Quando o gargalo está em tarefas repetitivas, repasse de informações ou demora entre ferramentas.",
      solves: "Dá velocidade ao fluxo e reduz perda de lead, atraso e erro manual.",
      bestFor: "Times enxutos que querem integrar site, CRM, planilhas, notificações ou atendimento.",
    },
    angle: {
      eyebrow: "Velocidade operacional",
      title: "Automação é sobre fluxo confiável, não sobre empilhar ferramentas.",
      description:
        "A solução certa conecta etapas previsíveis e deixa claro onde o humano ainda precisa entrar.",
      bullets: [
        "Integrações com regra e destino definidos",
        "Notificações e repasses automáticos",
        "Fluxo preparado para novas conexões depois",
      ],
    },
    problems: [
      "Copiar e colar informações entre sistemas todos os dias.",
      "Leads, pedidos ou demandas se perdendo no fluxo.",
      "Dependência de tarefas manuais para rotinas previsíveis.",
    ],
    benefits: [
      "Mais velocidade na operação diária.",
      "Menos falha humana e menos retrabalho.",
      "Fluxo mais previsível e fácil de acompanhar.",
    ],
    examples: [
      "Formulário enviando lead para CRM e atendimento.",
      "Notificações automáticas para comercial ou operação.",
      "Rotinas conectando site, sistema interno e ferramentas externas.",
    ],
    faq: [
      {
        question: "Vocês automatizam processos que já existem?",
        answer: "Sim. Primeiro mapeamos o fluxo atual e automatizamos o que faz sentido nesta etapa.",
      },
      {
        question: "Automações servem só para empresas grandes?",
        answer: "Não. Times menores costumam ganhar muito quando deixam de repetir tarefas manuais.",
      },
      {
        question: "Ela pode evoluir junto com site ou sistema?",
        answer: "Sim. A automação pode funcionar como uma camada complementar e crescer com a operação.",
      },
    ],
    cta: {
      title: "Vamos automatizar o que hoje toma tempo demais do seu time.",
      description: "Se o fluxo já é previsível, o briefing ajuda a definir onde a automação gera mais impacto.",
    },
  },
];

export const homeClientFit = [
  "Empresas que precisam explicar melhor o serviço e passar confiança rápido.",
  "Negócios locais que querem transformar visita em contato ou agendamento.",
  "Operações em crescimento que precisam de site, sistema ou automação com critério.",
];

export const caseStudies = [
  {
    id: "atlas-calculos",
    name: "Atlas Cálculos",
    sector: "Cálculos trabalhistas para advocacia",
    service: "Site institucional",
    context:
      "Empresa técnica que precisava apresentar o serviço de forma clara para advogados e escritórios.",
    problem:
      "A proposta de valor era específica e precisava ser entendida rápido, sem excesso de texto nem ruído.",
    solution:
      "Estrutura institucional com etapas do serviço, linguagem objetiva e CTA direto para solicitar análise.",
    highlights: [
      "Etapas do serviço organizadas",
      "Linguagem clara para público jurídico",
      "Contato rápido via WhatsApp",
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
    context:
      "Escritório com áreas diferentes e necessidade de comunicar autoridade com leitura simples.",
    problem:
      "O visitante precisava achar área de atuação, entender o escritório e avançar para consulta sem se perder.",
    solution:
      "Site institucional com áreas em destaque, apresentação do escritório, agendamento e calculadoras jurídicas.",
    highlights: [
      "Áreas de atuação bem distribuídas",
      "Consulta em destaque",
      "Ferramentas jurídicas na jornada",
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
    context:
      "Barbearia premium que precisava profissionalizar a marca e organizar reservas.",
    problem:
      "Agenda, pagamentos e horários dependiam de controle manual e davam pouca autonomia ao negócio.",
    solution:
      "Site comercial com reservas e sinal, conectado a um painel administrativo com agenda, bloqueios e indicadores.",
    highlights: [
      "Reserva online com sinal",
      "Painel com agenda e bloqueios",
      "Indicadores financeiros e pagamentos",
    ],
    imageSrc: "/portfolio/erick-davi-barbearia.png",
    imageAlt: "Screenshot do site Erick Davi Barbearia",
    url: "https://www.erickdavibarbearia.com.br/",
  },
] satisfies CaseStudy[];

export const processSteps = [
  {
    title: "Briefing",
    description: "Contexto, objetivo e prioridade para definir a direção do projeto.",
  },
  {
    title: "Análise",
    description: "Organização de necessidades, referências e caminho técnico antes da proposta.",
  },
  {
    title: "Proposta",
    description: "Escopo recomendado, estrutura do projeto e condições comerciais.",
  },
  {
    title: "Sinal",
    description: "Com a aprovação, a agenda é reservada e o projeto entra em produção.",
  },
  {
    title: "Desenvolvimento",
    description: "Construção da solução com foco em clareza, performance e aderência ao objetivo.",
  },
  {
    title: "Revisão",
    description: "Ajustes finos antes da publicação.",
  },
  {
    title: "Entrega",
    description: "Publicação, orientação essencial e fechamento da etapa contratada.",
  },
  {
    title: "Suporte opcional",
    description: "Depois da entrega, o projeto pode seguir com autonomia ou continuidade.",
  },
];

export const generalFaq: FaqItem[] = [
  {
    question: "Como funciona o orçamento?",
    answer: "Cada proposta considera objetivo, escopo, prioridade e complexidade do projeto.",
  },
  {
    question: "Vocês fazem projetos personalizados?",
    answer: "Sim. A solução é definida conforme o cenário do negócio, não por pacote fixo.",
  },
  {
    question: "O site terá versão mobile?",
    answer: "Sim. Todos os projetos já são pensados para leitura, navegação e performance em mobile.",
  },
  {
    question: "Vocês fazem manutenção?",
    answer: "Sim, como continuidade opcional depois da entrega.",
  },
  {
    question: "Eu posso pedir alterações?",
    answer: "Sim. O projeto prevê revisão e ajustes adicionais podem ser tratados conforme o escopo.",
  },
  {
    question: "Vocês trabalham com sistemas personalizados?",
    answer: "Sim. Quando o processo pede algo além de um site, desenvolvemos sistemas web sob medida.",
  },
  {
    question: "Vocês ajudam com domínio e hospedagem?",
    answer: "Sim. Podemos orientar a contratação e apoiar a configuração inicial quando fizer sentido.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "As condições aparecem na proposta, incluindo sinal para início e parcelamento quando aplicável.",
  },
];

export const budgetFaq: FaqItem[] = [
  {
    question: "Como a proposta é definida?",
    answer: "Ela considera objetivo, escopo, prioridades e complexidade do projeto.",
  },
  {
    question: "Vocês trabalham com preço fechado de tabela?",
    answer: "Não. Landing pages, sites, sistemas web e automações têm escopos diferentes.",
  },
  {
    question: "Como funciona pagamento e sinal?",
    answer: "As condições aparecem na proposta, incluindo sinal para início e parcelamento quando aplicável.",
  },
  {
    question: "E se eu ainda não souber o formato?",
    answer: "Sem problema. Você pode marcar “não sei ao certo” e usamos o briefing para indicar a melhor direção.",
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
    description: "Presença digital profissional para marca, serviços e contato.",
  },
  {
    value: "sistema-web",
    label: "Sistema Web",
    description: "Aplicação para organizar processos, dados ou operação.",
  },
  {
    value: "automacao",
    label: "Automação",
    description: "Fluxo automatizado entre ferramentas, atendimento ou operação.",
  },
  {
    value: "nao-sei",
    label: "Não sei ao certo",
    description: "Usamos o briefing para indicar o formato mais adequado.",
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
  "A WEBFORJA cria projetos digitais sob medida para negócios que precisam vender melhor, parecer mais confiáveis ou operar com menos atrito.",
  "O trabalho combina direção comercial, design funcional e base técnica limpa para que cada entrega continue útil depois da publicação.",
];

export const aboutPrinciples = [
  {
    title: "Personalização com critério",
    description: "A solução responde ao contexto, à maturidade do negócio e ao objetivo real do projeto.",
  },
  {
    title: "Clareza na comunicação",
    description: "A informação é organizada para o visitante entender rápido e agir sem fricção.",
  },
  {
    title: "Design com função",
    description: "Estética, conteúdo e navegação trabalham juntos para sustentar a percepção de valor.",
  },
  {
    title: "Tecnologia pronta para crescer",
    description: "A base técnica já nasce preparada para ajustes, integrações e novas etapas.",
  },
];

export const aboutWorkingStyle = [
  "O briefing vira escopo real, não um texto genérico de proposta.",
  "Copy, layout e implementação são pensados como uma única experiência.",
  "Cada projeto é entregue para funcionar bem agora e evoluir sem retrabalho desnecessário.",
];

export const budgetExpectations = [
  "A proposta é personalizada conforme objetivo, escopo e complexidade.",
  "Se ainda houver dúvida sobre o formato, o briefing também ajuda a escolher a solução.",
  "Se o envio automático falhar, o contato pode continuar com as informações já preenchidas.",
];

export function getServiceBySlug(slug: ServicePageContent["slug"]) {
  return servicePages.find((service) => service.slug === slug);
}
