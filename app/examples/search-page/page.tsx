import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import ProductResults from "./ProductResults";
import SearchBar from "./SearchBar";

export default function Page() {
    return (
        <div>
            <div className="flex gap-4">
                <Button asChild variant="secondary" size="icon" className="size-8">
                    <Link href="/examples">
                        <ChevronLeftIcon />
                    </Link> 
                </Button>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Search Page
                </h3>
            </div>

            <div className="mt-8 mb-16">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    In this example I want to demonstrate (in progress):
                </h3>
                <ul>
                    <li>A search page with typeahead suggestions</li>
                    <li>Mocking api request for search results</li>
                    <li>Using debounce to limit api requests</li>
                    <li>Practice breaking up a page into smaller components</li>
                </ul>
            </div>

            <Suspense fallback={<div>Loading search...</div>}>
                <SearchBar />
            </Suspense>

            <div className="my-16">
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductResults />
                </Suspense>
            </div>
        </div>
    );
}