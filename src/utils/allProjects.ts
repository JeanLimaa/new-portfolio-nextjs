import { Locale, i18n } from "@/i18n-config";

type TechKey = 'Nodejs' | 'TailwindCss' | 'NextJs' | 'Python' | 'OpenCV' | 'MediaPipe' | 'React' | 'MongoDB' | 'Javascript' | 'Typescript' | 'Bootstrap' | 'MaterialUI' | 'Css' | 'Html';

interface ProjectsInterface {
    title: {pt: string, en: string} | string; // caso nao precise de traudção, basta a string
    image: string;
    href: string;
    description: {pt: string, en: string};
    hrefRepo: string;
    techs: TechKey[];
    disabledProjectUrl?: boolean;
    disabledRepo?: boolean;
  }

const allProjects: ProjectsInterface[] = [
    {
        title: 'ReactivePass',
        image: '/projects/reactivepass.png',
        href: 'https://reactivepass.vercel.app',
        description: { 
            pt: 'ReactivePass é uma aplicação fullstack, trazendo um gerenciador de senhas e geração de senhas fortes.',
            en: 'ReactivePass is a fullstack application, offering a password manager and strong password generation.'
        },
        hrefRepo: "https://github.com/JeanLimaa/reactivepass-gerador-de-senhas",
        techs: ['NextJs', 'React', 'MongoDB', 'TailwindCss', 'Javascript']
    },
    {
        title: {pt: 'Loja virtual', en: 'Virtual Store'},
        image: '/projects/loja-virtual.png',
        href: 'https://loja-ficticia-jeanlima.vercel.app',
        description: { 
            pt: 'Esse projeto é uma loja fictícia de eletrônicos, desenvolvida em NextJS.',
            en: 'This project is a fictional electronics store, developed in NextJS.'
        },
        hrefRepo: "https://github.com/JeanLimaa/loja-virtual-ficticia-com-NextJS",
        techs: ['NextJs', 'React', 'Typescript', 'Bootstrap']
    },
    {
        title: {pt: 'Cotação LME', en: 'LME Quot'},
        image: '/projects/gbmintl.png',
        href: 'https://gbmintl.com/cotacao.html',
        description: {
            pt: 'Projeto freelancer, desenvolvi uma API que consome dados de cotação diária de outra API e alimenta um banco de dados. Além de toda a lógica no front-end.',
            en: 'Freelance project, I developed an API that consumes daily quotation data from another API and populates a database. Also responsible for all front-end logic.'
        },
        hrefRepo: "",
        techs: ['Nodejs', 'MongoDB', 'Javascript'],
        disabledRepo: true
    },
    {
        title: 'Landing Page',
        image: '/projects/sulldepilaebronze.png',
        href: 'https://suldepillaebronze.vercel.app',
        description: {
            pt: 'Landing page desenvolvida para a empresa SullDepilla&Bronze. Ainda restando a escolha das imagens.',
            en: 'Landing page developed for the company SullDepilla&Bronze. Image selection is still pending.'
        },
        hrefRepo: "https://github.com/JeanLimaa/landing-page-suldepilabronze",
        techs: ['NextJs', 'React', 'Typescript', 'TailwindCss']
    },
/*     {
        title: 'Dedos Levantados',
        image: '/projects/counter_fingers.png',
        href: '',
        description: 'Este aplicativo utiliza visão computacional para contar o número de dedos levantados em tempo real.',
        hrefRepo: "https://github.com/JeanLimaa/raised_fingers_counter",
        techs: ['Python', 'OpenCV', 'MediaPipe'],
        disabledProjectUrl: true
    }, */
    {
        title: 'Quantum Stock',
        image: '/projects/controle-de-estoque.png',
        href: 'https://controle-de-estoque-react-js.vercel.app',
        description: {
            pt: 'Este é um site para controle de estoque, é uma SPA e foi feita utilizando o ReactJS e react-router-dom.',
            en: 'This is a stock management site, it is a SPA and was built using ReactJS and react-router-dom.'
        },
        hrefRepo: "https://github.com/JeanLimaa/controle-de-estoque-reactJS",
        techs: ['React', 'Javascript', 'Css']
    },
    {
        title: {pt: 'Meu portfolio', en: 'My Portfolio'},
        image: '/projects/portfolio.png',
        href: 'https://jeanlimaa.vercel.app',
        description: {
            pt: 'Este mesmo portfolio. Código dísponivel no Github. :)',
            en: 'This same portfolio. The code is available in Github. :).'
        },
        hrefRepo: "https://github.com/JeanLimaa/new-portfolio-nextjs",
        techs: ['NextJs','React', 'Typescript', 'MaterialUI'],
        disabledProjectUrl: true
    },
/*     {
        title: 'Calculadora Javascript',
        image: '/projects/calculadora.png',
        href: 'https://calculadora-js-jeanlimaa.vercel.app',
        description: 'Uma Calculadora simples, a qual foi desenvolvida ainda enquanto eu aprendia os fundamentos do JS.',
        hrefRepo: "https://github.com/JeanLimaa/calculadora-js",
        techs: ['Javascript', 'Css', 'Html']
    }, */
/*     {
        title: 'Coleta Salvador',
        image: '/projects/coleta-salvador.png',
        href: 'https://coleta-salvador.vercel.app',
        description: 'Embora simples, foi desenvolvido para um trabalho academico, com o objetivo de mapear os pontos de coleta da cidade de Salvaldor..',
        hrefRepo: "https://github.com/JeanLimaa/coleta-salvador",
        techs: ['Javascript', 'Css', 'Html']
    }, */
]

export default allProjects;