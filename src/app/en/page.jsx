import { HomeClient } from "@/components/home-client";
import { projects } from "@/lib/projects";

export default function HomeEn() {
  return <HomeClient projects={projects} lang="en" />;
}
