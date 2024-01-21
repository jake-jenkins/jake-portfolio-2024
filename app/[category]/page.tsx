import ProjectCard from "@/components/ProjectCard";
import { H1, P } from "@/components/Typography";
import Link from "next/link";
import { getCategories, getCategory, getProjectByCategory } from "../actions";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: any) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const category = await getCategory(params.category);
  return {
    title: `${category.name} by Jake Jenkins - Jake1.net`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = await getCategory(params.category);
  const projects = await getProjectByCategory(category.slug);
  return (
    <>
      <div className="mb-4 mx-2">
        <Link href="/">Home</Link>
      </div>
      <H1>{category.name}</H1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} category={category} />
        ))}
      </div>
    </>
  );
}
