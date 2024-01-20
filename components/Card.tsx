import Link from "next/link";

export default function Card({
  link,
  children,
}: {
  link: string;
  children: any;
}) {
  return (
    <Link
      href={link}
      className="hover:border-white bg-slate-800 bg-opacity-40 rounded-2xl border-slate-400 border px-16 py-16 text-center text-3xl font-extrabold"
    >
      {children}
    </Link>
  );
}
