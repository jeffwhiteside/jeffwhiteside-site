import { Hero } from "@/components/hero";
import { ImpactAndProjects } from "@/components/home/impact-and-projects";
import { LeadershipPreview } from "@/components/home/leadership-preview";

/**
 * Home page: a full overview, with each section linking to its own page for depth. A visitor
 * who reads only this page still gets the whole picture.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <LeadershipPreview />
      {/* <ImpactAndProjects /> */}
    </>
  );
}
