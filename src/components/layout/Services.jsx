'use client';

import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import ArrowDown from '../../../public/icons/arrow-down.svg';
import ArrowRightWhite from '../../../public/icons/arrow-right-white.svg';

import AccordionBg from '../../../public/images/accordion-bg.jpg';
import Image from 'next/image';

export const Services = () => {
    return (
        <section className="gap-4 bg-green-950 px-4 py-14 lg:gap-8 lg:px-40 lg:py-32">
            <h2 className="self-stretch font-optima text-4xl text-white lg:text-6xl">
                Leistungen
            </h2>
            <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                <AccordionItem className="">
                    <AccordionItemHeading>
                        <AccordionItemButton className="group border-b border-green-800 py-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6 text-2xl lg:text-3xl">
                                    <h3 className="font-optima text-3xl text-white">
                                        Seminare
                                    </h3>
                                </div>
                                <ArrowDown className="pointer-events-none group-aria-expanded:hidden" />
                                <ArrowDown className="pointer-events-none hidden group-aria-expanded:block group-aria-expanded:rotate-180" />
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="pb-10">
                        <div className="flex flex-col gap-6 rounded-3xl bg-gradientLightEnd p-10 lg:flex-row lg:gap-16">
                            <Image
                                src={AccordionBg}
                                alt="An item"
                                width={620}
                                height={360}
                                className="cursor-pointer rounded-4xl"
                            />
                            <div className="flex flex-col gap-5 py-3 lg:gap-6">
                                <div className="flex flex-col gap-4">
                                    <h4 className="font-optima text-2xl text-green-950">
                                        Online-Kurse
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="font-sans text-lg text-green-950">
                                            Impuls Vorträge
                                        </li>
                                        <li className="font-sans text-lg text-green-950">
                                            Inspirierende Lehrkurse
                                        </li>
                                        <li className="font-sans text-lg text-green-950">
                                            Inspirierende Lehrkurse
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="font-optima text-2xl text-green-950">
                                        Live Events
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="font-sans text-lg text-green-950">
                                            Impuls Vorträge
                                        </li>
                                        <li className="font-sans text-lg text-green-950">
                                            Inspirierende Lehrkurse
                                        </li>
                                        <li className="font-sans text-lg text-green-950">
                                            Inspirierende Lehrkurse
                                        </li>
                                    </ul>
                                </div>
                                <button className="flex w-40 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd px-4 py-3 font-optima text-base font-normal text-white">
                                    Mehr erfahren
                                    <ArrowRightWhite />
                                </button>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </section>
    );
};
