'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Navigation } from 'swiper/modules';

import FeedbackImage from '../../../public/images/feedback2.png';
import PlayBtn from '../../../public/icons/play-btn.svg';
import Image from 'next/image';

export const Feedback = ({ data }) => {
    const { title, list } = data;
    return (
        <section className="bg-green-950 px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-8 lg:gap-16">
                    <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                        {title}
                    </h2>
                    <div className="flex flex-col gap-16 lg:flex-row">
                        <div className="lg:w-1/2">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Navigation]}
                                slideShadows={false}
                            >
                                <SwiperSlide>
                                    <div className="relative justify-center lg:justify-normal">
                                        <Image
                                            src={FeedbackImage}
                                            alt="Feedback"
                                            className="h-80 max-w-xs rounded-3xl lg:h-[620px] lg:max-w-lg"
                                        ></Image>
                                        <PlayBtn className="absolute bottom-4 left-4 cursor-pointer" />
                                    </div>
                                </SwiperSlide>
                                {/* {list.map((listItem) => {
                                    return <></>;
                                })} */}
                            </Swiper>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-8">
                                <h3 className="font-optima text-4xl text-white">
                                    “I have tried a lot of similar products and
                                    Anatoly mook coach is the best! Anatoly mook
                                    coach has made a huge difference! Die
                                    essenziellen Bestands-kerne Antatolys Lehre
                                    sind die Grundsätze des Lebens.
                                    Verwirklichung angeordnet”
                                </h3>
                                <div className="gap-2">
                                    <h4 className="w-80 font-optima text-xl text-white lg:w-96">
                                        Tina Leonard
                                    </h4>
                                    <p className="w-80 font-optima text-xl text-white text-opacity-50 lg:w-96">
                                        Head of HR
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
