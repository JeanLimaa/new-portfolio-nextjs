import { AboutText } from "./AboutText";

export const AboutComponent = () => {

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="/Jean-nobg.png" alt="imagem de jean" />
            </div>
            <div className="about-content">
                <h2 className="heading">Sobre <span>Mim</span></h2>
                <h3>Desenvolvedor Fullstack Javascript</h3>
                <p>
                    Eu me chamo Jean Lima, sou do estado da Bahia e tenho 19 anos. Sou apaixonado por Computação e
                    atualmente estou cursando bacharelado em Ciências da Computação, curso o qual gosto muito e me interesso desde
                    a infância. Sou um desenvolvedor Fullstack Javascript, com ênfase no desenvolvimento front-end.
                </p>
                <AboutText />
            </div>
        </section>
    );
};