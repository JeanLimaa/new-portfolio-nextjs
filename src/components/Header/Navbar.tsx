'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode, useState } from 'react';

import Cookies from 'js-cookie'

import { usePathname, useRouter } from 'next/navigation';

import { HeaderInterface } from "@/interfaces/i18n"

interface Props {
    children: ReactNode;
    dictionary : HeaderInterface;
}

export const Navbar = ({children, dictionary}: Props) => {
    const [openNav, setOpenNav] = useState(false);
    const path = usePathname();
    const router = useRouter();
    
    const langInPath = path.split("/")[1];
    const [language, setLanguage] = useState(langInPath); 

    const handleLanguageChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = ev.target.value;
        setLanguage(selectedLanguage);
        
        Cookies.set("language", selectedLanguage);

        router.push(selectedLanguage)
    };

    return (
        <>
            {!openNav ? (
                <MenuIcon id="menu-icon" onClick={() => setOpenNav(!openNav)} />
            ) : (
                <CloseIcon id="menu-icon" onClick={() => setOpenNav(!openNav)} />
            )}
            <nav className={"navbar " + (openNav && "active")}>
                <select name="language" id="language-select" onChange={handleLanguageChange} value={language}>
                    <option value="pt">{dictionary.languages.pt}</option>
                    <option value="en">{dictionary.languages.en}</option>
                </select>
                {children}
            </nav>
        </>
    );
};