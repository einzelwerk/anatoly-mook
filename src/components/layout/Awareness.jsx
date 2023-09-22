import React from 'react';

import Presentation from '../../../public/icons/presentation.svg';

import AwarenessImage from '../../../public/images/awareness.jpg';

import Image from 'next/image';

export const Awareness = () => {
    return (
        <section className="flex flex-col gap-14 bg-green-950 px-4 py-14 lg:px-40 lg:py-32">
            <div className="order-2 flex flex-col gap-8 lg:order-1">
                <div className="flex flex-col gap-6">
                    <h2 className="self-stretch text-center font-optima text-6xl text-white">
                        Neues Bewusstsein
                    </h2>
                    <p className="max-w-3xl self-center text-center font-sans text-lg text-white">
                        A coach plays a pivotal role in guiding individuals or
                        teams towards their goals. Serving as a mentor,
                        motivator, and strategist, a coach provides valuable
                        insights, constructive feedback, and a supportive
                        environment. Whether in sports, business, or personal
                        development, a coach empowers others to unleash their
                        full potential, helping them overcome challenges and
                        achieve remarkable results. Through inspiration and
                        expertise, a coach fosters growth and excellence in
                        those they guide.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 self-center lg:flex-nowrap">
                    <button className="flex items-center justify-center gap-3 rounded-2xl border border-white border-opacity-10 px-6 py-3 text-white">
                        <Presentation />
                        Research
                    </button>
                    <button className="flex items-center justify-center gap-3 rounded-2xl border border-white border-opacity-10 px-6 py-3 text-white">
                        <Presentation />
                        Development
                    </button>
                    <button className="flex items-center justify-center gap-3 rounded-2xl border border-white border-opacity-10 px-6 py-3 text-white">
                        <Presentation />
                        Education
                    </button>
                </div>
            </div>
            <Image
                src={AwarenessImage}
                alt="Awareness"
                className="order-1 cursor-pointer self-center rounded-4xl lg:order-2"
            />
        </section>
    );
};
