import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="">
                <Skeleton className="h-50 w-full" />
            </div>
            <div className="flex flex-col gap-4">
                <Skeleton className="h-8 w-[200px]" />
                <Skeleton className="h-8 w-[200px]" />
                <Skeleton className="h-8 w-[250px]" />
            </div>
        </div>
    );
}