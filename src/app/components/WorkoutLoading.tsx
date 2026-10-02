export default function WorkoutLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex min-h-80 max-w-7xl flex-col items-center justify-center gap-4 px-4 py-12"
    >
      <span
        aria-hidden="true"
        className="h-12 w-12 animate-spin rounded-full border-4 border-gray-800 border-t-lime-400 motion-reduce:animate-none"
      />
      <p className="text-gray-400">Loading exercises...</p>
    </div>
  );
}
