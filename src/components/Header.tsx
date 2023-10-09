'use client'

export const Header = () => {

    return (
        <header className="header">
            <a href="#" className="logo">Meu Portfolio</a>
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar">
                <a href=""></a>
                {/*<a href="index.html" style={{fontSize: "1.2rem"}}  className="contentFlagBr"><img src="./BR.svg" alt="PT-BR" /> PT-BR</a>
                <a href="indexEnglish.html" style={{fontSize: "1.2rem"}} id="active-flag"><img src="./US.svg" alt="EN-US" /> EN-US</a> */}
                <a href="#home" className={""}>Inicio</a>
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#portfolio">Projetos</a>
            </nav>
        </header>
    )
}