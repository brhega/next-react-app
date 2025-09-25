import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

export interface Product {
    imageUrl: string;
    name: string;
    description: string;
    price: string;
    numAvailable: number;
}

// export function loadProduct() {
//     return new Promise<Product>((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/59d928a0-3627-4668-afd6-39db285a6715.jpg;maxHeight=1080;maxWidth=900?format=webp",
//                 name: "Samsung TV",
//                 description: "This is a really fancy product.",
//                 price: "$19.99",
//                 numAvailable: 6,
//             });
//         }, 3000);
//     });
// }

export function loadProduct() {
    const { isPending, error, data } = useQuery<Product>({
        queryKey: ["product"],
        queryFn: () =>
        fetch('https://api.myexampleserver.com/products/1').then(res =>
            res.json() as Promise<Product>
        )
    });

    return { isPending, error, data };
}