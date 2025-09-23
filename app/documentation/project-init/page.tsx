import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link";

export default function ProjectInitPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Project Initialization
                </h3>
            </div>

            <div className="my-4">
                <CodeBlock 
                    language="bash"
                    code="npx create-next-app@latest next-react-app --yes"
                    title="Create the Next.js app"
                />
            </div>

            <div className="my-4">
                <CodeBlock 
                    language="bash"
                    code="npx shadcn@latest init"
                    title="Initialize shadcn/ui in your project"
                />
            </div>
        </div>
    );
}
