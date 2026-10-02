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

    const response = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!response.ok) {
        notFound();
    }

    const workout: Workout = await response.json();

    return <WorkoutDetails workout={workout} />;
}
