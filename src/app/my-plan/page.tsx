"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { useWorkout } from "../context/WorkoutContext";

import MyPlanCard from "../components/MyPlanCard";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["700"],
});

export default function MyPlanPage() {
    const { plan, saved, removeFromPlan, removeFromSaved } = useWorkout();

    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");
    const workouts = [...(activeTab === "plan" ? plan : saved)];
    workouts.sort((a, b) =>
        sortBy === "duration"
            ? a.duration - b.duration
            : a.name.localeCompare(b.name)
    );

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <>
        <section className="bg-[#0f1115] px-6 py-10">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <h1
                    className={`${oswald.className} text-3xl uppercase text-white`}
                >
                    My Plan
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>


                {/* Metrics */}
                <div className="mt-6 grid grid-cols-1 rounded-2xl border border-gray-800 bg-[#15171d] sm:grid-cols-3">

                    <div className="p-6">
                        <p className="text-sm text-gray-400">
                            Exercises
                        </p>

                        <h2 className={`${oswald.className} mt-1 text-4xl text-lime-400`}>
                            {plan.length}
                        </h2>
                    </div>

                    <div className="border-gray-800 p-6 sm:border-l">
                        <p className="text-sm text-gray-400">
                            Minutes
                        </p>

                        <h2 className={`${oswald.className} mt-1 text-4xl text-white`}>
                            {totalMinutes}
                        </h2>
                    </div>

                    <div className="border-gray-800 p-6 sm:border-l">
                        <p className="text-sm text-gray-400">
                            Calories
                        </p>

                        <h2 className={`${oswald.className} mt-1 text-4xl text-white`}>
                            {totalCalories}
                        </h2>
                    </div>

                </div>


                {/* Tabs */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2 rounded-lg border border-gray-800 p-1">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={
                            activeTab === "plan"
                                ? "btn btn-sm bg-gray-700 text-white"
                                : "btn btn-sm btn-ghost text-gray-400"
                        }
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={
                            activeTab === "saved"
                                ? "btn btn-sm bg-gray-700 text-white"
                                : "btn btn-sm btn-ghost text-gray-400"
                        }
                    >
                        Saved
                    </button>

                  </div>
                  <label className="flex items-center gap-3 text-xs text-gray-400">
                    Sort By
                    <select
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                        className="rounded-lg border border-gray-800 bg-[#15171d] px-3 py-2 text-white"
                    >
                        <option value="duration">Duration</option>
                        <option value="name">Name</option>
                    </select>
                  </label>
                </div>


                {/* Workout List */}
                {workouts.length === 0 ? (
                    <div className="mt-6 flex min-h-80 flex-col items-center justify-center border border-gray-800 px-6 text-center">
                        <h2 className={`${oswald.className} text-xl uppercase text-white`}>Nothing here yet</h2>
                        <p className="mt-2 text-sm text-gray-400">Browse the library and add a lift to get today moving.</p>
                        <Link href="/" className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black hover:bg-lime-300">
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                  <div className="mt-6 flex flex-col gap-4">
                    {workouts.map((workout) => (
                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                                showDoneButton={activeTab === "plan"}
                                onDone={() => removeFromPlan(workout.id)}
                                onRemove={() => {
                                    if (activeTab === "plan") {
                                        removeFromPlan(workout.id);
                                    } else {
                                        removeFromSaved(workout.id);
                                    }
                                    toast.success(`${workout.name} removed`);
                                }}
                            />
                        ))}


                  </div>
                )}

            </div>

        </section>
       
        </>
    );
}
