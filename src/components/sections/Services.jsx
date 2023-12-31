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

export const Services = ({ data }) => {
    const { title, list } = data;

    return (
        <section className="gap-4 bg-green-950 px-4 py-14 lg:gap-8 lg:px-40 lg:py-32">
            <div className="container">
                <h2 className="self-stretch font-optima text-4xl text-white lg:text-6xl">
                    {title}
                </h2>
                <Accordion
                    allowZeroExpanded={true}
                    allowMultipleExpanded={true}
                >
                    {list.map((item) => {
                        return (
                            <AccordionItem key={item.title}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="group border-b border-green-800 py-10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-6 text-2xl lg:text-3xl">
                                                <h3 className="font-optima text-3xl text-white">
                                                    {item.title}
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
                                            {/* <ItemList data={item.description} /> */}
                                            {/* <ItemList data={item.description} /> */}
                                            <button className="flex w-40 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd px-4 py-3 font-optima text-base font-normal text-white">
                                                {item.textButton}
                                                <ArrowRightWhite />
                                            </button>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </section>
    );
};

export const ItemList = ({ data }) => {
    console.log(data);
    // const { title, list } = data;
    // return (
    //     <div className="flex flex-col gap-4">
    //         <h4 className="font-optima text-2xl text-green-950">{title}</h4>
    //         <ul className="flex flex-col gap-3">
    //             {list.map((listItem) => {
    //                 return (
    //                     <li
    //                         key={listItem.text}
    //                         className="font-sans text-lg text-green-950"
    //                     >
    //                         {listItem.text}
    //                     </li>
    //                 );
    //             })}
    //         </ul>
    //     </div>
    // );
};
