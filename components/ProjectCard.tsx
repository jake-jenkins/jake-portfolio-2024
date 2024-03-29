import Link from "next/link";
import Image from "next/image";
import { H2, P } from "./Typography";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link
      href={`/${project.category}/${project.slug}`}
      className="bg-slate-800 bg-opacity-25 rounded-t-2xl rounded-b-3xl border border-white border-opacity-50"
    >
      <Image
        className="rounded-t-2xl"
        src={`${process.env.IMAGE_URL}/${project.image}`}
        width={600}
        height={400}
        alt={`${project.name} image`}
      />
      <div className="p-4">
        <div className="h-24 flex items-center">
          <H2>{project.name}</H2>
        </div>

        <P>{project.summary}</P>
      </div>
    </Link>
  );
}
