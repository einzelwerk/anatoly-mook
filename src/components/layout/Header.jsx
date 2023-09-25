import { getGlobals } from '@/api/getGlobals';
import { baseUrl } from '@/lib/baseUrl';
import React from 'react';
import { Logo } from '../ui/Logo';
import { Login } from '../ui/Login';

import client from '@/api/client';
import { Nav } from '@/components/sections/Nav';
import { Socials } from '@/components/sections/Socials';

import ArrowRight from '../../../public/icons/arrow-right.svg';
import BurgerMenu from '../../../public/icons/burger-menu.svg';

export const Header = async () => {
    return (
        <header className="bg-green-950 px-4 py-4 lg:px-12 lg:py-6">
            <div className="container">
                <HeaderDesktop />
                <HeaderMobile />
            </div>
        </header>
    );
};

const HeaderDesktop = () => {
    return (
        <div className="hidden items-center justify-between lg:flex">
            <div className="flex items-center">
                <Logo />
                <Nav />
            </div>
            <Socials />
        </div>
    );
};

const HeaderMobile = () => {
    return (
        <div className="flex items-center justify-between lg:hidden">
            <button className="flex h-10 w-12 items-center justify-center rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-3 py-2">
                <ArrowRight />
            </button>
            <Logo />
            <button className="flex h-10 w-12 items-center justify-center rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-3 py-2">
                <BurgerMenu />
            </button>
        </div>
    );
};
