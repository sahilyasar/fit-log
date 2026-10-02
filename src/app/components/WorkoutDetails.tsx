"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import type { Workout } from "../type/workout";
import { useWorkout } from "../context/WorkoutContext";


const oswald = Oswald({
    subsets: ["latin"],
    weight: ["700"],
});

type WorkoutDetailsProps = {
    workout: Workout;
};

function Spec({ label, value }: { label: string; value: string | number }) {
    return (
        <div className="flex justify-between gap-4 border-b border-gray-800 px-5 py-3 last:border-b-0">
            <span className="text-gray-400">{label}</span>
            <span className="text-white">{value}</span>
        </div>
    );
}

const WorkoutDetails = ({
    workout,
}: WorkoutDetailsProps) => {

    const { addToPlan, saveWorkout } = useWorkout();

    return (
        <section className="min-h-screen bg-[#0f1115] px-6 py-12">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <div className="relative min-h-[500px] overflow-hidden rounded-2xl border border-gray-800">

                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />

                </div>


                {/* RIGHT SIDE */}
                <div>

                    {/* Title */}
                    <h1
                        className={`${oswald.className} text-4xl font-bold uppercase text-white`}
                    >
                        {workout.name}
                    </h1>


                    {/* Description */}
                    <p className="mt-3 text-gray-400">
                        {workout.description}
                    </p>


                    {/* Muscle Groups */}
                    <div className="mt-5 flex flex-wrap gap-2">

                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge border-none bg-lime-400 font-semibold text-black"
                            >
                                {muscle}
                            </span>
                        ))}

                    </div>


                    {/* Specs */}
                    <div className="mt-7 overflow-hidden rounded-2xl border border-gray-800 bg-[#15171d]">

                        <Spec
                            label="Equipment"
                            value={workout.equipment}
                        />

                        <Spec
                            label="Difficulty"
                            value={workout.difficulty}
                        />

                        <Spec
                            label="Sets"
                            value={workout.sets}
                        />

                        <Spec
                            label="Reps"
                            value={workout.reps}
                        />

                        <Spec
                            label="Duration"
                            value={`${workout.duration} min`}
                        />

                        <Spec
                            label="Calories"
                            value={`${workout.caloriesBurned} kcal`}
                        />

                        <Spec
                            label="Rating"
                            value={workout.rating}
                        />

                    </div>


                    {/* Instructions */}
                    <div className="mt-8">

                        <h2
                            className={`${oswald.className} text-xl uppercase text-white`}
                        >
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-3 text-gray-300">

                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3"
                                    >
                                        <span className="text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>
                                    </li>
                                )
                            )}

                        </ol>

                    </div>


                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                    <button
                        onClick={() => addToPlan(workout)}
                        className="btn border-none bg-lime-400 text-black"
                    >
                        + Add to today&apos;s plan
                    </button>

                    <button
                        onClick={() => saveWorkout(workout)}
                        className="btn btn-outline text-white"
                    >
                        Save for later
                    </button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default WorkoutDetails;
