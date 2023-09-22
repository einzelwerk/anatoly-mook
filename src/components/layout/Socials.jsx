import React from 'react';

import YTLogo from '@/assets/icons/header-yt.svg';
import InstaLogo from '@/assets/icons/header-insta.svg';
import FBLogo from '@/assets/icons/header-fb.svg';
import TikTokLogo from '@/assets/icons/header-tiktok.svg';
import LinkedInLogo from '@/assets/icons/header-linkedin.svg';

export const Socials = () => {
    return (
        <ul className="flex items-center gap-6">
            <li>
                <a>
                    <YTLogo />
                </a>
            </li>
            <li>
                <a>
                    <InstaLogo />
                </a>
            </li>
            <li>
                <a>
                    <FBLogo />
                </a>
            </li>
            <li>
                <a>
                    <TikTokLogo />
                </a>
            </li>
            <li>
                <a>
                    <LinkedInLogo />
                </a>
            </li>
        </ul>
    );
};
