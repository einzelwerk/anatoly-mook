'use client';

import React from 'react';

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

import HitsImage from '../../../public/images/hits1.jpg';

import ArrowRight from '../../../public/icons/arrow-right.svg';

export const Hits = ({ data }) => {
    const { title, cards } = data;

    return (
        <section className="bg-green-950 px-4 py-14 lg:px-24 lg:py-16">
            <div className="container">
                <div className="flex flex-col gap-6 lg:gap-8">
                    <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                        {title}
                    </h2>
                    <div>
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={2}
                            modules={[Navigation]}
                            navigation={true}
                            breakpoints={{
                                360: {
                                    navigation: false,
                                },
                                1024: {
                                    navigation: true,
                                },
                            }}
                            className="mySwiper"
                        >
                            {cards.map((card) => {
                                return (
                                    <SwiperSlide
                                        key={card.title}
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
                                                        {card.title}
                                                    </h3>
                                                    <ul className="flex flex-col gap-3">
                                                        <li className="font-sans text-base text-white lg:text-lg">
                                                            A coach plays a
                                                            pivotal role
                                                        </li>
                                                        <li className="font-sans text-base text-white lg:text-lg">
                                                            individuals or teams
                                                            towards their goals
                                                        </li>
                                                        <li className="font-sans text-base text-white lg:text-lg">
                                                            Insights,
                                                            constructive
                                                            feedback
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                                    {card.textButton}
                                                    <ArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};
