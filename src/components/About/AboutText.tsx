'use client'
import React, { useState } from 'react';

export const AboutText = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            {
                showMore && (
                    <p>
                        Sou um desenvolvedor Fullstack Javascript, com ênfase no desenvolvimento front-end. Minha jornada
                        no mundo da programação me permitiu dominar uma variedade de tecnologias e frameworks, permitindo-me criar
                        aplicativos web incríveis.
                        <span>Além disso, sou um entusiasta autodidata que está sempre buscando aprender e aprimorar minhas habilidades.</span>
                    </p>
                )
            }
            <button className="btn" id="btn" onClick={toggleReadMore}>
                {showMore ? 'Ler menos' : 'Ler mais'}
            </button>
        </>
    )
}