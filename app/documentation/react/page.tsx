import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function ReactPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    React
                </h3>
            </div>

            <div className="my-4">
                <a href="https://react.dev/learn" target="_blank" className="text-blue-600 underline">Official Documentation</a>
            </div>

            <p className="mt-4">
                React is a JavaScript library for building user interfaces. It uses a component-based architecture
                and virtual DOM for efficient updates.
            </p>

            <div className="my-4">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Core Concepts</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Components and JSX</li>
                    <li>Props and State</li>
                    <li>Event handling</li>
                    <li>Conditional rendering</li>
                </ul>
            </div>
        </div>
    );
}