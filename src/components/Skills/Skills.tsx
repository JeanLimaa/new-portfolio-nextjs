import { ArrowDown } from "../ArrowDown"
import { Skill } from "./Skill"
import { techsArray } from "@/utils/techs"

export const Skills = () => {
    return(
        <section className="skills" id="skills">
        <h2 className="heading">Habilidades em Desenvolvimento de <span>Software</span></h2>
        <div className="skills-container">
            {techsArray.map(item => (
                <Skill techName={item.name} src={item.url} />
            ))}
        </div>
        <ArrowDown />
    </section>
    )
}