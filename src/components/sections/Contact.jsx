'use client';

import React from 'react';

import Image from 'next/image';

import Select from 'react-select';

import EmailIconMobile from '../../../public/icons/email-icon.svg';
import PhoneIconMobile from '../../../public/icons/phone-icon.svg';
import WhatsappIconMobile from '../../../public/icons/whatsapp-icon.svg';
import EmailIcon from '../../../public/icons/email-icon-contact.svg';
import PhoneIcon from '../../../public/icons/phone-icon-contact.svg';
import WhatsappIcon from '../../../public/icons/whatsapp-icon-contact.svg';

import ArrowRight from '../../../public/icons/arrow-right.svg';

import ContactImage from '../../../public/images/contact-1.jpg';

export const Contact = ({ data }) => {
    const { title, image, text, list } = data;
    return (
        <section className="bg-green-950">
            <div className="bg-gradient-to-b from-gradientLightStart to-gradientLightEnd">
                <div className="container py-14 lg:py-32">
                    <div className="flex flex-col justify-center gap-6 lg:gap-8">
                        <h2 className="max-w-xs self-center font-optima text-4xl text-green-950 lg:max-w-3xl lg:text-center lg:text-6xl">
                            {title}
                        </h2>
                        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
                            <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-transparent pb-0 pl-0 pr-0 pt-0 lg:w-1/2 lg:gap-8 lg:bg-green-900 lg:pb-10 lg:pl-3 lg:pr-3 lg:pt-3">
                                <Image
                                    src={image}
                                    alt="A woman"
                                    className="rounded-3xl"
                                />
                                <div className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-5">
                                    <h4 className="w-full font-optima text-2xl text-green-950 lg:w-1/2 lg:text-xl lg:text-white">
                                        {text}
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-4">
                                            <PhoneIcon className="hidden lg:block" />
                                            <PhoneIconMobile className="block lg:hidden" />
                                            <a
                                                href="tel:+023033340628"
                                                className="text-center font-optima text-base font-medium text-green-950 lg:text-white"
                                            >
                                                0230 333 406 28
                                            </a>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <EmailIcon className="hidden lg:block" />
                                            <EmailIconMobile className="block lg:hidden" />
                                            <a
                                                href="mailto:mail@anatoly-mook.com"
                                                className="text-center font-optima text-base font-medium text-green-950 lg:text-white"
                                            >
                                                mail@anatoly-mook.com
                                            </a>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <WhatsappIcon className="hidden lg:block" />
                                            <WhatsappIconMobile className="block lg:hidden" />
                                            <a
                                                href="tel:+01772481920"
                                                className="text-center font-optima text-base font-medium text-green-950 lg:text-white"
                                            >
                                                0177 248 19 20
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-6 rounded-3xl bg-green-900 px-5 py-6 lg:w-1/2 lg:gap-10 lg:px-10 lg:py-10">
                                <h3 className="font-optima text-3xl text-white">
                                    Kontakt-Formular
                                </h3>
                                <div className="flex flex-col gap-4 lg:gap-6">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-optima text-xs font-medium text-white">
                                            Betreff-Auswahl *
                                        </p>
                                        <Select
                                            placeholder="Allgemeine Anfrage"
                                            className="font-optima text-base text-white"
                                            isSearchable={false}
                                            components={{
                                                IndicatorSeparator: () => null,
                                            }}
                                            styles={{
                                                control: (provided, state) => ({
                                                    ...provided,
                                                    borderRadius: 12,
                                                    backgroundColor:
                                                        'transparent',
                                                    padding: '11px 16px',
                                                    border: '1px solid #373833',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                                        <div className="flex w-full flex-col gap-2 lg:w-1/2">
                                            <p className="font-optima text-xs font-medium text-white">
                                                Name *
                                            </p>
                                            <input
                                                type="text"
                                                className="rounded-xl border border-green-800 bg-transparent p-4 font-optima text-base text-white text-opacity-50"
                                                placeholder="Max Mustermann"
                                            ></input>
                                        </div>
                                        <div className="flex w-full flex-col gap-2 lg:w-1/2">
                                            <p className="font-optima text-xs font-medium text-white">
                                                E-mail *
                                            </p>
                                            <input
                                                type="email"
                                                className="rounded-xl border border-green-800 bg-transparent p-4 font-optima text-base text-white text-opacity-50"
                                                placeholder="example@example.de"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-optima text-xs font-medium text-white">
                                            Nachricht
                                        </p>
                                        <textarea
                                            className="h-32 w-full resize-none rounded-xl border border-green-800 bg-transparent p-4 font-optima text-base text-white text-opacity-50"
                                            placeholder="Optional"
                                        ></textarea>
                                    </div>
                                    <div className="flex gap-3">
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 rounded-sm border border-green-800 bg-transparent"
                                        ></input>
                                        <p className="text-sm text-white">
                                            Mit der Verarbeitung meiner Daten
                                            entsprechend der
                                            Datenschutzerklärung bin ich mit dem
                                            Abschicken meiner Nachricht
                                            einverstanden.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                        Absenden
                                        <ArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
