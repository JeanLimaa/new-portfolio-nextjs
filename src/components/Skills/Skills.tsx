'use client';
import { Skill } from "./Skill"
import { techsArray } from "@/utils/techs"
import { SelectCategorys } from "../SelectCategorys/Select"
import { useState } from "react";
import { CategorysType } from "@/utils/techs";
import { SkillsSectionInterface } from "@/interfaces/i18n";

interface SkillsSectionProps {
    dictionary : SkillsSectionInterface;
}

export const Skills = ({dictionary}: SkillsSectionProps) => {
    const [category, setCategory] = useState<CategorysType>('all');

  // Filtrar tecnologias com base na categoria selecionada
  const filteredTechs = category === 'all'
    ? techsArray
    : techsArray.filter(tech => tech.category.includes(category));
    
    return(
        <section className="skills" id="skills">
        <h2 className="heading">{dictionary.title[0]} <span>{dictionary.title[1]}</span></h2>
        <SelectCategorys category={category} setCategory={setCategory} />
        <div className="skills-container">
            {filteredTechs.map(item => (
            <Skill techName={item.name} src={item.url} key={item.name} />
            ))}
        </div>
    </section>
    )
}