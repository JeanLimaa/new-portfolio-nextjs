import { Project } from "./Project"
import { TechImage } from "./TechImage"
import { techsUrl } from "../../utils/techs"

import allProjects from "@/utils/allProjects"

export const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Últimos <span>Projetos</span></h2>
            <div className="projects">
                {allProjects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        href={project.href}
                        description={project.description}
                        hrefRepo={project.hrefRepo}
                        disabledProject={project.disabledProject}
                    >
                        {project.techs.map(techs => (
                            <TechImage key={techs} src={techsUrl[techs]} />
                        ))}
                    </Project>
                ))}
                {/*             {allProjects.map((project, index) => {
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        href={project.href}
                        description={project.description}
                        hrefRepo={project.hrefRepo}
                    >
                        <TechImage src={techsUrl.NextJs} />
                        <TechImage src={techsUrl.React} />
                        <TechImage src={techsUrl.MongoDB} />
                        <TechImage src={techsUrl.TailwindCss} />
                        <TechImage src={techsUrl.Javascript} />
                    </Project> 
            })} */}

                {/*                 <Project
                    title='ReactivePass'
                    image='/projects/reactivepass.png'
                    href='https://reactivepass.vercel.app'
                    description={'ReactivePass é uma aplicação fullstack, trazendo um gerenciador de senhas e geração de senhas fortes.'}
                    hrefRepo="https://github.com/JeanLimaa/reactivepass-gerador-de-senhas"
                >
                    <TechImage src={techsUrl.NextJs} />
                    <TechImage src={techsUrl.React} />
                    <TechImage src={techsUrl.MongoDB} />
                    <TechImage src={techsUrl.TailwindCss} />
                    <TechImage src={techsUrl.Javascript} />
                </Project> */}
                {/*  <Project
                    title='Landing Page - SulDepilla&Bronze'
                    image='/projects/reactivepass.png'
                    href=''
                    description={'Uma landing page criada para a empresa SulDepilla&Bronze.'}
                    hrefRepo="https://github.com/JeanLimaa/landing-page-suldepilabronze"
                >
                    <TechImage src={techsUrl.NextJs} />
                    <TechImage src={techsUrl.React} />
                    <TechImage src={techsUrl.Typescript} />
                    <TechImage src={techsUrl.TailwindCss} />
                    <TechImage src={techsUrl.MaterialUI} />
                </Project> */}
                {/*                 <Project
                    title='Loja virtual'
                    image='/projects/loja-virtual.png'
                    href='https://loja-ficticia-jeanlima.vercel.app'
                    description={'Esse projeto é uma loja ficticia de eletrônicos, desenvolvida em NextJS.'}
                    hrefRepo="https://github.com/JeanLimaa/loja-virtual-ficticia-com-NextJS"
                >
                    <TechImage src={techsUrl.NextJs} />
                    <TechImage src={techsUrl.React} />
                    <TechImage src={techsUrl.Typescript} />
                    <TechImage src={techsUrl.Bootstrap} />
                </Project>
                <Project
                    title='Quantum Stock'
                    image='/projects/controle-de-estoque.png'
                    href='https://controle-de-estoque-react-js.vercel.app'
                    description={'Este é um site para controle de estoque, é uma SPA e foi feita utilizando o ReactJS e react-router-dom.'}
                    hrefRepo="https://github.com/JeanLimaa/controle-de-estoque-reactJS"
                >
                    <TechImage src={techsUrl.React} />
                    <TechImage src={techsUrl.Javascript} />
                    <TechImage src={techsUrl.Css} />
                </Project>
                <Project
                    title='Meu portfolio'
                    image='/projects/portfolio.png'
                    href='https://jeanlimaa.github.io'
                    description={'Esse mesmo portfolio. Pois ora, também é um projeto o qual utilizei de algumas tecnologias.'}
                    disabledProject={true}
                    hrefRepo="" //adicionar ao fazer deploy
                >
                    <TechImage src={techsUrl.NextJs} />
                    <TechImage src={techsUrl.React} />
                    <TechImage src={techsUrl.Typescript} />
                    <TechImage src={techsUrl.MaterialUI} />
                </Project>
                <Project
                    title='Calculadora Javascript'
                    image='/projects/calculadora.png'
                    href='https://calculadora-js-jeanlimaa.vercel.app'
                    description={'Uma Calculadora simples, a qual foi desenvolvida ainda enquanto eu aprendia os fundamentos do JS.'}
                    hrefRepo="https://github.com/JeanLimaa/calculadora-js"
                >
                    <TechImage src={techsUrl.Javascript} />
                    <TechImage src={techsUrl.Css} />
                    <TechImage src={techsUrl.Html} />
                </Project>
                <Project
                    title='Coleta Salvador'
                    image='/projects/coleta-salvador.png'
                    href='https://calculadora-js-jeanlimaa.vercel.app'
                    hrefRepo="https://github.com/JeanLimaa/coleta-salvador"
                    description={'Embora simples, foi desenvolvido para um trabalho academico, com o objetivo de mapear os pontos de coleta da cidade de Salvaldor.'}
                >
                    <TechImage src={techsUrl.Javascript} />
                    <TechImage src={techsUrl.Css} />
                    <TechImage src={techsUrl.Html} />
                </Project> */}
            </div>
        </section>
    )
}