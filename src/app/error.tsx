"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section role="alert" className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-white">Unable to load workouts</h1>
      <p className="mt-3 text-gray-400">Please try again in a moment.</p>
      <button onClick={reset} className="btn mt-8 border-none bg-lime-400 text-black hover:bg-lime-300">
        Try again
      </button>
    </section>
  );
}
