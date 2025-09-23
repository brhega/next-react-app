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
                <div>
                    <a href="/" className="text-blue-600 underline">Home</a>
                </div>
                <div>
                    <Link href="/" className="text-blue-600 underline">Home</Link>
                </div>
            </div>
        </div>
    );
}