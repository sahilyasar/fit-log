import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["700"],
});

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-[#0c0d10]">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">

                {/* Logo */}
                <div className="flex items-center gap-2">

                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={28}
                        height={28}
                    />

                    <span
                        className={`${oswald.className} text-lg font-bold tracking-[1px] text-white`}
                    >
                        FITLOG
                    </span>

                </div>


                {/* Copyright */}
                <p className="text-center text-sm text-gray-400 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
}