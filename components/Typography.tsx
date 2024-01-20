export const H1 = ({ children, xL }: { children: any; xL?: boolean }) => (
    <>
      {xL ? (
        <h1 className="text-5xl md:text-8xl font-bold mb-3">{children}</h1>
      ) : (
        <h1 className="text-4xl md:text-6xl font-bold mb-3">{children}</h1>
      )}
    </>
  );
  
  export const H2 = ({ children }: { children: any }) => (
    <h2 className="text-3xl lg:text-4xl font-bold text-light dark:text-dark">
      {children}
    </h2>
  );
  
  export const P = ({ children }: { children: any }) => (
    <p className="my-4">{children}</p>
  );