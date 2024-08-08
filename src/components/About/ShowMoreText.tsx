'use client'
import { AboutSectionInterface } from '@/interfaces/i18n';
import React, { useState } from 'react';

interface AboutSectionProps {
    dictionary : AboutSectionInterface;
}

export const ShowMoreText = ({dictionary}: AboutSectionProps) => {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    const dictionaryShowMore = dictionary.description.showMore;
    return (
        <>
            {showMore && dictionaryShowMore.content.map((text, index) => (
                <p key={index}>{text}</p>
            ))}

            <button className="btn" id="btn" onClick={toggleReadMore}>
                {showMore ? dictionaryShowMore.readLess : dictionaryShowMore.readMore}
            </button>
        </>
    )
}