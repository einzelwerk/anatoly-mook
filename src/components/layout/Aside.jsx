import React from 'react';

export const Aside = () => {
    return (
        <aside className="from-gradientLightStart to-gradientLightEnd w-full items-center justify-center bg-gradient-to-b px-10 py-2 lg:px-4">
            <div className="flex w-full items-center justify-between gap-0 lg:justify-center lg:gap-4">
                <p className="text-base text-green-950">Erste Info hier</p>
                <button className="gap-2 rounded-full bg-green-950 px-4 py-2 text-white lg:py-3">
                    Einholen
                </button>
            </div>
        </aside>
    );
};
