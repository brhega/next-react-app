import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function TailwindPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Tailwind CSS
                </h3>
            </div>

            <div className="my-4">
                <a href="https://tailwindcss.com/docs" target="_blank" className="text-blue-600 underline">Official Documentation</a>
            </div>

            <p className="mt-4">
                Tailwind CSS is a utility-first CSS framework that provides low-level utility classes
                to build custom designs without writing custom CSS.
            </p>

            <div className="my-4">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Key Benefits</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Utility-first approach for rapid development</li>
                    <li>Highly customizable design system</li>
                    <li>Responsive design out of the box</li>
                    <li>Automatic purging of unused CSS</li>
                    <li>Dark mode support</li>
                </ul>
            </div>

            <div className="my-4">
                <p>Install Tailwind CSS in a Next.js project:</p>
                <CodeBlock
                    language="bash"
                    code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
                    title="Installation"
                />
            </div>
        </div>
    );
}