import { H1, H2, P } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { getCategory, getProject, getProjects } from "@/app/actions";
import { Category, Project, Projects } from "@/app/types";

const { heroImage, heroWrapper } = styles;

export async function generateStaticParams() {
  const projects: Projects = await getProjects();
  return projects.map((project: Project) => ({
    project: project.slug,
    category: project.category
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { project: string };
}) {
  const project: Project = await getProject(params.project);
  const category: Category = await getCategory(project.category);

  return {
    title: `${project.name} - ${category.name} by Jake Jenkins - Jake1.net`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { category: string, project: string };
}) {
  const project: Project = await getProject(params.project);
  const category: Category = await getCategory(project.category);

  return (
    <>
      <div className="mb-4">
        <Link href="/" className="mx-2">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="./" className="mx-2">
          {category.name}
        </Link>{" "}
        &gt;{" "}
        <Link href={`${project.slug}`} className="ml-2">
          {project.name}
        </Link>
      </div>

      <div className={heroWrapper}>
        <Image
          priority
          src={`${process.env.IMAGE_URL}/${project.image}`}
          className={heroImage}
          fill
          alt={`${project.name} image`}
        />
      </div>
      <H1>{project.name}</H1>
      <H2>Summary</H2>
      <P>{project.summary}</P>
      <H2>Technology</H2>
      <ul className="list-disc">
        {project.technology.map((technology: string) => (
          <Link
            href={`/projects-built-with/${technology}`}
            key={technology}
            className="mr-2 my-4 py-2 px-4 bg-white inline-block text-black"
          >
            {technology}
          </Link>
        ))}
      </ul>
    </>
  );
}
