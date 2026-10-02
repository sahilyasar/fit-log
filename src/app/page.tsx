import Banner from "./components/Banner";
import Works from "./components/Works";
import { Suspense } from "react";
import WorkoutLoading from "./components/WorkoutLoading";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <Suspense fallback={<WorkoutLoading />}>
      <Works />
    </Suspense>
   </div>
  );
}
