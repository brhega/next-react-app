import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-8">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Next.js and React Sample App</h1>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">This is a sample project site dedicated to learning Next.js and React.  
        It's focused around best practices, key concepts, and tools to know while building with a modern JS framework.
      </h3>
    </div>
  );
}
