'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

import HitsImage from '../../../public/images/hits1.jpg';

import ArrowRight from '../../../public/icons/arrow-right.svg';

import ArrowDown from '../../../public/icons/arrow-down.svg';
import { Navigation } from 'swiper/modules';

export const Hits = ({ data }) => {
    const { title, cards } = data;
    return (
        <section className="bg-green-950 py-14 pr-0 md:px-4 lg:px-24 lg:py-16">
            <div className="container pr-0 md:pr-4">
                <div className="flex flex-col gap-6 lg:gap-8">
                    <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                        {title}
                    </h2>
                    <div className="relative">
                        <Swiper
                            spaceBetween={17}
                            slidesPerView={1.1}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: '#left-swipe',
                                nextEl: '#right-swipe',
                            }}
                            breakpoints={{
                                750: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                            }}
                            className="mySwiper"
                        >
                            {cards.map((card) => {
                                const { title, description, textButton } = card;
                                return (
                                    <SwiperSlide
                                        key={title}
                                        className="max-w-[625px] gap-6 rounded-3xl bg-green-900 px-3 pb-6 pt-3 lg:gap-8 lg:pb-10"
                                    >
                                        <div className="flex flex-col gap-6 lg:gap-8">
                                            <Image
                                                src={HitsImage}
                                                alt="A hit"
                                                width={600}
                                                height={400}
                                                className="rounded-2xl"
                                            />
                                            <div className="flex flex-col gap-6 px-3 lg:gap-8 lg:px-6">
                                                <div className="flex flex-col gap-4">
                                                    <h3 className="font-optima text-2xl text-white lg:text-4xl">
                                                        {title}
                                                    </h3>
                                                    <ul className="flex flex-col gap-3">
                                                        {description.map(
                                                            (item, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="relative flex items-center gap-3 font-sans text-base text-white before:h-2 before:w-2 before:rounded-full before:bg-green-200 lg:text-lg"
                                                                >
                                                                    {item.text}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                                <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                                    {textButton}
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {cards.map((card) => {
                                const { title, description, textButton } = card;
                                return (
                                    <SwiperSlide
                                        key={title}
                                        className="max-w-[625px] gap-6 rounded-3xl bg-green-900 px-3 pb-6 pt-3 lg:gap-8 lg:pb-10"
                                    >
                                        <div className="flex flex-col gap-6 lg:gap-8">
                                            <Image
                                                src={HitsImage}
                                                alt="A hit"
                                                width={600}
                                                height={400}
                                                className="rounded-2xl"
                                            />
                                            <div className="flex flex-col gap-6 px-3 lg:gap-8 lg:px-6">
                                                <div className="flex flex-col gap-4">
                                                    <h3 className="font-optima text-2xl text-white lg:text-4xl">
                                                        {title}
                                                    </h3>
                                                    <ul className="flex flex-col gap-3">
                                                        {description.map(
                                                            (item, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="relative flex items-center gap-3 font-sans text-base text-white before:h-2 before:w-2 before:rounded-full before:bg-green-200 lg:text-lg"
                                                                >
                                                                    {item.text}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                                <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                                    {textButton}
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <LeftSwiperArrow />
                        <RightSwiperArrow />
                    </div>
                </div>
            </div>
        </section>
    );
};

const LeftSwiperArrow = () => {
    return (
        <button
            id="left-swipe"
            className="absolute bottom-0 left-0 top-0 z-10 mx-0 my-auto hidden h-14 w-14 -translate-x-24 items-center justify-center rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd lg:flex"
        >
            <ArrowDown className="h-5 w-5 rotate-90 stroke-black" />
        </button>
    );
};

const RightSwiperArrow = () => {
    return (
        <button
            id="right-swipe"
            className="absolute bottom-0 right-0 top-0 z-10 mx-0 my-auto hidden h-14 w-14 translate-x-24 items-center justify-center rounded-full  bg-gradient-to-b from-gradientLightStart to-gradientLightEnd lg:flex"
        >
            <ArrowDown className="h-5 w-5 -rotate-90 stroke-black" />
        </button>
    );
};
