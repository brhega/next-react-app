import { http, HttpResponse, delay } from "msw";
import { Product } from "../api-client";

const mockProducts: Product[] = [
    {
        id: 1,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/59d928a0-3627-4668-afd6-39db285a6715.jpg;maxHeight=1080;maxWidth=900?format=webp",
        name: "Samsung 65\" 4K Smart TV",
        description: "Experience stunning picture quality with this 65-inch 4K Smart TV.",
        price: "$899.99",
        numAvailable: 6,
    },
    {
        id: 2,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/wireless-headphones.jpg",
        name: "Sony WH-1000XM5 Headphones",
        description: "Premium noise-cancelling wireless headphones with exceptional sound quality.",
        price: "$399.99",
        numAvailable: 15,
    },
    {
        id: 3,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/laptop.jpg",
        name: "MacBook Pro 14\"",
        description: "Powerful laptop with M3 Pro chip, perfect for professionals.",
        price: "$1,999.99",
        numAvailable: 8,
    },
    {
        id: 4,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/gaming-console.jpg",
        name: "PlayStation 5",
        description: "Next-gen gaming console with incredible graphics and performance.",
        price: "$499.99",
        numAvailable: 3,
    },
    {
        id: 5,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/smartwatch.jpg",
        name: "Apple Watch Series 9",
        description: "Advanced health and fitness tracking with a beautiful always-on display.",
        price: "$429.99",
        numAvailable: 12,
    },
    {
        id: 6,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/tablet.jpg",
        name: "iPad Air 11\"",
        description: "Lightweight and powerful tablet for work and play.",
        price: "$599.99",
        numAvailable: 20,
    },
    {
        id: 7,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/speaker.jpg",
        name: "Sonos Arc Soundbar",
        description: "Premium soundbar with Dolby Atmos for immersive audio.",
        price: "$899.99",
        numAvailable: 7,
    },
    {
        id: 8,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/camera.jpg",
        name: "Canon EOS R6 Mark II",
        description: "Professional mirrorless camera with 24.2MP full-frame sensor.",
        price: "$2,499.99",
        numAvailable: 4,
    },
    {
        id: 9,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/phone.jpg",
        name: "iPhone 15 Pro",
        description: "Latest iPhone with titanium design and powerful A17 Pro chip.",
        price: "$999.99",
        numAvailable: 25,
    },
    {
        id: 10,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/monitor.jpg",
        name: "LG 27\" 4K Monitor",
        description: "Ultra HD monitor with HDR support for stunning visuals.",
        price: "$449.99",
        numAvailable: 10,
    },
    {
        id: 11,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/keyboard.jpg",
        name: "Logitech MX Keys",
        description: "Wireless keyboard with smart illumination and comfortable typing.",
        price: "$99.99",
        numAvailable: 30,
    },
    {
        id: 12,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/mouse.jpg",
        name: "Logitech MX Master 3S",
        description: "Premium wireless mouse with precise tracking and ergonomic design.",
        price: "$99.99",
        numAvailable: 28,
    },
    {
        id: 13,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/router.jpg",
        name: "ASUS WiFi 6E Router",
        description: "High-performance router with next-gen WiFi 6E technology.",
        price: "$349.99",
        numAvailable: 14,
    },
    {
        id: 14,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ssd.jpg",
        name: "Samsung 2TB NVMe SSD",
        description: "Ultra-fast storage with read speeds up to 7,000 MB/s.",
        price: "$149.99",
        numAvailable: 45,
    },
    {
        id: 15,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/webcam.jpg",
        name: "Logitech Brio 4K Webcam",
        description: "Professional webcam with 4K video and HDR support.",
        price: "$199.99",
        numAvailable: 18,
    },
    {
        id: 16,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/microphone.jpg",
        name: "Blue Yeti USB Microphone",
        description: "Professional USB microphone for streaming and recording.",
        price: "$129.99",
        numAvailable: 22,
    },
    {
        id: 17,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/drone.jpg",
        name: "DJI Mini 4 Pro",
        description: "Compact drone with 4K camera and intelligent flight modes.",
        price: "$759.99",
        numAvailable: 9,
    },
    {
        id: 18,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/printer.jpg",
        name: "HP LaserJet Pro",
        description: "Fast and reliable wireless laser printer for home or office.",
        price: "$279.99",
        numAvailable: 11,
    },
    {
        id: 19,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/earbuds.jpg",
        name: "AirPods Pro (2nd Gen)",
        description: "Premium wireless earbuds with active noise cancellation.",
        price: "$249.99",
        numAvailable: 35,
    },
    {
        id: 20,
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/charger.jpg",
        name: "Anker 100W GaN Charger",
        description: "Compact multi-port charger with fast charging for all devices.",
        price: "$79.99",
        numAvailable: 50,
    },
];

export const handlers = [
    http.get('https://api.myexampleserver.com/products/:id', async ({ params }) => {
        await delay(1500); // Simulate network delay
        const id = parseInt(params.id as string);
        const product = mockProducts.find(p => p.id === id);

        if (!product) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(product);
    }),
    http.get('https://api.myexampleserver.com/products', async ({ request }) => {
        await delay(750); // Simulate network delay
        const url = new URL(request.url);
        const query = url.searchParams.get('query')?.toLowerCase() || '';

        const results = mockProducts.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        return HttpResponse.json(results);
    }),
];