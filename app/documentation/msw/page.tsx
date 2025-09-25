import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function MSWPage() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/documentation">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Mock Service Worker (MSW)
                </h3>
            </div>

            <div className="my-4">
                <a href="https://mswjs.io/docs/" target="_blank" className="text-blue-600 underline">Official Documentation</a>
            </div>

            <p className="mt-4">
                Mock Service Worker (MSW) is an API mocking library that intercepts requests at the network level,
                allowing you to mock APIs for development, testing, and debugging.
            </p>

            <div className="my-4">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Network-level request interception</li>
                    <li>Works in both browser and Node.js</li>
                    <li>TypeScript support</li>
                    <li>Request handlers for REST and GraphQL APIs</li>
                    <li>Seamless integration with testing frameworks</li>
                </ul>
            </div>

            <div className="my-4">
                <p>Install MSW:</p>
                <CodeBlock
                    language="bash"
                    code="npm i msw --save-dev"
                    title="Installation"
                />
            </div>

            <div className="my-4">
                <p>Basic REST API handler setup:</p>
                <CodeBlock
                    language="tsx"
                    code={`import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ]);
  }),

  http.post('/api/users', async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json(
      { id: 3, ...user },
      { status: 201 }
    );
  })
];`}
                    title="mocks/handlers.ts"
                />
            </div>

            <div className="my-4">
                <p>Browser setup for development:</p>
                <CodeBlock
                    language="tsx"
                    code={`import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Start the worker
worker.start();`}
                    title="mocks/browser.ts"
                />
            </div>
        </div>
    );
}