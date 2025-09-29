export interface Product {
    id: number;
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

export async function fetchProducts(query: string = ''): Promise<Product[]> {
    const url = new URL('https://api.myexampleserver.com/products');
    if (query) {
        url.searchParams.append('query', query);
    }
    const response = await fetch(url.toString());
    return response.json();
}