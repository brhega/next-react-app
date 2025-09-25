import Link from "next/link";

export default function Home() {
  const tools = [
    {
      name: "Next.js",
      description: "React framework for production",
      href: "/documentation/nextjs"
    },
    {
      name: "React",
      description: "JavaScript library for user interfaces",
      href: "/documentation/react"
    },
    {
      name: "Shadcn/ui",
      description: "Component library for React",
      href: "/documentation/shadcnui"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      href: "/documentation/tailwind"
    },
    {
      name: "Mock Service Worker",
      description: "API mocking library",
      href: "/documentation/msw"
    },
    {
      name: "TanStack Query",
      description: "Data fetching and caching library",
      href: "/documentation/tanstack-query"
    }
  ];

  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-8">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-4">Next.js and React Sample App</h1>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-balance">
          This is a sample project site dedicated to learning Next.js and React.
          It's focused around best practices, key concepts, and tools to know while building with a modern JS framework.
        </h3>
      </div>

      <div className="mt-12">
        <h2 className="scroll-m-20 text-2xl font-bold tracking-tight text-center mb-8">Learning Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{tool.name}</h5>
              <p className="font-normal text-gray-700">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
