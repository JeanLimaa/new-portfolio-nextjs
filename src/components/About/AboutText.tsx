'use client'
import { AboutSectionInterface } from '@/interfaces/i18n';
import React, { useState } from 'react';

interface AboutSectionProps {
    dictionary : AboutSectionInterface;
}

export const AboutText = ({dictionary}: AboutSectionProps) => {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            {
                showMore && (
                    <p>
                        {dictionary.description.showMore}
                    </p>
                )
            }
            <button className="btn" id="btn" onClick={toggleReadMore}>
                {showMore ? 'Ler menos' : 'Ler mais'}
            </button>
        </>
    )
}