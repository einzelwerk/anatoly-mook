import React from 'react';

import YTLogo from '../../../public/icons/links-yt.svg';
import InstaLogo from '../../../public/icons/links-insta.svg';
import FBLogo from '../../../public/icons/links-fb.svg';
import TikTokLogo from '../../../public/icons/links-tiktok.svg';
import LinkedInLogo from '../../../public/icons/links-linkedin.svg';

export const Links = ({ data }) => {
    const { title, list, description } = data;
    const socialIcons = {
        youtube: YTLogo,
        instagram: InstaLogo,
        facebook: FBLogo,
        tiktok: TikTokLogo,
        linkedIn: LinkedInLogo,
    };
    return (
        <section className="px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col items-center gap-8 lg:gap-12">
                    <div className="flex max-w-xs flex-col gap-6 text-center font-optima text-white">
                        <h2 className="self-stretch text-4xl lg:text-6xl">
                            {title}
                        </h2>
                        <h3 className="text-3xl">{description}</h3>
                    </div>
                    <ul className="flex w-full flex-col justify-center gap-3 self-center lg:flex-row lg:gap-6">
                        {list.map((item) => {
                            const Icon = socialIcons[item.titleIcon];
                            return (
                                <li
                                    key={item.title}
                                    className="group flex h-20 w-full cursor-pointer items-center justify-center gap-6 rounded-3xl bg-green-900 pb-6 pl-6 pr-6 pt-6 text-white transition-colors hover:bg-gradient-to-b hover:from-gradientLightStart hover:to-gradientLightEnd hover:text-green-950 lg:h-44 lg:w-60 lg:flex-col lg:justify-center lg:gap-8 lg:pt-12"
                                >
                                    <Icon className="order-2 fill-white transition-all group-hover:fill-black lg:order-1 lg:fill-gradientLightEnd" />
                                    <span className="order-1 text-center font-optima text-lg font-semibold lg:order-2">
                                        {item.title}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
