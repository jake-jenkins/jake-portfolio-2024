export default function Block({ children }: { children: any }) {
  return (
    <div className="bg-slate-800 bg-opacity-40 border-slate-400 border p-8 rounded-2xl">
      {children}
    </div>
  );
}
