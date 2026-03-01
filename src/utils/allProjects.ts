import { TechKeys } from "./techs";

export type THrefRepo = string | {front?: string, back?: string, mobile?: string};
interface ProjectsInterface {
    title: {pt: string, en: string} | string; // caso nao precise de traudção, basta a string
    image: string;
    href: string;
    description: {pt: string, en: string};
    hrefRepo: THrefRepo;
    techs: TechKeys[];
    disabledProjectUrl?: boolean;
    disabledRepo?: boolean;
    appStoreUrl?: string;
    playStoreUrl?: string;
  }

const allProjects: ProjectsInterface[] = [
    {
        title: {pt: 'TimoraUp – Agendamentos de Serviços', en: 'TimoraUp – Scheduling Services'},
        image: '/projects/timoraup.png',
        disabledProjectUrl: false,
        href: 'https://timoraup.com',
        description: {
            pt: 'Meu projeto (pessoal) de maior orgulho. Uma plataforma SaaS robusta para gestão de agendamentos e pagamentos, com arquitetura multi-tenant, checkout transparente e aplicativos nativos para iOS e Android.',
            en: 'My flagship personal project. A robust full-stack SaaS platform for appointment and payment management, featuring multi-tenant architecture, transparent checkout integration, and native mobile apps for iOS and Android.'
        },
        hrefRepo: "",
        techs: ['NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'Sentry', 'Expo', 'React', 'NextJs', 'Typescript', 'TailwindCss'],
        appStoreUrl: 'https://apps.apple.com/app/timoraup-agendamentos-online/id6757621725',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.timoraup.app&pcampaignid',
    },
    {
        title: {pt: 'LME Quot – Sistema de Cotação de Metais', en: 'LME Quot – Metal Quotation System'},
        image: '/projects/gbmintl.png',
        href: 'https://gbmintl.com/cotacao.html',
        description: {
            pt: 'Desenvolvi uma API para consumir cotações diárias de metais e alimentar um banco de dados, além de criar a interface de usuário com lógica dinâmica.',
            en: 'Developed an API to fetch daily metal quotations and populate a database, also built the dynamic front-end user interface.'
        },
        hrefRepo: "",
        techs: ['Nodejs', 'MongoDB', 'Javascript'],
        disabledRepo: true
    },
    {
        title: {pt: 'ReactivePass – Gerenciador de Senhas Seguro', en: 'ReactivePass – Secure Password Manager'},
        image: '/projects/reactivepass.png',
        href: 'https://reactivepass.vercel.app',
        description: { 
            pt: 'ReactivePass é uma aplicação fullstack que oferece um gerenciador seguro de senhas e a geração de senhas fortes, com foco em usabilidade e proteção de dados.',
            en: 'ReactivePass is a fullstack application that offers a secure password manager and strong password generation, focusing on usability and data protection.'
        },
        hrefRepo: "https://github.com/JeanLimaa/reactivepass-gerador-de-senhas",
        techs: ['NextJs', 'React', 'MongoDB', 'TailwindCss', 'Javascript']
    },
    {
        title: {pt: 'Integração de API QUOD para Análise de Crédito', en: 'QUOD API Integration for Credit Analysis'},
        image: '/projects/analise-de-credito.jpg',
        disabledRepo: true,
        hrefRepo: "",   
        href: "https://wcheckbrasil.com.br/consultas-de-credito-e-localizacao/",
        description: { 
            pt: 'Desenvolvimento freelance envolvendo a integração da API QUOD para consultas de análise de crédito.',
            en: 'Freelance project integrating the QUOD API for credit analysis queries, including secure authentication and financial data processing.'
        },
        techs: ['NestJS', 'Nodejs', 'Typescript', 'Prisma', 'PostgreSQL', 'NextJs']
    },
    {
        title: {pt: 'eSenhas – Landing Page para Empresa de Senhas Digitais', en: 'eSenhas – Landing Page for Digital Password Company'},
        image: '/projects/esenhas.png',
        href: 'https://esenhas.com.br',
        description: { 
            pt: 'Projeto freelance, criação de landing page para a empresa eSenhas, destacando modernidade e responsividade com Next.js e TailwindCSS.',
            en: 'Landing page developed for eSenhas, showcasing modern design and responsiveness using Next.js and TailwindCSS.'
        },
        hrefRepo: "",
        disabledRepo: true,
        techs: ['NextJs', 'React', 'TailwindCss']
    },
    {
        title: 'SulDepilla&Bronze – Landing Page',
        image: '/projects/sulldepilaebronze.png',
        href: 'https://suldepillaebronze.vercel.app',
        description: {
            pt: 'Landing page para SulDepilla&Bronze, destacando serviços estéticos. Imagens e conteúdo ainda em ajustes.',
            en: 'Promotional landing page for SulDepilla&Bronze, highlighting aesthetic services. Image selection pending finalization.'
        },
        hrefRepo: "https://github.com/JeanLimaa/landing-page-suldepilabronze",
        techs: ['NextJs', 'React', 'Typescript', 'TailwindCss']
    },
    {
        title: {pt: 'Loja Virtual – Comércio Eletrônico Simulado', en: 'Virtual Store – Fictional E-Commerce'},
        image: '/projects/loja-virtual.png',
        href: 'https://loja-ficticia-jeanlima.vercel.app',
        description: { 
            pt: 'Loja fictícia de eletrônicos, criada com Next.js e simulação de funcionalidades típicas de e-commerce.',
            en: 'Fictional electronics store developed with Next.js, simulating typical e-commerce functionalities.'
        },
        hrefRepo: "https://github.com/JeanLimaa/loja-virtual-ficticia-com-NextJS",
        techs: ['NextJs', 'React', 'Typescript', 'Bootstrap']
    },
    {
        title: {pt: 'Quantum Stock – Controle de Estoque', en: 'Quantum Stock – Stock Management'},
        image: '/projects/controle-de-estoque.png',
        href: 'https://controle-de-estoque-react-js.vercel.app',
        description: {
            pt: 'Aplicação de gerenciamento de estoque desenvolvida como SPA, utilizando ReactJS e navegação com react-router-dom.',
            en: 'Stock management application built as a SPA using ReactJS and navigation with react-router-dom.'
        },
        hrefRepo: "https://github.com/JeanLimaa/controle-de-estoque-reactJS",
        techs: ['React', 'Javascript', 'Css']
    },
    {
        title: {pt: 'Meu Portfolio', en: 'My Portfolio'},
        image: '/projects/portfolio.png',
        href: 'https://jeanlimaa.vercel.app',
        description: {
            pt: 'Este é meu portfólio pessoal, com foco em performance e design responsivo. Código disponível no GitHub.',
            en: 'This is my personal portfolio, focusing on performance and responsive design. Code available on GitHub.'
        },
        hrefRepo: "https://github.com/JeanLimaa/new-portfolio-nextjs",
        techs: ['NextJs','React', 'Typescript', 'MaterialUI'],
        disabledProjectUrl: true
    },
];


export default allProjects;