import Image from 'next/image';
import React from 'react';
import HeroBg from '@/assets/images/hero-bg.png';
import HeroBgMobile from '../../../public/images/hero-mook.png';

export const Hero = ({ data }) => {
    const { title, subtitle, image, text, textButton } = data;

    return (
        <div className="bg-green-950 lg:relative lg:h-screen">
            <div className="container">
                <Image
                    src={HeroBg}
                    alt="Anatoly Mook"
                    className="right-0 top-0 hidden w-full bg-green-950 lg:absolute lg:block"
                />
                <Image
                    src={HeroBgMobile}
                    alt="Anatoly Mook"
                    className="right-0 top-0 block w-full bg-green-950 lg:hidden"
                />
                <div className="z-10 flex max-w-xs flex-col gap-6 text-center font-optima lg:absolute lg:top-1/2 lg:max-w-3xl lg:-translate-y-1/2 lg:gap-16 lg:text-start">
                    <div className="gap-4 lg:gap-6">
                        <h1 className="text-7xl uppercase text-white lg:text-8xl">
                            {title}
                        </h1>
                        <p className="text-5xl text-white lg:text-7xl">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex max-w-xs flex-col gap-4 rounded-3xl bg-white bg-opacity-10 px-4 py-4 lg:max-w-xl lg:flex-row lg:px-6">
                        <p className="w-72 text-xl text-white">{text}</p>
                        <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                            <div className="h-12 w-12 rounded-full"></div>
                            <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                {textButton}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
