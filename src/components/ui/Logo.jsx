import { getGlobals } from '@/api/getGlobals';
import { baseUrl } from '@/lib/baseUrl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Logo = async () => {
    // const { logo } = await getGlobals();

    return (
        <Link href={'/'}>
            {/* <Image
                src={baseUrl(logo)}
                width={128}
                height={48}
                alt="Anatoly Mook"
            /> */}
        </Link>
    );
};
