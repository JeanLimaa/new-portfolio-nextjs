import { Project } from "./Project"
import { TechImage } from "./TechImage"
import { techsInfo } from "../../utils/techs"

import allProjects from "@/utils/allProjects"

import { PortfolioSectionInterface } from "@/interfaces/i18n"
interface PortfolioSectionProps {
    dictionary : PortfolioSectionInterface;
}
export const Portfolio = ({dictionary}: PortfolioSectionProps) => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">{dictionary.title.last} <span>{dictionary.title.projects}</span></h2>
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
                            <TechImage key={techs} src={techsInfo[techs].url} />
                        ))}
                    </Project>
                ))}
            </div>
        </section>
    )
}