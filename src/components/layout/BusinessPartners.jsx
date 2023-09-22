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
                <div className="container">
                    <h2 className="self-stretch font-optima text-4xl text-green-950 lg:text-6xl">
                        Geschäftskunden
                    </h2>
                    <div className="flex flex-col gap-6 lg:flex-row">
                        <div className="order-2 lg:order-1 lg:w-1/2">
                            <Accordion
                                allowZeroExpanded={true}
                                allowMultipleExpanded={true}
                                className=""
                            >
                                <AccordionItem className="border-accordionBorder border-b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="group">
                                            <div className="pl-5 pr-5 pt-4 group-aria-expanded:mt-10 group-aria-expanded:rounded-t-3xl group-aria-expanded:border-0 group-aria-expanded:bg-green-900 group-aria-expanded:px-10 lg:pb-10 lg:pt-10">
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
                                        <div className="flex flex-col gap-6 rounded-b-3xl bg-green-900 pb-5 pl-4 pr-4 lg:flex-row lg:gap-16 lg:pb-10 lg:pl-10 lg:pr-10">
                                            <div className="flex flex-col gap-5 py-3 lg:gap-6">
                                                <div className="flex flex-col gap-4">
                                                    <p className="self-stretch text-lg text-white">
                                                        Lerne wertvolle und
                                                        praxiserprobte
                                                        Coaching-Methoden, mit
                                                        denen du dich und andere
                                                        in eure volle Kraft
                                                        bringst.
                                                    </p>
                                                    <h4 className="font-optima text-2xl text-white">
                                                        Online-Kurse
                                                    </h4>
                                                    <ul className="flex flex-col gap-3">
                                                        <li className="font-sans text-lg text-white">
                                                            Impuls Vorträge
                                                        </li>
                                                        <li className="font-sans text-lg text-white">
                                                            Inspirierende
                                                            Lehrkurse
                                                        </li>
                                                        <li className="font-sans text-lg text-white">
                                                            Inspirierende
                                                            Lehrkurse
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
                        <div className="order-1 flex flex-col gap-3 lg:order-2">
                            <Image
                                src={BusinessPartnersImage}
                                alt="Partners"
                                width={624}
                                height={560}
                                className="rounded-2xl"
                            />
                            <div className="flex flex-col items-center justify-between gap-3 self-stretch rounded-3xl bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd pb-4 pl-4 pr-4 pt-4 lg:flex-row lg:gap-0 lg:pl-6">
                                <p className="w-64 self-start font-optima text-xl text-white lg:w-72">
                                    Keynote Vortrage, Coaching, Training,
                                    Seminare
                                </p>
                                <button className="flex w-56 items-center gap-4 self-start rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                                    <div className="h-16 w-12 rounded-full"></div>
                                    <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                        Für Unternehmen
                                    </p>
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-between gap-3 self-stretch rounded-3xl bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd pb-4 pl-4 pr-4 pt-4 lg:flex-row lg:gap-0 lg:pl-6">
                                <p className="w-64 self-start font-optima text-xl text-white lg:w-72">
                                    Broschüre für Geschäftskunden
                                </p>
                                <button className="flex w-56 items-center gap-4 self-start rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                                    <div className="h-16 w-12 rounded-full"></div>
                                    <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                        Broschüre
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
