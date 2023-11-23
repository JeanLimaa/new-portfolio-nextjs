type TechKey = 'TailwindCss' | 'NextJs' | 'React' | 'MongoDB' | 'Javascript' | 'Typescript' | 'Bootstrap' | 'MaterialUI' | 'Css' | 'Html';

interface Project {
    title: string;
    image: string;
    href: string;
    description: string;
    hrefRepo: string;
    techs: TechKey[];
    disabledProjectUrl?: boolean;
  }

const allProjects: Project[] = [
    {
        title: 'ReactivePass',
        image: '/projects/reactivepass.png',
        href: 'https://reactivepass.vercel.app',
        description: 'ReactivePass é uma aplicação fullstack, trazendo um gerenciador de senhas e geração de senhas fortes.',
        hrefRepo: "https://github.com/JeanLimaa/reactivepass-gerador-de-senhas",
        techs: ['NextJs', 'React', 'MongoDB', 'TailwindCss', 'Javascript']
    },
    {
        title: 'Landing Page',
        image: '/projects/sulldepilaebronze.png',
        href: 'https://suldepillaebronze.vercel.app',
        description: 'Landing page desennvolvida para a empresa SullDepilla&Bronze. Ainda restando a escolha das imagens.',
        hrefRepo: "https://github.com/JeanLimaa/landing-page-suldepilabronze",
        techs: ['NextJs', 'React', 'Typescript', 'TailwindCss']
    },
    {
        title: 'Loja virtual',
        image: '/projects/loja-virtual.png',
        href: 'https://loja-ficticia-jeanlima.vercel.app',
        description: 'Esse projeto é uma loja ficticia de eletrônicos, desenvolvida em NextJS.',
        hrefRepo: "https://github.com/JeanLimaa/loja-virtual-ficticia-com-NextJS",
        techs: ['NextJs', 'React', 'Typescript', 'Bootstrap']
    },
    {
        title: 'Quantum Stock',
        image: '/projects/controle-de-estoque.png',
        href: 'https://controle-de-estoque-react-js.vercel.app',
        description: 'Este é um site para controle de estoque, é uma SPA e foi feita utilizando o ReactJS e react-router-dom.',
        hrefRepo: "https://github.com/JeanLimaa/controle-de-estoque-reactJS",
        techs: ['React', 'Javascript', 'Css']
    },
    {
        title: 'Meu portfolio',
        image: '/projects/portfolio.png',
        href: 'https://jeanlimaa.vercel.app',
        description: 'Esse mesmo portfolio. Pois ora, também é um projeto o qual me dediquei em fazê-lo e utilizei de algumas tecnologias.',
        hrefRepo: "https://github.com/JeanLimaa/new-portfolio-nextjs",
        techs: ['NextJs','React', 'Typescript', 'MaterialUI'],
        disabledProjectUrl: true
    },
    {
        title: 'Calculadora Javascript',
        image: '/projects/calculadora.png',
        href: 'https://calculadora-js-jeanlimaa.vercel.app',
        description: 'Uma Calculadora simples, a qual foi desenvolvida ainda enquanto eu aprendia os fundamentos do JS.',
        hrefRepo: "https://github.com/JeanLimaa/calculadora-js",
        techs: ['Javascript', 'Css', 'Html']
    },
    {
        title: 'Coleta Salvador',
        image: '/projects/coleta-salvador.png',
        href: 'https://coleta-salvador.vercel.app',
        description: 'Embora simples, foi desenvolvido para um trabalho academico, com o objetivo de mapear os pontos de coleta da cidade de Salvaldor..',
        hrefRepo: "https://github.com/JeanLimaa/coleta-salvador",
        techs: ['Javascript', 'Css', 'Html']
    },
]

export default allProjects;