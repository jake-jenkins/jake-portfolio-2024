import prisma from "../lib/primsa";

export async function getCategories() {
    const categories = await prisma.Category.findMany()
    return categories
}

export async function getProjectByCategory(categorySlug: string) {
    const projects = await prisma.Project.findMany({
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