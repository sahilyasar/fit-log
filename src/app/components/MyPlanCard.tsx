import Image from "next/image";
import Link from "next/link";
import type { Workout } from "../type/workout";

type MyPlanCardProps = {
    workout: Workout;
    showDoneButton?: boolean;
    onRemove: () => void;
    onDone?: () => void;
};

export default function MyPlanCard({
    workout,
    showDoneButton = false,
    onRemove,
    onDone,
}: MyPlanCardProps) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-[#15171d] p-4 md:flex-row md:items-center md:justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">

                <div className="relative h-20 w-32 overflow-hidden rounded-xl">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <h2 className="font-bold uppercase text-white">
                        {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        {workout.equipment}
                    </p>

                    <div className="mt-2 flex gap-4 text-xs text-gray-400">
                        <span>◷ {workout.duration} min</span>

                        <span>
                            🔥 {workout.caloriesBurned} kcal
                        </span>

                        <span>☆ {workout.rating}</span>
                    </div>
                </div>

            </div>


            {/* Right */}
            <div className="flex items-center gap-3">

                <Link
                    href={`/workouts/${workout.id}`}
                    className="btn btn-sm btn-outline text-white"
                >
                    View Details
                </Link>

                {showDoneButton && (
                    <button
                        onClick={onDone}
                        className="btn btn-sm border-none bg-lime-400 text-black"
                    >
                        ✓ Mark as Done
                    </button>
                )}

                <button
                    onClick={onRemove}
                    className="btn btn-sm btn-circle btn-ghost text-gray-400"
                >
                    ✕
                </button>

            </div>

        </div>
    );
}