import ProjectCard from "@/components/ProjectCard";
import { H1, P } from "@/components/Typography";
import Link from "next/link";
import { Project, Projects } from "../..//types";
import { getProjectsByTechnology } from "../../actions";

// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const cat: Category = await getCategory(params.category);
//   return {
//     title: `${cat.name} by Jake Jenkins - Jake1.net`,
//   };
// }

export default async function TagPage({ params }: { params: { tag: string } }) {
  const projects: Projects = await getProjectsByTechnology(params.tag);

  return (
    <>
      <div className="mb-4 mx-2">
        <Link href="/">Home</Link>
      </div>
      <H1>{params.tag}</H1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
