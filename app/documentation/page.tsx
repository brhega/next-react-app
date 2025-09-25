import Link from "next/link";

export default function DocumentationPage() {
    return (
        <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Documentation</h2>

            <div className="my-6">
                <Link href="/documentation/project-init" className="text-blue-600 underline hover:text-blue-800">Project Initialization</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">Framework & Library</h3>
                    <div className="space-y-3">
                        <div>
                            <Link href="/documentation/nextjs" className="text-blue-600 underline hover:text-blue-800 text-lg">Next.js</Link>
                            <p className="text-sm text-gray-600 mt-1">React framework for production</p>
                        </div>
                        <div>
                            <Link href="/documentation/react" className="text-blue-600 underline hover:text-blue-800 text-lg">React</Link>
                            <p className="text-sm text-gray-600 mt-1">JavaScript library for user interfaces</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">UI & Styling</h3>
                    <div className="space-y-3">
                        <div>
                            <Link href="/documentation/shadcnui" className="text-blue-600 underline hover:text-blue-800 text-lg">Shadcn/ui</Link>
                            <p className="text-sm text-gray-600 mt-1">Component library for React</p>
                        </div>
                        <div>
                            <Link href="/documentation/tailwind" className="text-blue-600 underline hover:text-blue-800 text-lg">Tailwind CSS</Link>
                            <p className="text-sm text-gray-600 mt-1">Utility-first CSS framework</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">Data & API</h3>
                    <div className="space-y-3">
                        <div>
                            <Link href="/documentation/tanstack-query" className="text-blue-600 underline hover:text-blue-800 text-lg">TanStack Query</Link>
                            <p className="text-sm text-gray-600 mt-1">Data fetching and caching library</p>
                        </div>
                        <div>
                            <Link href="/documentation/msw" className="text-blue-600 underline hover:text-blue-800 text-lg">Mock Service Worker</Link>
                            <p className="text-sm text-gray-600 mt-1">API mocking library</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}