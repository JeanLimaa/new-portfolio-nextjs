'use client'
import Cookies from "js-cookie";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HeaderInterface } from "@/interfaces/i18n.interface"
import { i18n, Locale } from "@/i18n-config";
import { i18nUrls } from "@/utils/i18n-utils";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Image from "next/image";

interface HeaderProps {
    dictionary: HeaderInterface;
}

export const ToggleLanguages = ({ dictionary }: HeaderProps) => {
    const path = usePathname();
    const router = useRouter();
    
    const langInPath: Locale = path.split("/")[1] as Locale;
    const [selectedLanguage, setSelectedLanguage] = useState<Locale>(langInPath);
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (selectedLanguage: Locale) => {
        setSelectedLanguage(selectedLanguage);
        Cookies.set("language", selectedLanguage);
        
        // quebra o path atual em partes
        const segments = path.split("/").filter(Boolean);

        // substitui o primeiro segmento (lang) pelo novo
        segments[0] = selectedLanguage;

        const newPath = "/" + segments.join("/");

        router.push(newPath);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const localesMapping = i18n.locales.filter(lang => lang !== selectedLanguage);
    return (
        <>
            <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    <Image
                        width="24"
                        height="24"
                        src={i18nUrls.images[selectedLanguage]}
                        alt={selectedLanguage}
                    />
                    <h4>{dictionary.languages[selectedLanguage]}</h4>
                    {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        {localesMapping.map((lang) => (
                            <li key={lang} onClick={() => handleLanguageChange(lang)}>
                                <Image
                                    width="24"
                                    height="24"
                                    src={i18nUrls.images[lang]}
                                    alt={lang}
                                />
                                <h3>{dictionary.languages[lang]}</h3>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
