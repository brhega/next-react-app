import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/lib/api/api-client";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                    <CardAction>View Product</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Available: {product.numAvailable}</p>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground">{product.price}</p>
                </CardFooter>
            </Card>
        </div>
    );
}