import { getCategories, getProjects, getTags } from "./actions";
import { Categories, Category, Project, Projects } from "./types";

export const baseUrl = "https://www.jake1.net"

function buildEntry(item: any, frequency: string, priority: number, basePath?: string) {
    return {
        url: basePath ? `${baseUrl}/${basePath}/${item.slug}` : `${baseUrl}/${item.slug}`,
        lastModified: item.date_updated || item.date_created || new Date(),
        changeFrequency: frequency,
        priority,
    }
}

async function buildSiteMap() {
    let urls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        }
    ]

    const categories: Categories = await getCategories()

    categories.map((category: Category) => {
        let res = buildEntry(category, "daily", 0.8)
        urls.push(res)
    })

    const projects: Projects = await getProjects()

    projects.map((project: Project) => {
        let res = buildEntry(project, "weekly", 0.5, project.category)
        urls.push(res)
    })

    const tags = await getTags()

    tags.map((tag) => {
        let res = buildEntry({ slug: `projects-built-with/${tag}` }, "weekly", 0.5)
        urls.push(res)
    })

    return urls
}


export default async function sitemap() {
    const sitemap = await buildSiteMap()
    return sitemap
}