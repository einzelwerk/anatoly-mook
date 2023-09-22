import Image from 'next/image';
import React from 'react';

import LogoLarge from '../../../public/icons/logo-lg.svg';
import EmailIcon from '../../../public/icons/email-icon.svg';
import PhoneIcon from '../../../public/icons/phone-icon.svg';
import WhatsappIcon from '../../../public/icons/whatsapp-icon.svg';

import YTLogo from '../../../public/icons/footer-yt.svg';
import InstaLogo from '../../../public/icons/footer-insta.svg';
import FBLogo from '../../../public/icons/footer-fb.svg';
import TikTokLogo from '../../../public/icons/footer-tiktok.svg';
import LinkedInLogo from '../../../public/icons/footer-linkedin.svg';

export const Footer = () => {
    return (
        <footer className="bg-green-950 px-4 pb-10 pt-14 lg:px-40 lg:pt-16">
            <div className="container">
                <div className="flex flex-col gap-12 lg:gap-32">
                    <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                        <div>
                            <LogoLarge />
                        </div>
                        <div className="flex flex-col gap-12 lg:flex-row lg:gap-6">
                            <div className="flex w-80 flex-col gap-6">
                                <h3 className="font-optima text-base text-gradientLightStart">
                                    Contact Us
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-center gap-4">
                                        <PhoneIcon />
                                        <a
                                            href="tel:+023033340628"
                                            className="text-center font-optima text-base font-medium text-white"
                                        >
                                            0230 333 406 28
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <EmailIcon />
                                        <a
                                            href="mailto:mail@anatoly-mook.com"
                                            className="text-center font-optima text-base font-medium text-white"
                                        >
                                            mail@anatoly-mook.com
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <WhatsappIcon />
                                        <a
                                            href="tel:+01772481920"
                                            className="text-center font-optima text-base font-medium text-white"
                                        >
                                            0177 248 19 20
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-80 flex-col gap-12 lg:justify-between">
                                <div className="flex flex-col gap-6">
                                    <h3 className="font-optima text-base text-gradientLightStart">
                                        Newsletter
                                    </h3>
                                    <input
                                        className="text-footerInput flex h-16 items-center rounded-xl border border-green-800 bg-transparent p-4"
                                        placeholder="example@example.de"
                                    ></input>
                                </div>
                                <div>
                                    <ul className="flex gap-2">
                                        <li>
                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                                                <YTLogo />
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                                                <InstaLogo />
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                                                <FBLogo />
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                                                <LinkedInLogo />
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                                                <TikTokLogo />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                        <p className="font-optima text-sm text-gradientLightStart text-opacity-50">
                            © Anatoly Mook 2023
                        </p>
                        <ul className="flex gap-6">
                            <li>
                                <a className="font-optima text-sm text-gradientLightStart">
                                    Datenschutz
                                </a>
                            </li>
                            <li>
                                <a className="font-optima text-sm text-gradientLightStart">
                                    Impressum
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
