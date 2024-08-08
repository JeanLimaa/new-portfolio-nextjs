import { Project } from "./Project"
import { TechImage } from "./TechImage"
import { techsInfo } from "../../utils/techs"

import allProjects from "@/utils/allProjects"

import { PortfolioSectionInterface } from "@/interfaces/i18n"
import { Locale } from "@/i18n-config"
interface PortfolioSectionProps {
    lang: Locale;
    dictionary : PortfolioSectionInterface;
}
export const Portfolio = ({ lang, dictionary }: PortfolioSectionProps) => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">{dictionary.title.last} <span>{dictionary.title.projects}</span></h2>
            <div className="projects">
                {allProjects.map((project, index) => (
                    <Project
                        key={index}
                        title={typeof project.title === 'string' ? project.title : project.title[lang]}
                        image={project.image}
                        href={project.href}
                        description={typeof project.description === 'string' ? project.description : project.description[lang]}
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