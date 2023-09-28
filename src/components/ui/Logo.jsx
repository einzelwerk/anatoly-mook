import { getGlobals } from '@/api/getGlobals';
import { baseUrl } from '@/lib/baseUrl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoLarge from '../../../public/icons/logo-lg.svg';

export const Logo = async () => {
    // const { logo } = await getGlobals();

    return (
        <Link href={'/'}>
            <LogoLarge />
        </Link>
    );
};
