type TechKey = 'MySQL' | 'NestJS' | 'PostgreSQL' | 'Prisma' | 'Nodejs' | 'TailwindCss' | 'NextJs' | 'Python' | 'OpenCV' | 'MediaPipe' | 'React' | 'MongoDB' | 'Javascript' | 'Typescript' | 'Bootstrap' | 'MaterialUI' | 'Css' | 'Html';

export type THrefRepo = string | {front?: string, back?: string, mobile?: string};
interface ProjectsInterface {
    title: {pt: string, en: string} | string; // caso nao precise de traudção, basta a string
    image: string;
    href: string;
    description: {pt: string, en: string};
    hrefRepo: THrefRepo;
    techs: TechKey[];
    disabledProjectUrl?: boolean;
    disabledRepo?: boolean;
  }

const allProjects: ProjectsInterface[] = [
    {
        title: 'ReactivePass – Gerenciador e Gerador de Senhas',
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
        title: 'Integração de API QUOD para Análise de Crédito',
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
        title: 'eSenhas – Página de Apresentação',
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
        title: 'SulDepilla&Bronze – Página Promocional',
        image: '/projects/sulldepilaebronze.png',
        href: 'https://suldepillaebronze.vercel.app',
        description: {
            pt: 'Landing page para SulDepilla&Bronze, destacando serviços estéticos. Imagens e conteúdo ainda em ajustes.',
            en: 'Promotional landing page for SulDepilla&Bronze, highlighting aesthetic services. Image selection pending finalization.'
        },
        hrefRepo: "https://github.com/JeanLimaa/landing-page-suldepilabronze",
        techs: ['NextJs', 'React', 'Typescript', 'TailwindCss']
    },
/*     {
        title: {pt: 'AgendeFacil – Micro-SaaS de Agendamentos', en: 'AgendeFacil – Micro-SaaS for Scheduling'},
        image: '/projects/agende-facil.png',
        disabledProjectUrl: true,
        href: '',
        description: {
            pt: 'Solução SaaS para agendamento de serviços, com funcionalidades personalizáveis e interface intuitiva, atualmente em desenvolvimento.',
            en: 'SaaS solution for service scheduling with customizable features and an intuitive interface, currently in development.'
        },
        hrefRepo: {
            front: "https://github.com/JeanLimaa/agende-facil-frontend", 
            back: "https://github.com/JeanLimaa/agende-facil-backend"
        },
        techs: ['NestJS', 'Prisma', 'MySQL','NextJs', 'React', 'Typescript', 'TailwindCss']
    }, */
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