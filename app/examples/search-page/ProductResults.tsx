'use client'

import { useSearchParams } from 'next/navigation';
import ProductCard from "./ProductCard";
import { Product } from "@/lib/api/api-client";

export default function ProductResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';

    function searchProducts(query: string): Product[] {
        console.log("Searching for products with query:", query);

        const mockProducts: Product[] = [
            { imageUrl: "", name: "Wireless Headphones", description: "Premium noise-canceling headphones", price: "$199.99", numAvailable: 15 },
            { imageUrl: "", name: "Smart Watch", description: "Fitness tracking and notifications", price: "$299.99", numAvailable: 8 },
            { imageUrl: "", name: "Laptop Stand", description: "Ergonomic aluminum stand", price: "$49.99", numAvailable: 25 },
            { imageUrl: "", name: "Mechanical Keyboard", description: "RGB backlit gaming keyboard", price: "$129.99", numAvailable: 12 },
            { imageUrl: "", name: "USB-C Hub", description: "7-in-1 multiport adapter", price: "$39.99", numAvailable: 30 },
            { imageUrl: "", name: "Webcam 4K", description: "Ultra HD streaming camera", price: "$149.99", numAvailable: 6 },
            { imageUrl: "", name: "Desk Mat", description: "Large extended mouse pad", price: "$24.99", numAvailable: 50 },
            { imageUrl: "", name: "Phone Stand", description: "Adjustable aluminum holder", price: "$19.99", numAvailable: 40 },
            { imageUrl: "", name: "Cable Organizer", description: "Desktop cable management system", price: "$14.99", numAvailable: 100 }
        ];
        return mockProducts;
    }

    const products = searchProducts(query);

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}