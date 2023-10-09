import { Project } from "./Project"
import { TechImage } from "./TechImage"

export const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Últimos <span>Projetos</span></h2>
            <div className="projects">
                <Project
                    title='ReactivePass'
                    image='/projects/reactivepass.png'
                    href='https://reactivepass.vercel.app'
                    description={'ReactivePass é uma aplicação fullstack, trazendo um gerenciador de senhas e geração de senhas fortes.'}
                    hrefRepo="https://github.com/JeanLimaa/reactivepass-gerador-de-senhas"
                >
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'} />
                    <TechImage src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} />
                </Project>
                <Project
                    title='Loja virtual'
                    image='/projects/loja-virtual.png'
                    href='https://loja-ficticia-jeanlima.vercel.app'
                    description={'Esse projeto é uma loja ficticia de eletrônicos, desenvolvida em NextJS.'}
                    hrefRepo="https://github.com/JeanLimaa/loja-virtual-ficticia-com-NextJS"
                >
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} />
                    <TechImage src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} />
                    <TechImage src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} />
                </Project>
                <Project
                    title='Quantum Stock'
                    image='/projects/controle-de-estoque.png'
                    href='https://controle-de-estoque-react-js.vercel.app'
                    description={'Este é um site para controle de estoque, é uma SPA e foi feita utilizando o ReactJS e react-router-dom.'}
                    hrefRepo="https://github.com/JeanLimaa/controle-de-estoque-reactJS"
                >
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} />
                </Project>
                <Project
                    title='Meu portfolio'
                    image='/projects/portfolio.png'
                    href='https://jeanlimaa.github.io'
                    description={'Esse mesmo portfolio. Pois ora, também é um projeto o qual utilizei de algumas tecnologias.'}
                    disabledProject={true}
                    hrefRepo="" //adicionar ao fazer deploy
                >
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} />
                    <TechImage src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} />
                    <TechImage src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"} />
                </Project>
                <Project
                    title='Calculadora Javascript'
                    image='/projects/calculadora.png'
                    href='https://calculadora-js-jeanlimaa.vercel.app'
                    description={'Uma Calculadora simples, a qual foi desenvolvida ainda enquanto eu aprendia os fundamentos do JS.'}
                    hrefRepo="https://github.com/JeanLimaa/calculadora-js"
                >
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} />
                </Project>
                <Project
                    title='Coleta Salvador'
                    image='/projects/coleta-salvador.png'
                    href='https://calculadora-js-jeanlimaa.vercel.app'
                    hrefRepo="https://github.com/JeanLimaa/coleta-salvador"
                    description={'Embora simples, foi desenvolvido para um trabalho academico, com o objetivo de mapear os pontos de coleta da cidade de Salvaldor.'}
                >
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} />
                    <TechImage src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} />
                </Project>
            </div>
        </section>
    )
}