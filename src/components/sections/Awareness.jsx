import React from 'react';

import Presentation from '../../../public/icons/presentation.svg';

import AwarenessImage from '../../../public/images/awareness.jpg';

import Image from 'next/image';

export const Awareness = ({ data }) => {
    const { title, description, list, banner } = data;
    return (
        <section className="bg-green-950 px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-14">
                    <div className="order-2 flex flex-col gap-8 lg:order-1">
                        <div className="flex flex-col gap-6">
                            <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                                {title}
                            </h2>
                            <p className="max-w-3xl self-center text-center font-sans text-lg text-white">
                                {description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 self-center lg:flex-nowrap">
                            {list.map((item) => {
                                return (
                                    <button
                                        key={item.text}
                                        className="flex items-center justify-center gap-3 rounded-2xl border border-white border-opacity-10 px-4 py-3 text-white lg:px-6"
                                    >
                                        <Presentation />
                                        {item.text}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <Image
                        src={banner.image}
                        alt="Awareness"
                        className="order-1 cursor-pointer self-center rounded-4xl lg:order-2"
                    />
                </div>
            </div>
        </section>
    );
};
