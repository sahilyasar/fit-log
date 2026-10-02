import { Oswald } from "next/font/google";
import WorkoutCard from "./WorkoutCard";
import type { Workout } from "../type/workout";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default async function Works() {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts: Workout[] = await response.json();

  return (
    <section id="workouts" className="mx-auto max-w-7xl px-4">
      <h2 className={`${oswald.className} text-3xl uppercase text-white`}>The Library</h2>
      <p className="mb-8 text-sm text-gray-400">Twelve lifts covering every major muscle group.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
