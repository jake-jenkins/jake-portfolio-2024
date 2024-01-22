import ProjectCard from "@/components/ProjectCard";
import { H1, P } from "@/components/Typography";
import Link from "next/link";
import { Categories, Category, Projects } from "../types";

async function getCategories() {
  const data = await fetch(`${process.env.BACKEND}/items/category`, {
    next: { revalidate: 300 },
  });
  const categories = await data.json();
  return categories.data;
}
async function getCategory(categorySlug: string) {
  const data = await fetch(
    `${process.env.BACKEND}/items/category/${categorySlug}`,
    {
      next: { revalidate: 300 },
    }
  );
  const category = await data.json();
  return category.data;
}
async function getProjects(projectSlug: string) {
  const data = await fetch(
    `${process.env.BACKEND}/items/project?filter[category][_eq]=${projectSlug}`
  );
  const projects = await data.json();
  return projects.data;
}

export async function generateStaticParams() {
  const categories: Categories = await getCategories();
  return categories.map((category: any) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const category: Category = await getCategory(params.category);
  return {
    title: `${category.name} by Jake Jenkins - Jake1.net`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category: Category = await getCategory(params.category);
  const projects: Projects = await getProjects(params.category);

  return (
    <>
      <div className="mb-4 mx-2">
        <Link href="/">Home</Link>
      </div>
      <H1>{category.name}</H1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {projects.map((project: any) => (
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
