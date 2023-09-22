'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PartnerImage from '../../../public/icons/partner.svg';
import PartnerImageSmall from '../../../public/icons/partner-sm.svg';

export const Partners = () => {
    return (
        <section className="flex flex-col gap-8 bg-green-950 px-4 py-14 lg:gap-16 lg:px-0 lg:py-32">
            <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                Erfolgreiche Kunden
            </h2>
            <SwiperDesktop />
            <SwiperMobile />
        </section>
    );
};

const SwiperDesktop = () => {
    return (
        <div className="hidden lg:block">
            <Swiper slidesPerView={5} spaceBetween={48} freeMode={true}>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
                <SwiperSlide>
                    <PartnerImage />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

const SwiperMobile = () => {
    return (
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 lg:hidden">
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImage className="hidden lg:block" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
            <PartnerImageSmall className="block lg:hidden" />
        </div>
    );
};
