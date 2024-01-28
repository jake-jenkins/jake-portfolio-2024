import ProjectCard from "@/components/ProjectCard";
import { H1, P } from "@/components/Typography";
import Link from "next/link";
import { Project, Projects } from "../../types";
import { getProjectsByTechnology, getTags } from "../../actions";

export async function generateStaticParams() {
  const tags: string[] = await getTags();
  return tags.map((tag: string) => ({
    tag,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}) {
  return {
    title: `Projects built with ${params.tag} by Jake Jenkins - Jake1.net`,
  };
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const projects: Projects = await getProjectsByTechnology(params.tag);

  return (
    <>
      <div className="mb-4 mx-2">
        <Link href="/">Home</Link>
      </div>
      <H1>Projects built with {params.tag}</H1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
