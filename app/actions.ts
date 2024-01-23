import { Categories, Category, Project, Projects } from "./types";

export async function getCategories(): Promise<Categories> {
    const data = await fetch(`${process.env.BACKEND}/items/category`, {
        next: { revalidate: 300 },
    });
    const categories = await data.json();
    return categories.data;
}

export async function getCategory(categorySlug: string): Promise<Category> {
    const data = await fetch(
        `${process.env.BACKEND}/items/category/${categorySlug}`,
        {
            next: { revalidate: 300 },
        }
    );
    const category = await data.json();
    return category.data;
}

export async function getProjects(): Promise<Projects> {
    const data = await fetch(
        `${process.env.BACKEND}/items/project`,
        {
            next: { revalidate: 300 },
        }
    );
    const projects = await data.json();
    return projects.data;
}

export async function getProjectsByCategory(projectSlug: string): Promise<Projects> {
    const data = await fetch(
        `${process.env.BACKEND}/items/project?filter[category][_eq]=${projectSlug}`,
        {
            next: { revalidate: 300 },
        }
    );
    const projects = await data.json();
    return projects.data;
}

export async function getProject(projectSlug: string): Promise<Project> {
    const data = await fetch(
        `${process.env.BACKEND}/items/project/${projectSlug}`,
        {
            next: { revalidate: 300 },
        }
    );
    const project = await data.json();
    return project.data;
}