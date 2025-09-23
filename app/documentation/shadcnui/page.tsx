import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function ShadcnUIPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Shadcn/ui
                </h3>
            </div>

            <div className="my-4">
                <a href="https://ui.shadcn.com/docs" target="_blank" className="text-blue-600 underline">Official Site</a>
            </div>

            <p className="mt-4">
                Shadcn/ui is a component library for building user interfaces in React. It provides a set of high-quality, reusable components that are easy to integrate into your projects.
            </p>

            <div className="my-4">
                <p>Before using a component, it must be installed.  This will place the component in the app/components/ui/ directory.  It can now be imported in your components.</p>
                <CodeBlock 
                    language="bash"
                    code="npx shadcn@latest add button"
                    title="Add a Button Component"
                />
            </div>
        </div>
    );
}