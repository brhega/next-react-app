import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function ClientSideNavigationPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/examples">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Client Side Navigation
                </h3>
            </div>

            <div className="my-4">
                 <p className="mb-2">
                    <strong>Traditional HTML Anchor:</strong> Triggers a full page reload. The browser makes a complete HTTP request to the server, 
                    receives the entire HTML document, and replaces the current page. This causes the browser to lose all JavaScript state, 
                    re-parse CSS, and re-execute all scripts. You'll see the browser's loading indicator activate.
                </p>
                <CodeBlock 
                    language="html"
                    code={'<a href="/\">Home</a>'}
                />
                <div className="my-3">
                    <Button asChild>
                        <a href="/">Home</a>
                    </Button>
                </div>
                <p className="mb-2 mt-6">
                    <strong>Next.js Link Component:</strong> Performs client-side navigation using the router. Only fetches the necessary data/components 
                    for the new page while keeping the JavaScript application running. Preserves application state, provides instant navigation 
                    with no full reload, and prefetches the page in the background for even faster transitions. The URL updates without a browser refresh.
                </p>
                <CodeBlock 
                    language="html"
                    code={'<Link href="/">Home</Link>'}
                />
                <div className="my-3">
                    <Button asChild>
                        <Link href="/">Home</Link>
                    </Button>
                </div>
            </div>

            <div>
                <p>Prefetching doesn't work the same when running the app in development mode.  But if this is running in production, look at the difference in the "Network" tab contents after clicking each link.</p>
            </div>
        </div>
    );
}