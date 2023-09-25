import React from 'react';

import YTLogo from '../../../public/icons/links-yt.svg';
import InstaLogo from '../../../public/icons/links-insta.svg';
import FBLogo from '../../../public/icons/links-fb.svg';
import TikTokLogo from '../../../public/icons/links-tiktok.svg';
import LinkedInLogo from '../../../public/icons/links-linkedin.svg';

export const Links = () => {
    return (
        <section className="bg-green-950 px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-8 lg:gap-12">
                    <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                        Bleibe in Verbindung und genieße weitere Inhalte
                    </h2>
                    <ul className="flex w-full flex-col justify-center gap-3 self-center lg:flex-row lg:gap-6">
                        <li className="flex h-20 w-full cursor-pointer flex-row items-center justify-between gap-8 rounded-3xl bg-green-900 pb-6 pl-6 pr-6 pt-6 text-white transition-colors hover:bg-gradient-to-b hover:from-gradientLightStart hover:to-gradientLightEnd hover:text-green-950 lg:h-44 lg:w-60 lg:flex-col lg:justify-center lg:pt-12">
                            <YTLogo className="order-2 lg:order-1" />
                            <span className="order-1 text-center font-optima text-lg font-semibold lg:order-2">
                                Youtube
                            </span>
                        </li>
                        <li className="flex h-20 w-full cursor-pointer flex-row items-center justify-between gap-8 rounded-3xl bg-green-900 pb-6 pl-6 pr-6 pt-6 text-white transition-colors hover:bg-gradient-to-b hover:from-gradientLightStart hover:to-gradientLightEnd hover:text-green-950 lg:h-44 lg:w-60 lg:flex-col lg:justify-center lg:pt-12">
                            <InstaLogo className="order-2 lg:order-1" />
                            <span className="order-1 text-center font-optima text-lg font-semibold lg:order-2">
                                Instagram
                            </span>
                        </li>
                        <li className="flex h-20 w-full cursor-pointer flex-row items-center justify-between gap-8 rounded-3xl bg-green-900 pb-6 pl-6 pr-6 pt-6 text-white transition-colors hover:bg-gradient-to-b hover:from-gradientLightStart hover:to-gradientLightEnd hover:text-green-950 lg:h-44 lg:w-60 lg:flex-col lg:justify-center lg:pt-12">
                            <FBLogo className="order-2 lg:order-1" />
                            <span className="order-1 text-center font-optima text-lg font-semibold lg:order-2">
                                Facebook
                            </span>
                        </li>
                        <li className="flex h-20 w-full cursor-pointer flex-row items-center justify-between gap-8 rounded-3xl bg-green-900 pb-6 pl-6 pr-6 pt-6 text-white transition-colors hover:bg-gradient-to-b hover:from-gradientLightStart hover:to-gradientLightEnd hover:text-green-950 lg:h-44 lg:w-60 lg:flex-col lg:justify-center lg:pt-12">
                            <TikTokLogo className="order-2 lg:order-1" />
                            <span className="order-1 text-center font-optima text-lg font-semibold lg:order-2">
                                TikTok
                            </span>
                        </li>
                        <li className="flex h-20 w-full cursor-pointer flex-row items-center justify-between gap-8 rounded-3xl bg-green-900 pb-6 pl-6 pr-6 pt-6 text-white transition-colors hover:bg-gradient-to-b hover:from-gradientLightStart hover:to-gradientLightEnd hover:text-green-950 lg:h-44 lg:w-60 lg:flex-col lg:justify-center lg:pt-12">
                            <LinkedInLogo className="order-2 lg:order-1" />
                            <span className="order-1 text-center font-optima text-lg font-semibold lg:order-2">
                                LinkedIn
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
