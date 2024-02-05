import Typedjs from "./Typedjs"
import Image from "next/image"
import { ArrowDown } from "./ArrowDown"

export const HomeSection = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Olá, me chamo</h3>
                <h1>
                    <div className="glitch-wrapper">
                        <div className="glitch" data-text="Jean Lima">Jean Lima</div>
                    </div>
                </h1>
                <h3>E eu sou <span className="multiple-text">{<Typedjs />}</span></h3>
                <p>Seja bem vindo ao meu Portfolio. E aqui você poderá conhecer um pouco mais sobre mim! Abaixo você irá encontrar meu Curriculo e minhas Redes Sociais.</p>
                <div className="social-media">
                    <a target="_blank" href="https://github.com/JeanLimaa"><Image width={20} height={100} src="/redes-sociais/github.svg" alt="github de jean" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/jeanlimaa/"><Image width={20} height={100} src="/redes-sociais/linkedin.svg" alt="linkedin de jean" /></a>
                    <a target="_blank" href="mailto:jeansantoslima17@gmail.com"><Image width={20} height={100} src="/redes-sociais/email.svg" alt="email de jean" /></a>
                </div>
                <a href="/curriculo/CURRICULO_PT-BR.pdf" target="_blank" download="CURRICULO PT-BR" className="btn" >Download CV</a>
            </div>
            <div className="home-img">
                <img src="/Jean-nobg.png" alt="Foto de Jean" />
            </div>
            <ArrowDown to="about" />
        </section>
    )
}