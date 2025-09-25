import { http, HttpResponse, delay } from "msw";

export const handlers = [
    http.get('https://api.myexampleserver.com/products/1', async () => {
        await delay(1500); // Simulate network delay
        return HttpResponse.json({
            imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/59d928a0-3627-4668-afd6-39db285a6715.jpg;maxHeight=1080;maxWidth=900?format=webp",
            name: "Samsung TV",
            description: "This is a really fancy product.",
            price: "$19.99",
            numAvailable: 6,
        });
    }),
];