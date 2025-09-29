import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/lib/api/api-client";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                    <CardAction>
                        <Button asChild variant="link" size="sm">
                            <Link href={`/products/${product.id}`}>View Product</Link>
                        </Button>
                    </CardAction>
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