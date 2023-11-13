'use client';

import React from 'react';

import PartnerImage from '../../../public/icons/partner.svg';
import PartnerImageSmall from '../../../public/icons/partner-sm.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Partners = ({ data }) => {
    const { title, list } = data;
    return (
        <section className="flex flex-col gap-8 overflow-hidden lg:gap-16">
            <h2 className="self-stretch text-center font-optima text-4xl text-white lg:text-6xl">
                {title}
            </h2>
            <SwiperDesktop data={data} />
            <SwiperMobile data={data} />
        </section>
    );
};

const SwiperDesktop = ({ data }) => {
    const { list } = data;
    return (
        <div className="animate-marquee hover:pause hidden items-center gap-12 lg:flex">
            {list.map((partner) => {
                const { logo } = partner;
                return (
                    <div key={logo.id} className="w-fit shrink-0">
                        <Link href={partner.link} className="block w-fit">
                            <Image
                                src={logo.url}
                                width={logo.width}
                                height={logo.height}
                                alt="A partner"
                                className="h-20 w-48 filter hover:brightness-[100] "
                            />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

const SwiperMobile = ({ data }) => {
    const { list } = data;

    return (
        <div className="grid grid-cols-2 place-items-center gap-x-3 gap-y-5 lg:hidden">
            {list.map((partner) => {
                const { logo } = partner;
                return (
                    <div key={logo.id} className="w-fit">
                        <Link href={partner.link} className="block w-fit">
                            <Image
                                src={logo.url}
                                width={logo.width}
                                height={logo.height}
                                alt="A partner"
                                className="h-16 w-40 filter hover:brightness-[100] "
                            />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
