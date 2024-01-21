import prisma from "../lib/primsa";
import { Category, Project } from "./types";

export async function getCategories() {
    const categories: Promise<Category[]> = await prisma.Category.findMany()
    return categories
}

export async function getCategory(slug: string) {
    const category: Promise<Category> = await prisma.Category.findFirst({
        where: {
            slug
        },
    })
    return category
}

export async function getProjectByCategory(categorySlug: string) {
    const projects: Promise<Project[]> = await prisma.Project.findMany({
        where: {
            categorySlug
        },
        select: {
            id: true,
            slug: true,
            name: true,
            summary: true,
            technology: true,
            image: true
        }
    })
    return projects
}