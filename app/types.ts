export type Category = {
    slug: string
    name: string
}

export type Project = {
    slug: string,
    date_created: Date,
    date_updated: Date,
    name: string,
    category: string,
    image: string
    summary: string,
}

export type Categories = Category[]

export type Projects = Project[]