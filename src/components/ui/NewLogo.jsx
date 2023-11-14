import Link from 'next/link';
import React from 'react';
import { getOptions } from '@/api/getOptions';
import Image from 'next/image';

export const NewLogo = async () => {
    const { logoHeader } = await getOptions();

    return (
        <Link href={'/'}>
            <Image
                src={logoHeader.url}
                alt={logoHeader.alt}
                width={logoHeader.width}
                height={logoHeader.height}
            />
        </Link>
    );
};
