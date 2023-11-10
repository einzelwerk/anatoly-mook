import React from 'react';

import YTLogo from '@/assets/icons/header-yt.svg';
import InstaLogo from '@/assets/icons/header-insta.svg';
import FBLogo from '@/assets/icons/header-fb.svg';
import TikTokLogo from '@/assets/icons/header-tiktok.svg';
import LinkedInLogo from '@/assets/icons/header-linkedin.svg';

export const Socials = () => {
    return (
        <ul className="flex items-center gap-2">
            <li>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white ">
                    <YTLogo className="h-6 w-6" />
                </a>
            </li>
            <li>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white ">
                    <InstaLogo className="h-6 w-6" />
                </a>
            </li>
            <li>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white ">
                    <FBLogo className="h-6 w-6" />
                </a>
            </li>
            <li>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white ">
                    <TikTokLogo className="h-6 w-6" />
                </a>
            </li>
            <li>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white ">
                    <LinkedInLogo className="h-6 w-6" />
                </a>
            </li>
        </ul>
    );
};
