import Typedjs from "./Typedjs"
import Image from "next/image"
import { ArrowDown } from "./ArrowDown"
import { HomeSectionInterface } from "@/interfaces/i18n"
interface HomeSectionProps {
    dictionary : HomeSectionInterface;
}

export const HomeSection = ({dictionary}: HomeSectionProps) => {
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
                <p>{dictionary.description}</p>
                <div className="social-media">
                    <a target="_blank" href="https://github.com/JeanLimaa"><Image width={20} height={100} src="/redes-sociais/github.svg" alt="github de jean" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/jeanlimaa/"><Image width={20} height={100} src="/redes-sociais/linkedin.svg" alt="linkedin de jean" /></a>
                    <a target="_blank" href="mailto:jeansantoslima17@gmail.com"><Image width={20} height={100} src="/redes-sociais/email.svg" alt="email de jean" /></a>
                </div>
                <a href={`/curriculo/${dictionary.cv.link}`} target="_blank" download={dictionary.cv.downloadName} className="btn" >
                    {dictionary.cv.content}
                </a>
            </div>
            <div className="home-img">
                <img src="/Jean-nobg.png" alt="Foto de Jean" />
            </div>
            <ArrowDown to="about" />
        </section>
    )
}