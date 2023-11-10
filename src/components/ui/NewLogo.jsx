import Link from 'next/link';
import React from 'react';
import LogoLarge from '../../../public/icons/logo-new-lg.svg';

export const NewLogo = async () => {
    // const { logo } = await getGlobals();

    return (
        <Link href={'/'}>
            <LogoLarge />
        </Link>
    );
};
