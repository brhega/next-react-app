export interface Product {
    imageUrl: string;
    name: string;
    description: string;
    price: string;
    numAvailable: number;
}

export async function fetchProduct(id: number = 1): Promise<Product> {
    const response = await fetch(`https://api.myexampleserver.com/products/${id}`);
    return response.json();
}