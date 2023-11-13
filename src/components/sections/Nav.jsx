import Link from 'next/link';
import React from 'react';

import ArrowDown from '../../../public/icons/arrow-down.svg';

const navLinks = [
    {
        id: 1,
        title: 'Seminare',
    },
    {
        id: 2,
        title: 'Coaching',
    },
    {
        id: 3,
        title: 'Geschäftskunden',
    },
    {
        id: 4,
        title: 'Produkte',
    },
    {
        id: 5,
        title: 'Blog',
    },
    {
        id: 6,
        title: 'Kontakt',
    },
];

export const Nav = () => {
    return (
        <nav className="hidden list-none items-center gap-8 xl:flex">
            {navLinks.map((link) => {
                return (
                    <li
                        key={link.id}
                        className="flex items-center gap-2 font-optima text-base uppercase text-white"
                    >
                        {link.title}{' '}
                        <ArrowDown className="h-4 w-4 stroke-white" />
                    </li>
                );
            })}
        </nav>
    );
};
