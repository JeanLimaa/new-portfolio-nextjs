import { ShowMoreText } from "./ShowMoreText";
import { AboutSectionInterface } from "@/interfaces/i18n"
interface AboutSectionProps {
    dictionary : AboutSectionInterface;
}

export const AboutComponent = ({dictionary}: AboutSectionProps) => {

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="/Jean-nobg.png" alt="imagem de jean" />
            </div>
            <div className="about-content">
                <h2 className="heading">{dictionary.title.about} <span>{dictionary.title.me}</span></h2>
                <h3>{dictionary.subTitle}</h3>

                {dictionary.description.content.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                
                <ShowMoreText dictionary={dictionary}/>
            </div>
        </section>
    );
};