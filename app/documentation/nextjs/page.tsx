import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NextJSPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Next.js
                </h3>
            </div>

            <div className="my-4">
                <a href="https://nextjs.org/docs" target="_blank" className="text-blue-600 underline">Official Documentation</a>
            </div>

            <p className="mt-4">
                Next.js is a React framework that provides production-ready features like server-side rendering,
                static site generation, and automatic code splitting out of the box.
            </p>

            <div className="my-4">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>App Router with nested layouts and server components</li>
                    <li>Built-in CSS and Sass support</li>
                    <li>API routes for backend functionality</li>
                    <li>Automatic image optimization</li>
                    <li>TypeScript support</li>
                </ul>
            </div>

            <div className="my-4">
                <p>Create a new Next.js project:</p>
                <CodeBlock
                    language="bash"
                    code="npx create-next-app@latest my-app"
                    title="Create Next.js App"
                />
            </div>
        </div>
    );
}