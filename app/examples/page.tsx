import Link from "next/link";

export default function ExamplesPage() {
    return (
        <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Examples
            </h2>
            <div className="my-4">
                <div>
                    <Link href="/examples/client-side-navigation" className="text-blue-600 underline">Client Side Navigation</Link>
                </div>
                <div>
                    <Link href="/examples/basic-form" className="text-blue-600 underline">Basic Form</Link>
                </div>
                <div>
                    <Link href="/examples/react-hook-form" className="text-blue-600 underline">React Hook Form</Link>
                </div>
            </div>
        </div>
    );
}