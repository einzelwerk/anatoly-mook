import Image from 'next/image';
import React from 'react';

import EmailIcon from '../../../public/icons/email-icon.svg';
import PhoneIcon from '../../../public/icons/phone-icon.svg';
import WhatsappIcon from '../../../public/icons/whatsapp-icon.svg';

import YTLogo from '../../../public/icons/footer-yt.svg';
import InstaLogo from '../../../public/icons/footer-insta.svg';
import FBLogo from '../../../public/icons/footer-fb.svg';
import TikTokLogo from '../../../public/icons/footer-tiktok.svg';
import LinkedInLogo from '../../../public/icons/footer-linkedin.svg';
import { getOptions } from '@/api/getOptions';

export const Footer = async () => {
    const socialIcons = {
        youtube: YTLogo,
        instagram: InstaLogo,
        facebook: FBLogo,
        tiktok: TikTokLogo,
        linkedin: LinkedInLogo,
    };

    const {
        listContactFooter,
        SocialFooter,
        titleContactFooter,
        logoFooter,
        textFooter,
        modal,
        titleNewsletterFooter,
    } = await getOptions();

    return (
        <footer className="px-4 pb-10 pt-14 lg:px-40 lg:pt-16">
            <div className="container">
                <div className="flex flex-col gap-12 lg:gap-32">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <Image
                                src={logoFooter}
                                alt="logo"
                                width={220}
                                height={32}
                            />
                        </div>
                        <div className="flex flex-col gap-12 lg:flex-row lg:gap-6">
                            <div className="flex w-80 flex-col items-center gap-6 lg:items-start">
                                <h3 className="font-optima text-base text-gradientLightStart">
                                    {titleContactFooter}
                                </h3>
                                <ul className="flex flex-col items-center gap-4 lg:items-start">
                                    {listContactFooter.map((item) => (
                                        <li
                                            key={item.title}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900">
                                                <Image
                                                    src={item.icon}
                                                    alt="icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                            <a
                                                href={item.link}
                                                className="text-center font-optima text-base font-medium text-white"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-80 flex-col gap-12 lg:justify-between">
                                <div className="flex flex-col items-center gap-6 lg:items-start">
                                    <h3 className="font-optima text-base text-gradientLightStart">
                                        {titleNewsletterFooter}
                                    </h3>
                                    <input
                                        className="flex h-16 w-full items-center rounded-xl border border-green-800 bg-transparent p-4 text-footerInput"
                                        placeholder="example@example.de"
                                    ></input>
                                </div>
                                <div>
                                    <ul className="flex justify-center gap-2 lg:justify-start">
                                        {SocialFooter.map((item) => {
                                            const Icon =
                                                socialIcons[item.title];
                                            return (
                                                <li key={item.title}>
                                                    <a href={item.link}>
                                                        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                                                            <Icon />
                                                        </button>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <p className="order-2 font-optima text-sm text-gradientLightStart text-opacity-50 lg:order-1 ">
                            {textFooter}
                        </p>
                        <ul className="flex gap-6 lg:order-2">
                            {modal.map((item) => (
                                <li key={item['data-modal']}>
                                    <a className="font-optima text-sm text-gradientLightStart">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
