import CodeBlock from "@/components/code-block";
import Link from "next/link";

export default function ProjectInitPage() {
    return (
        <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Project Initialization
            </h3>

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
