"use client";

import { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Workout } from "../type/workout";

type WorkoutContextType = {
    plan: Workout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
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

    const removeFromPlan = (id: number) => {
        setPlan((currentPlan) =>
            currentPlan.filter(
                (workout) => workout.id !== id
            )
        );
    };

    const removeFromSaved = (id: number) => {
        setSaved((currentSaved) =>
            currentSaved.filter(
                (workout) => workout.id !== id
            )
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveWorkout,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
            <ToastContainer position="top-right" autoClose={3000} theme="dark" />
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
