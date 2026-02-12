import { HomeClient } from "@/components/home-client";
import { projects } from "@/lib/projects";

export default function Home() {
  return <HomeClient projects={projects} lang="ru" />;
}
