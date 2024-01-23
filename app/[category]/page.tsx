import ProjectCard from "@/components/ProjectCard";
import { H1, P } from "@/components/Typography";
import Link from "next/link";
import { Categories, Category, Project, Projects } from "../types";
import { getCategories, getCategory, getProjectsByCategory } from "../actions";

export async function generateStaticParams() {
  const categories: Categories = await getCategories();
  return categories.map((category: Category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const cat: Category = await getCategory(params.category);
  return {
    title: `${cat.name} by Jake Jenkins - Jake1.net`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category: Category = await getCategory(params.category);
  const projects: Projects = await getProjectsByCategory(params.category);

  return (
    <>
      <div className="mb-4 mx-2">
        <Link href="/">Home</Link>
      </div>
      <H1>{category.name}</H1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            category={category}
          />
        ))}
      </div>
    </>
  );
}
