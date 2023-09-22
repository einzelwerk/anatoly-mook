'use client';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import Image from 'next/image';
import React from 'react';

import ArrowDownBlack from '../../../public/icons/arrow-down-black.svg';
import ArrowUpWhite from '../../../public/icons/arrow-up-white.svg';
import ArrowRight from '../../../public/icons/arrow-right.svg';

import BusinessPartnersImage from '../../../public/images/business-partners.jpg';

export const BusinessPartners = () => {
    return (
        <section className="bg-green-950">
            <div className="mx-6 flex flex-col gap-8 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-14 lg:gap-12 lg:px-36 lg:py-32">
                <h2 className="self-stretch font-optima text-6xl text-green-950">
                    Geschäftskunden
                </h2>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="w-1/2">
                        <Accordion
                            allowZeroExpanded={true}
                            allowMultipleExpanded={true}
                        >
                            <AccordionItem className="border-accordionBorder border-b">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="group">
                                        <div className="pb-10 pt-10 group-aria-expanded:mt-10 group-aria-expanded:rounded-t-3xl group-aria-expanded:border-0 group-aria-expanded:bg-green-900 group-aria-expanded:px-10">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-6 text-2xl lg:text-3xl">
                                                    <h3 className="font-optima text-3xl text-green-950 group-aria-expanded:text-white">
                                                        Seminare
                                                    </h3>
                                                </div>
                                                <ArrowDownBlack className="pointer-events-none group-aria-expanded:hidden" />
                                                <ArrowUpWhite className="pointer-events-none hidden group-aria-expanded:block" />
                                            </div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="pb-10">
                                    <div className="flex flex-col gap-6 rounded-b-3xl bg-green-900 pb-10 pl-10 pr-10 lg:flex-row lg:gap-16">
                                        <div className="flex flex-col gap-5 py-3 lg:gap-6">
                                            <div className="flex flex-col gap-4">
                                                <p className="self-stretch text-lg text-white">
                                                    Lerne wertvolle und
                                                    praxiserprobte
                                                    Coaching-Methoden, mit denen
                                                    du dich und andere in eure
                                                    volle Kraft bringst.
                                                </p>
                                                <h4 className="font-optima text-2xl text-white">
                                                    Online-Kurse
                                                </h4>
                                                <ul className="flex flex-col gap-3">
                                                    <li className="font-sans text-lg text-white">
                                                        Impuls Vorträge
                                                    </li>
                                                    <li className="font-sans text-lg text-white">
                                                        Inspirierende Lehrkurse
                                                    </li>
                                                    <li className="font-sans text-lg text-white">
                                                        Inspirierende Lehrkurse
                                                    </li>
                                                </ul>
                                            </div>
                                            <button className="flex w-40 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base font-normal text-green-950">
                                                Mehr erfahren
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src={BusinessPartnersImage}
                            alt="Partners"
                            width={624}
                            height={560}
                            className="rounded-2xl"
                        />
                        <div className="flex items-center justify-between self-stretch rounded-3xl bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd pb-4 pl-6 pr-4 pt-4">
                            <p className="w-72 font-optima text-xl text-white">
                                Keynote Vortrage, Coaching, Training, Seminare
                            </p>
                            <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                                <div className="h-12 w-12 rounded-full"></div>
                                <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                    Für Unternehmen
                                </p>
                            </button>
                        </div>
                        <div className="flex items-center justify-between self-stretch rounded-3xl bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd pb-4 pl-6 pr-4 pt-4">
                            <p className="w-72 font-optima text-xl text-white">
                                Broschüre für Geschäftskunden
                            </p>
                            <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                                <div className="h-12 w-12 rounded-full"></div>
                                <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                    Broschüre
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
