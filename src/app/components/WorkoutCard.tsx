import Image from "next/image";
import Link from "next/link";
import { Workout } from "../type/workout";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="card h-full overflow-hidden rounded-2xl border border-gray-800 bg-[#15171d] ">

        <figure className="relative h-48 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>

        <div className="card-body p-5">

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span key={muscle} className="badge badge-sm rounded-full border-none bg-lime-400 text-xs font-bold uppercase text-black">
                {muscle}
              </span>
            ))}
          </div>

          <h2 className={`${oswald.className} card-title text-xl uppercase text-white`}>
            {workout.name}
          </h2>

          <p className="text-sm text-gray-400">
            {workout.equipment}
          </p>

          <div className="mt-3 flex gap-5 border-t border-gray-800 pt-4 text-sm text-gray-400">
            <span>◷ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>☆ {workout.rating}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
