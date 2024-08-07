'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode, useState } from 'react';

import { HeaderInterface } from "@/interfaces/i18n"

interface Props {
    children: ReactNode;
    dictionary : HeaderInterface;
}

export const Navbar = ({children, dictionary}: Props) => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            {!openNav ? (
                <MenuIcon id="menu-icon" onClick={() => setOpenNav(!openNav)} />
            ) : (
                <CloseIcon id="menu-icon" onClick={() => setOpenNav(!openNav)} />
            )}
            <nav className={"navbar " + (openNav && "active")}>
                {children}
            </nav>
        </>
    );
};