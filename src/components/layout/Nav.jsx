import Link from 'next/link';
import React from 'react';

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
        <nav className="ml-16 hidden list-none items-center gap-8 xl:flex">
            {navLinks.map((link) => {
                return (
                    <li
                        key={link.id}
                        className="font-sans text-base text-white"
                    >
                        {link.title}
                    </li>
                );
            })}
        </nav>
    );
};
