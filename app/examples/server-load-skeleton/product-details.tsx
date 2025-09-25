'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadProduct, Product } from "@/lib/api/api-client";
import Image from "next/image";

export default function ProductDetails() {
    const product = loadProduct().data;

    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                <div className="">
                    <Card className="h-full">
                        <CardContent className="flex items-center justify-center p-6">
                            <Image src={product.imageUrl} alt={product.name} width={400} height={200} />
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-4">
                   <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>
                            <h2 className="text-xl font-bold">{product.name}</h2>
                        </CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-3xl font-semibold">{product.price}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                {product.numAvailable} in stock
                            </p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <Button>Add to Cart</Button>
                            <Button variant="secondary">Buy Now</Button>
                        </div>
                    </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
