import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-7xl font-bold text-lime-400">404</p>
      <h1 className="mt-6 text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-gray-400">
        This page or workout does not exist. Head back to the library to find your next lift.
      </p>
      <Link href="/" className="btn mt-8 border-none bg-lime-400 text-black hover:bg-lime-300">
        Back to workouts
      </Link>
    </section>
  );
}
