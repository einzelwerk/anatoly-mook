import React from 'react';
import ArrowRightWhite from '../../../public/icons/arrow-right-white.svg';
import ThanksPic from '../../../public/images/thanks-pic.jpg';
import Image from 'next/image';

export const NotFound = () => {
    return (
        <section className="bg-green-950 px-2 py-2 lg:px-6 lg:py-8">
            <div className="rounded-5xl flex justify-center bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-6 py-8 lg:px-36 lg:py-24">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-28">
                    <div className="order-2 flex flex-col gap-6 self-center lg:order-1 lg:gap-12">
                        <div>
                            <h2 className="max-w-xl self-stretch font-optima text-5xl text-green-950 lg:text-7xl">
                                We&apos;re sorry, the page doesn&apos;t exist on
                                our website. Try again!
                            </h2>
                            <p className="max-w-xl self-stretch font-optima text-xl text-green-950 text-opacity-50">
                                Don&apos;t give up, you will do it
                            </p>
                        </div>
                        <div>
                            <button className="flex h-12 w-max items-center gap-2 rounded-full bg-gradient-to-b from-gradientDarkStart to-gradientDarkEnd px-4 py-3 font-optima text-base font-semibold uppercase text-white">
                                Go to homepage
                                <ArrowRightWhite />
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
        </section>
    );
};
