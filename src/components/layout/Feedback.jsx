'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Navigation } from 'swiper/modules';

import FeedbackImage from '../../../public/images/feedback2.png';
import Image from 'next/image';

export const Feedback = () => {
    return (
        <section className="flex flex-col gap-8 bg-green-950 px-4 py-14 lg:gap-16 lg:px-40 lg:py-32">
            <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                Feedback
            </h2>
            <div className="flex gap-16">
                <div className="w-1/2">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        slideShadows={false}
                    >
                        <SwiperSlide>
                            <Image
                                src={FeedbackImage}
                                alt="Feedback"
                                className="h-80 max-w-xs rounded-3xl lg:h-[620px] lg:max-w-lg"
                            ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={FeedbackImage}
                                alt="Feedback"
                                className="h-80 max-w-xs rounded-3xl lg:h-[620px] lg:max-w-lg"
                            ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={FeedbackImage}
                                alt="Feedback"
                                className="h-80 max-w-xs rounded-3xl lg:h-[620px] lg:max-w-lg"
                            ></Image>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-8">
                        <h3 className="font-optima text-4xl text-white">
                            “I have tried a lot of similar products and Anatoly
                            mook coach is the best! Anatoly mook coach has made
                            a huge difference! Die essenziellen Bestands-kerne
                            Antatolys Lehre sind die Grundsätze des Lebens.
                            Verwirklichung angeordnet”
                        </h3>
                        <div className="gap-2">
                            <h4 className="w-96 font-optima text-xl text-white">
                                Tina Leonard
                            </h4>
                            <p className="w-96 font-optima text-xl text-white text-opacity-50">
                                Head of HR
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};
