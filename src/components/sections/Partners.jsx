'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import PartnerImage from '../../../public/icons/partner.svg';
import PartnerImageSmall from '../../../public/icons/partner-sm.svg';
import Image from 'next/image';

export const Partners = ({ data }) => {
    const { title, list } = data;
    return (
        <section className="flex flex-col gap-8 bg-green-950 px-4 py-14 lg:gap-16 lg:px-0 lg:py-32">
            <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                {title}
            </h2>
            <SwiperDesktop />
            <SwiperMobile />
        </section>
    );
};

const SwiperDesktop = ({ data }) => {
    return (
        <div className="hidden lg:block">
            <Swiper
                slidesPerView={5}
                spaceBetween={48}
                freeMode={true}
                grabCursor={true}
            >
                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src={PartnerImage} alt="A partner" /> */}
                    <PartnerImage />
                </SwiperSlide>

                {/* {data.map((item) => {
                    return ( */}
                {/* // ); // })} */}
            </Swiper>
        </div>
    );
};

const SwiperMobile = ({ data }) => {
    return (
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 lg:hidden">
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            <PartnerImage />
            {/* <Image src={PartnerImageSmall} alt="A partner" /> */}
        </div>
        // <>
        //     {data.map((dataItem) => {
        //         return (
        //         );
        //     })}
        // </>
    );
};
