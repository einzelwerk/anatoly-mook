import Image from 'next/image';
import React from 'react';
import HeroBg from '@/assets/images/hero-bg.png';

export const Hero = ({ title, subtitle, image, text, textButton }) => {
    return (
        <div className="relative h-screen bg-green-950">
            <div className="container">
                <Image
                    src={HeroBg}
                    alt="Anatoly Mook"
                    className="absolute right-0 top-0 w-full bg-green-950"
                />
                <div className="absolute top-1/2 z-10 flex max-w-xs -translate-y-1/2 flex-col gap-6 font-optima lg:max-w-3xl lg:gap-16">
                    <div className="gap-4 lg:gap-6">
                        <h1 className="text-7xl uppercase text-white lg:text-8xl">
                            {/* Anatoly Mook */}
                            {title}
                        </h1>
                        <p className="text-5xl text-white lg:text-7xl">
                            Transzendenz in ein neues Bewusstsein!
                        </p>
                    </div>
                    <div className="flex max-w-xs flex-col gap-4 rounded-3xl bg-white bg-opacity-10 px-4 py-4 lg:max-w-xl lg:flex-row lg:px-6">
                        <p className="w-72 text-xl text-white">
                            Keynote Vorträge Coaching, Training, Seminare
                        </p>
                        <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                            <div className="h-12 w-12 rounded-full"></div>
                            <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                Über Anatoly
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
