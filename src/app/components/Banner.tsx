import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["700"],
});

const Banner = () => {
    return (
        <section className="bg-[#0c0d10] px-6 py-12">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-2xl border border-gray-800 bg-[#15171d] px-8 py-12 lg:flex-row">

                {/* Left Side */}
                <div className="max-w-2xl">

                    {/* Small Text */}
                    <p className="mb-4 text-xs font-bold tracking-[2px] text-lime-400">
                        WORKOUT LIBRARY
                    </p>

                    {/* Heading */}
                    <h1
                        className={`${oswald.className} text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl`}
                    >
                        Train with intent.
                        <br />
                        Log every set.
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* Button */}
                    <a
                        href="#workouts"
                        className="mt-7 inline-flex items-center gap-2 rounded-md bg-lime-400 px-6 py-3 text-sm font-bold text-black hover:bg-lime-300"
                    >
                        BROWSE WORKOUTS
                    </a>

                </div>

                {/* Right Side Image */}
                <div className="flex justify-center">
                    <Image
                        src="/banner.png"
                        alt="Workout illustration"
                        width={350}
                        height={350}
                        className="h-auto w-[280px] sm:w-[320px] lg:w-[350px]"
                        priority
                    />
                </div>

            </div>

        </section>
    );
};

export default Banner;
