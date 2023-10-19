'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode, useState } from 'react';

export const Navbar = ({children}: {children: ReactNode}) => {
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