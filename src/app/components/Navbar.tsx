"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useWorkout } from "../context/WorkoutContext";

const Navbar = () => {
    const { plan, saved } = useWorkout();
    
    const pathname = usePathname();

    const workoutActive =
        pathname === "/" || pathname.startsWith("/workouts");

    const myPlanActive =
        pathname.startsWith("/my-plan");

    return (
        <header className="border-b border-gray-800 bg-[#0c0d10]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={28}
                        height={28}
                    />
                    <span>FITLOG</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-3">

                    <Link
                        href="/"
                        className={
                            workoutActive
                                ? "rounded-full bg-[#1a2312] px-4 py-2 text-sm text-lime-400"
                                : "px-4 py-2 text-sm text-gray-400"
                        }
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={
                            myPlanActive
                                ? "rounded-full bg-[#1a2312] px-4 py-2 text-sm text-lime-400"
                                : "px-4 py-2 text-sm text-gray-400"
                        }
                    >
                        My Plan
                    </Link>

                </nav>

                {/* Counters */}
                <div className="flex items-center gap-4">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-gray-300"
                    >
                        Plan

                        <span className="rounded-full bg-lime-400 px-2 py-1 text-xs font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-gray-300"
                    >
                        Saved

                        <span className="rounded-full border border-gray-600 px-2 py-1 text-xs">
                            {saved.length}
                        </span>
                    </Link>

                </div>

            </div>
        </header>
    );
};

export default Navbar;
