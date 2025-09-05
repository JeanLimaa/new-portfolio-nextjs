import Typedjs from "./Typedjs"
import { ArrowDown } from "./ArrowDown"
import { HomeSectionInterface } from "@/interfaces/i18n.interface"
import { Contacts } from "./Contacts";
interface HomeSectionProps {
    dictionary : HomeSectionInterface;
    hideContactsInfo?: boolean;
}

export const HomeSection = ({dictionary, hideContactsInfo}: HomeSectionProps) => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>{dictionary.title}</h3>
                <h1>
                    <div className="glitch-wrapper">
                        <div className="glitch" data-text="Jean Lima">Jean Lima</div>
                    </div>
                </h1>
                <h3>{dictionary.whatIm} <span className="multiple-text">{<Typedjs dictionary={dictionary}/>}</span></h3>
                <p>{hideContactsInfo ? dictionary.safeContactsDescription : dictionary.description}</p>

                {!hideContactsInfo && <Contacts />}

                {!hideContactsInfo && <a href={`/curriculo/${dictionary.cv.link}`} target="_blank" download={dictionary.cv.downloadName} className="btn" >
                    {dictionary.cv.content}
                </a>}
            </div>
            <div className="home-img">
                <img src="/Jean-nobg.png" alt="Foto de Jean" />
            </div>
            <ArrowDown to="about" />
        </section>
    )
}