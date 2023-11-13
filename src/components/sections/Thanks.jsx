import React from 'react';

import ThanksPic from '../../../public/images/thanks-pic.jpg';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import Image from 'next/image';

export const Thanks = () => {
    return (
        <section className="px-2 py-2 lg:px-6 lg:py-8">
            <div className="container">
                <div className="flex justify-center rounded-5xl bg-green-900 px-6 py-8 lg:px-36 lg:py-24">
                    <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-28">
                        <div className="order-2 flex flex-col gap-6 self-center lg:order-1 lg:gap-12">
                            <div>
                                <h2 className="max-w-xl self-stretch font-optima text-5xl text-white lg:text-7xl">
                                    Danke for your message, we will get back to
                                    you ASAP!
                                </h2>
                                <p className="max-w-xl self-stretch font-optima text-xl text-white text-opacity-50">
                                    Unsere manager will contact you within next
                                    24 hours
                                </p>
                            </div>
                            <div>
                                <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-4 py-3 font-optima text-base font-semibold uppercase">
                                    Go to homepage
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                        <Image
                            src={ThanksPic}
                            alt="Thank you"
                            className="order-1 max-w-xs rounded-3xl lg:order-2 lg:max-w-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
