import { AboutText } from "./AboutText";
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
                <p>
                   {dictionary.description.content}
                </p>
                <AboutText dictionary={dictionary}/>
            </div>
        </section>
    );
};