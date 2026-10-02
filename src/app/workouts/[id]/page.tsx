import { notFound } from "next/navigation";
import WorkoutDetails from "../../components/WorkoutDetails";
import type { Workout } from "../../type/workout";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function WorkoutDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(Number(id))) {
        notFound();
    }

    const response = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`,
        { cache: "no-store" }
    );

    if (response.status === 404) {
        notFound();
    }

    if (!response.ok) {
        throw new Error("Unable to fetch workout details");
    }

    const workout: Workout = await response.json();

    if (!workout || workout.id !== Number(id)) {
        notFound();
    }

    return <WorkoutDetails workout={workout} />;
}
