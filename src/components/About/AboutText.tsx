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
                        Minha jornada no mundo da programação me permitiu dominar uma variedade de tecnologias e frameworks, permitindo-me criar
                        aplicativos web incríveis. Além disso, estou sempre buscando aprender e aprimorar minhas habilidades.
                    </p>
                )
            }
            <button className="btn" id="btn" onClick={toggleReadMore}>
                {showMore ? 'Ler menos' : 'Ler mais'}
            </button>
        </>
    )
}