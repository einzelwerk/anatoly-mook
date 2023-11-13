export const RunningQuote = ({ data }) => {
    const { quote, title } = data;
    return (
        <section className="hidden overflow-hidden py-12 font-optima lg:block">
            <div className="animate-marquee hover:pause flex gap-8 text-5xl">
                <span className="whitespace-nowrap italic text-white">
                    “{quote}”
                </span>
                <span className="whitespace-nowrap text-white text-opacity-50">
                    – {title}
                </span>
            </div>
        </section>
    );
};
