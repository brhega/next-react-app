import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function TanStackQueryPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    TanStack Query
                </h3>
            </div>

            <div className="my-4">
                <a href="https://tanstack.com/query/latest" target="_blank" className="text-blue-600 underline">Official Documentation</a>
            </div>

            <p className="mt-4">
                TanStack Query (formerly React Query) is a powerful data-fetching library that provides caching,
                synchronization, and error handling for server state management in React applications.
            </p>

            <div className="my-4">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Automatic caching and background refetching</li>
                    <li>Request deduplication</li>
                    <li>Optimistic updates</li>
                    <li>Pagination and infinite queries</li>
                    <li>Error handling and retry logic</li>
                </ul>
            </div>

            <div className="my-4">
                <p>Install TanStack Query:</p>
                <CodeBlock
                    language="bash"
                    code="npm i @tanstack/react-query"
                    title="Installation"
                />
            </div>
        </div>
    );
}