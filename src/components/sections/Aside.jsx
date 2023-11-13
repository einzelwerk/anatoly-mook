import React from 'react';

export const Aside = () => {
    return (
        <aside className="w-full items-center justify-center bg-gradient-to-b from-gradientLightStart to-gradientLightEnd px-10 py-2 lg:px-4">
            <div className="flex w-full items-center justify-between gap-0 lg:justify-center lg:gap-4">
                <p className="text-base text-green-950">Erste Info hier</p>
                <button className="gap-2 rounded-full px-4 py-2 text-white lg:py-3">
                    Einholen
                </button>
            </div>
        </aside>
    );
};
