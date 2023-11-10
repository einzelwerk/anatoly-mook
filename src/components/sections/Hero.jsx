import Image from 'next/image';
import React from 'react';
import HeroBgMobile from '../../../public/images/hero-mook.png';
import RoundArrow from '../../../public/icons/round-arrow.svg';

export const Hero = ({ data }) => {
    const { title, subtitle, image, text, textButton } = data;

    return (
        <div className="bg-green-950 lg:relative lg:h-screen">
            <div className="relative block w-full bg-green-950 lg:hidden">
                <Image src={HeroBgMobile} alt="Anatoly Mook" />
                <div className="absolute bottom-0 left-0 h-2/6 w-full bg-gradient-to-b from-transparent to-green-950" />
            </div>
            <div className="container pb-14">
                <div className="right-0 top-0 hidden h-full w-full bg-green-950 lg:absolute lg:block">
                    <Image
                        priority
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        sizes="100vw"
                        className="h-full w-full object-cover lg:absolute lg:block"
                    />
                    <div className="absolute bottom-0 left-0 h-1/6 w-full bg-gradient-to-b from-transparent to-green-950" />
                </div>

                <div className="z-10 flex flex-col gap-6 text-center font-optima text-white lg:absolute lg:top-1/2 lg:max-w-2xl lg:-translate-y-1/2 lg:gap-16 lg:text-start">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <h1 className="text-7xl uppercase leading-none lg:text-8xl">
                            {title}
                        </h1>
                        <p className="text-5xl lg:text-7xl lg:leading-none">
                            {subtitle}
                        </p>
                    </div>
                    {/* <div className="flex max-w-xs flex-col gap-4 rounded-3xl bg-white bg-opacity-10 px-4 py-4 lg:max-w-xl lg:flex-row lg:px-6">
                        <p className="w-72 text-xl text-white">{text}</p>
                        <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                            <div className="h-12 w-12 rounded-full"></div>
                            <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                {textButton}
                            </p>
                        </button>
                    </div> */}

                    <div className="flex flex-col items-center justify-center gap-5 text-lg font-semibold uppercase lg:flex-row lg:justify-start">
                        <RoundArrow className="cursor-pointer" />
                        <span>Inspiration</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
