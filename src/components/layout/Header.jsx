import React from 'react';

import { Nav } from '@/components/sections/Nav';
import { Socials } from '@/components/sections/Socials';

import PaperPlane from '../../../public/icons/paper-plane.svg';
import BurgerMenu from '../../../public/icons/burger-menu.svg';
import { NewLogo } from '../ui/NewLogo';

export const Header = () => {
    return (
        <header className="px-4 py-4 lg:px-12 lg:py-8">
            <HeaderDesktop />
            <HeaderMobile />
        </header>
    );
};

const HeaderDesktop = () => {
    return (
        <div className="hidden items-center justify-between lg:flex">
            <div className="flex items-center gap-12">
                <NewLogo />
                <Nav />
            </div>
            <Socials />
        </div>
    );
};

const HeaderMobile = () => {
    return (
        <div className="flex items-center justify-between lg:hidden">
            <PaperPlane className="h-6 w-6" />
            <NewLogo />
            <BurgerMenu className="h-6 w-6 stroke-white" />
        </div>
    );
};
