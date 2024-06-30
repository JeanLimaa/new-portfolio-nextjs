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
                        disabledProject={project.disabledProjectUrl}
                        disabledRepo={project.disabledRepo}
                    >
                        {project.techs.map(techs => (
                            <TechImage key={techs} src={techsUrl[techs]} />
                        ))}
                    </Project>
                ))}
            </div>
        </section>
    )
}