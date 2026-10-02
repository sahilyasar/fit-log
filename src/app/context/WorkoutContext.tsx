"use client";

import { createContext, useContext, useState } from "react";
import type { Workout } from "../type/workout";

type WorkoutContextType = {
    plan: Workout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;
};

const WorkoutContext = createContext<WorkoutContextType | null>(null);

export function WorkoutProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    const addToPlan = (workout: Workout) => {
        setPlan((currentPlan) => {
            const alreadyAdded = currentPlan.some(
                (item) => item.id === workout.id
            );

            if (alreadyAdded) {
                return currentPlan;
            }

            if (currentPlan.length >= 5) {
                return currentPlan;
            }

            return [...currentPlan, workout];
        });
    };

    const saveWorkout = (workout: Workout) => {
        setSaved((currentSaved) => {
            const alreadySaved = currentSaved.some(
                (item) => item.id === workout.id
            );

            if (alreadySaved) {
                return currentSaved;
            }

            return [...currentSaved, workout];
        });
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveWorkout,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be inside WorkoutProvider"
        );
    }

    return context;
}