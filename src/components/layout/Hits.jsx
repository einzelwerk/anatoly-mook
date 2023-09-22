'use client';

import React from 'react';

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

import HitsImage from '../../../public/images/hits1.jpg';

import ArrowRight from '../../../public/icons/arrow-right.svg';

export const Hits = () => {
    return (
        <section className="flex flex-col gap-12 bg-green-950 px-4 py-14 lg:px-24 lg:py-16">
            <h2 className="self-stretch text-center font-optima text-6xl text-white">
                Neuheiten
            </h2>
            <div>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1.5}
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide className="flex max-w-[625px] flex-col gap-8 rounded-3xl bg-green-900 px-3 pb-10 pt-3">
                        <Image
                            src={HitsImage}
                            alt="A hit"
                            width={600}
                            height={400}
                            className="rounded-2xl"
                        />
                        <div className="flex flex-col gap-12 px-6">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-optima text-4xl text-white">
                                    Neues Event
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="font-sans text-lg text-white">
                                        A coach plays a pivotal role
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        individuals or teams towards their goals
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        Insights, constructive feedback
                                    </li>
                                </ul>
                            </div>
                            <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                Mitwirken
                                <ArrowRight />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex max-w-[625px] flex-col gap-8 rounded-3xl bg-green-900 px-3 pb-10 pt-3">
                        <Image
                            src={HitsImage}
                            alt="A hit"
                            width={600}
                            height={400}
                            className="rounded-2xl"
                        />
                        <div className="flex flex-col gap-12 px-6">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-optima text-4xl text-white">
                                    Neues Event
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="font-sans text-lg text-white">
                                        A coach plays a pivotal role
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        individuals or teams towards their goals
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        Insights, constructive feedback
                                    </li>
                                </ul>
                            </div>
                            <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                Mitwirken
                                <ArrowRight />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex max-w-[625px] flex-col gap-8 rounded-3xl bg-green-900 px-3 pb-10 pt-3">
                        <Image
                            src={HitsImage}
                            alt="A hit"
                            width={600}
                            height={400}
                            className="rounded-2xl"
                        />
                        <div className="flex flex-col gap-12 px-6">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-optima text-4xl text-white">
                                    Neues Event
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="font-sans text-lg text-white">
                                        A coach plays a pivotal role
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        individuals or teams towards their goals
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        Insights, constructive feedback
                                    </li>
                                </ul>
                            </div>
                            <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                Mitwirken
                                <ArrowRight />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex max-w-[625px] flex-col gap-8 rounded-3xl bg-green-900 px-3 pb-10 pt-3">
                        <Image
                            src={HitsImage}
                            alt="A hit"
                            width={600}
                            height={400}
                            className="rounded-2xl"
                        />
                        <div className="flex flex-col gap-12 px-6">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-optima text-4xl text-white">
                                    Neues Event
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="font-sans text-lg text-white">
                                        A coach plays a pivotal role
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        individuals or teams towards their goals
                                    </li>
                                    <li className="font-sans text-lg text-white">
                                        Insights, constructive feedback
                                    </li>
                                </ul>
                            </div>
                            <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base">
                                Mitwirken
                                <ArrowRight />
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};
