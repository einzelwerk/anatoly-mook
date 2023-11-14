import React from 'react';

import YTLogo from '@/assets/icons/header-yt.svg';
import InstaLogo from '@/assets/icons/header-insta.svg';
import FBLogo from '@/assets/icons/header-fb.svg';
import TikTokLogo from '@/assets/icons/header-tiktok.svg';
import LinkedInLogo from '@/assets/icons/header-linkedin.svg';
import { getOptions } from '@/api/getOptions';

export const Socials = async () => {
    const socialIcons = {
        youtube: YTLogo,
        instagram: InstaLogo,
        facebook: FBLogo,
        tiktok: TikTokLogo,
        linkedin: LinkedInLogo,
    };

    const { socialHeader } = await getOptions();
    return (
        <ul className="flex items-center gap-2">
            {socialHeader.map((item) => {
                const Icon = socialIcons[item.title];
                return (
                    <li key={item.title}>
                        <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white ">
                            <Icon className="h-6 w-6" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
