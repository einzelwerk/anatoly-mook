'use client';
import Image from 'next/image';
import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import ArrowDown from '../../../public/icons/arrow-down.svg';

import FAQBg from '../../../public/images/faq-bg.jpg';

export const FAQ = ({ data }) => {
    const { title, list, titleSection, image } = data;
    return (
        <section className="flex flex-col gap-12 py-14 lg:py-32">
            <div className="relative flex h-80 flex-col justify-end gap-3 lg:h-auto lg:items-center lg:justify-center lg:gap-32">
                <div className="container flex flex-col gap-3 lg:items-center lg:gap-32">
                    <h2 className="z-10 font-optima text-6xl text-white lg:text-center">
                        {titleSection}
                    </h2>
                    <h2 className="z-10 max-w-xs font-optima text-2xl text-white lg:max-w-xl lg:text-center lg:text-6xl">
                        {title}
                    </h2>
                </div>
                {image ? (
                    <Image
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt="A background"
                        className="absolute -z-10 w-full rounded-5xl object-cover px-4"
                    />
                ) : (
                    <Image
                        src={FAQBg}
                        alt="A background"
                        className="absolute -z-10 h-full w-full rounded-5xl object-cover lg:top-24 lg:h-auto lg:px-4"
                    />
                )}
                <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-green-950 lg:hidden" />
            </div>
            <div className="container">
                <div className="flex flex-col justify-center gap-6 lg:gap-12">
                    <Accordion
                        allowZeroExpanded={true}
                        allowMultipleExpanded={true}
                        className="flex flex-col gap-2"
                    >
                        {list.map((item) => {
                            return (
                                <AccordionItem
                                    key={item.title}
                                    className="rounded-3xl bg-green-900 backdrop-blur"
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="group px-4 pb-4 pt-4 lg:px-10 lg:pb-10 lg:pt-10">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-6 text-2xl lg:text-3xl">
                                                    <h3 className="font-optima text-xl text-white lg:text-3xl">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <ArrowDown className="pointer-events-none h-12 w-12 group-aria-expanded:hidden" />
                                                <ArrowDown className="pointer-events-none hidden h-12 w-12 group-aria-expanded:block group-aria-expanded:rotate-180" />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="pb-10">
                                        <div className="flex flex-col gap-6 rounded-2xl bg-green-900 pl-4 pr-4 lg:flex-row lg:gap-16 lg:rounded-3xl lg:pl-10 lg:pr-10">
                                            <div className="flex flex-col gap-5 py-3 lg:gap-6">
                                                <p className="text-base text-white lg:w-3/4 lg:text-lg">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
