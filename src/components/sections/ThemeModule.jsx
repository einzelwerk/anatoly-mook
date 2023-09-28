import Image from 'next/image';
import React from 'react';

import ThemeModuleImage from '../../../public/images/theme-module.png';

export const ThemeModule = ({ data }) => {
    const { title, image, description, textButton } = data;
    return (
        <section className="bg-green-950 px-4 py-14 lg:px-40 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                    <Image
                        src={ThemeModuleImage}
                        alt="Theme module"
                        className="max-w-xs lg:max-w-2xl"
                    />
                    <div className="flex max-w-xs flex-col justify-center gap-8 px-4 lg:max-w-lg">
                        <div className="flex flex-col gap-4 lg:gap-6">
                            <h2 className="self-stretch font-optima text-4xl text-white lg:text-6xl">
                                {title}
                            </h2>
                            <p className="text-lg text-white">{description}</p>
                        </div>
                        <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                            <div className="h-12 w-12 rounded-full"></div>
                            <p className="font-optima text-lg font-semibold uppercase text-green-950">
                                {textButton}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
