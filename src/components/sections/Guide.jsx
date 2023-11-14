import Image from 'next/image';
import React from 'react';

import ArrowRight from '../../../public/icons/arrow-right.svg';

import GuideImage from '../../../public/images/guide.jpg';

export const Guide = ({ data }) => {
    const { title, subtitle, description, specialInfo, textButton, banner } =
        data;
    return (
        <section className="flex flex-col gap-14 px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                    <div className="order-2 flex flex-col gap-12 lg:order-1">
                        <div className="flex max-w-xl flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <h2 className="self-stretch font-optima text-4xl text-white lg:text-6xl">
                                    {title}
                                </h2>
                                <p className="self-stretch font-optima text-2xl font-normal text-white">
                                    {subtitle}
                                </p>
                            </div>
                            <div>
                                {description.map((item) => {
                                    return (
                                        <div key={item.text}>
                                            <p className="self-stretch font-sans text-base text-white">
                                                {item.text}
                                            </p>
                                            <br></br>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className=" flex flex-col gap-4 rounded-2xl border border-white border-opacity-10 p-5">
                                <h3 className="font-optima text-2xl text-white">
                                    Bereit für neue Impulse?
                                </h3>
                                <ul className="flex flex-col gap-3 text-base text-white">
                                    <li>
                                        Außergewöhnliche Fragen und neue
                                        Antworten 
                                    </li>
                                    <li>
                                        Unkonventionelle Vorgehensweisen und
                                        einzigartige Auswirkungen  
                                    </li>
                                    <li>
                                        Qualitativen Veränderungen und höchste
                                        Potenzialentfaltung  
                                    </li>
                                    <li>
                                        Transzendenz in ein Neues Bewusstsein 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                            {textButton}
                            <ArrowRight />
                        </button>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <Image
                            src={GuideImage}
                            alt="Inspiring guide"
                            className="rounded-3xl"
                        />
                        <button className="absolute bottom-8 left-8 flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                            <div className="h-16 w-12 rounded-full"></div>
                            <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                {banner.textButton}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
