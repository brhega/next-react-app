'use client'

import { useSearchParams } from 'next/navigation';
import ProductCard from "./ProductCard";
import { fetchProducts, Product } from "@/lib/api/api-client";
import { useQuery, keepPreviousData } from '@tanstack/react-query';

export default function ProductResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';

    const { data: products, isLoading } = useQuery<Product[]>({
        queryKey: ['products', query],
        queryFn: () => fetchProducts(query),
        placeholderData: keepPreviousData
    });

    return (
        <div className="grid grid-cols-3 gap-4">
            {(products || []).map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}