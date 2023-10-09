export const HomeSection = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Olá, esse sou eu!</h3>
                <h1>
                    <div className="glitch-wrapper">
                        <div className="glitch" data-text="Jean Lima">Jean Lima</div>
                    </div>
                </h1>
                <h3>E eu sou um <span className="multiple-text"></span></h3>
                <p>Olá, seja bem vindo ao meu Portfolio. Aqui você poderá conhecer um pouco mais sobre mim, e o que eu faço! Abaixo você irá encontrar meu Curriculo (PT-BR e EN-US) e minhas Redes Sociais para contato.</p>
                <div className="social-media">
                    <a target="_blank" href="https://github.com/JeanLimaa"><img src="/github.svg" alt="github de jean" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/jeanlimaa/"><img src="/linkedin.svg" alt="linkedin de jean" /></a>
                    <a target="_blank" href="mailto:jeansantoslima17@gmail.com"><img src="/email.svg" alt="email de jean" /></a>
                </div>
                <a href="/curriculo/CURRICULO PT-BR.pdf" target="_blank" download="CURRICULO PT-BR - JEAN" className="btn" >Download CV</a>
            </div>
            <div className="home-img">
                <img src="/Jean-removebg-preview.png" alt="Foto de Jean" />
            </div>
        </section>
    )
}