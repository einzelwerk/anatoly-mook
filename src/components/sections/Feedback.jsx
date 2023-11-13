'use client';

import React, { useCallback, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Navigation } from 'swiper/modules';

import FeedbackImage from '../../../public/images/feedback2.png';
import PlayBtn from '../../../public/icons/play-btn.svg';
import Image from 'next/image';
import { LeftSwiperArrow, RightSwiperArrow } from './Hits';

export const Feedback = ({ data }) => {
    const { title, list } = data;
    const swiperRef = useRef(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <section className="px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-8 lg:gap-16">
                    <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                        {title}
                    </h2>
                    <div className="flex flex-col gap-16 lg:flex-row">
                        <div className="overflow-hidden lg:w-1/2 lg:overflow-visible">
                            <Swiper
                                effect={'cards'}
                                ref={swiperRef}
                                grabCursor={true}
                                onSlideChange={(swiper) => {
                                    setActiveSlideIndex(swiper.realIndex);
                                }}
                                modules={[EffectCards, Navigation]}
                                cardsEffect={{ slideShadows: false }}
                            >
                                {list.map((slide, idx) => {
                                    const { image } = slide;
                                    return (
                                        <SwiperSlide key={idx}>
                                            <div className="relative justify-center lg:justify-normal">
                                                <Image
                                                    src={image.url}
                                                    width={image.width}
                                                    height={image.height}
                                                    alt="Feedback"
                                                    className="rounded-3xl"
                                                ></Image>
                                                <PlayBtn className="absolute bottom-4 left-4 cursor-pointer" />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="font-optima text-xl text-white lg:text-4xl">
                                {list[activeSlideIndex].text}
                            </h3>
                            <div className="flex justify-between lg:flex-1 lg:flex-col">
                                <div className="flex flex-col">
                                    <h4 className="font-optima text-xl text-white">
                                        {list[activeSlideIndex].name}
                                    </h4>
                                    <p className="font-optima text-xl text-white text-opacity-50">
                                        {list[activeSlideIndex].post}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <LeftSwiperArrow
                                        onClick={handlePrev}
                                        disabled={activeSlideIndex === 0}
                                    />
                                    <RightSwiperArrow
                                        onClick={handleNext}
                                        disabled={
                                            activeSlideIndex === list.length - 1
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
