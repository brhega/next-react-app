'use client'

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import ProductDetails from "./product-details";
import ProductDetailsSkeleton from "./product-details-skeleton";

export default function Page() {
    return (
    <div >
       <div className="flex gap-4">
            <Button asChild variant="secondary" size="icon" className="size-8">
                <Link href="/examples">
                    <ChevronLeftIcon />
                </Link> 
            </Button>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Server Load with Skeleton
            </h3>
        </div>

        <div className="mt-8 mb-16">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                In this example I want to demonstrate:
            </h3>
            <ul>
                <li>React component waiting on a server response</li>
                <li>Skeleton from Shadcn is shown while loading using React's Suspense</li>
                <li>The server request is put together via TanStack Query</li>
                <li>The server request is intercepted and the response is mocked via Mock Service Worker</li>
            </ul>
        </div>

        <div className="my-8">
            <Suspense fallback={<ProductDetailsSkeleton />}>
                <ProductDetails />
            </Suspense>
        </div>

    </div>
  );
}
