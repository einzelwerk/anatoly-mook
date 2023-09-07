import { getGlobals } from '@/api/getGlobals';
import { baseUrl } from '@/lib/baseUrl';
import React from 'react';
import { Logo } from '../ui/Logo';
import { Login } from '../ui/Login';

import client from '@/api/client';
import { Nav } from './Nav';
import { Socials } from './Socials';

export const Header = async () => {
    return (
        <header className="bg-green-950 px-4 py-4 lg:px-12 lg:py-6">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                        <Nav />
                    </div>
                    {/* <Socials /> */}
                </div>
            </div>
        </header>
    );
};
