import Link from "next/link";

export default function DocumentationPage() {
    return (
        <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Documentation</h2>
            <div className="my-4">
                <Link href="/documentation/project-init" className="text-blue-600 underline">Project Initialization</Link>
            </div>

            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Shadcn/ui</h4>
            <Link href="/documentation/shadcnui" className="text-blue-600 underline">Basics</Link>

        </div>
    );
}