import Image from 'next/image';
import React from 'react';

import ThemeModuleImage from '../../../public/images/theme-module.png';

export const ThemeModule = () => {
    return (
        <section className="bg-green-950 px-4 py-14 lg:px-40 lg:py-32">
            <div className="flex flex-col justify-between lg:flex-row">
                <Image
                    src={ThemeModuleImage}
                    alt="Theme module"
                    className="max-w-xs lg:max-w-2xl"
                />
                <div className="flex max-w-xs flex-col justify-center gap-8 px-4 lg:max-w-lg">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <h2 className="self-stretch font-optima text-6xl text-white">
                            Themen Module
                        </h2>
                        <p className="text-lg text-white">
                            A coach plays a pivotal role in guiding individuals
                            or teams towards their goals. Serving as a mentor,
                            motivator, and strategist, a coach provides valuable
                            insights, constructive feedback, and a supportive
                            environment. Whether in sports, business, or
                            personal development, a coach empowers others to
                            unleash their full potential, helping them overcome
                            challenges and achieve remarkable results. Through
                            inspiration and expertise.
                        </p>
                    </div>
                    <button className="flex w-56 items-center gap-4 rounded-4xl bg-gradient-to-b from-gradientLightStart to-gradientLightEnd pr-6">
                        <div className="h-12 w-12 rounded-full"></div>
                        <p className="font-optima text-lg font-semibold uppercase text-green-950">
                            Erläuterung
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
};
