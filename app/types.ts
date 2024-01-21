export type Category = {
    slug: string
    name: string
    projects: Project[]
}

export type Project = {
    id: string,
    slug: string,
    name: string,
    category: Category,
    categorySlug: string,
    summary: string,
    technology: Technology[],
    image: string
}

export type Technology = {
    name: string,
    project: Project[]
}