export const cars = [
    {
        id: 1,
        name: "Phantom GT-S",
        brand: "Apex",
        type: "Sports",
        price: 185000,
        condition: "New",
        specs: {
            engine: "4.0L V8 Biturbo",
            power: "650 HP",
            acceleration: "2.8s (0-100 km/h)",
            transmission: "8-Speed DCT"
        },
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        features: ["Carbon Ceramic Brakes", "Adaptive Suspension", "Lane Assist", "Premium Audio"]
    },
    {
        id: 2,
        name: "Lumina SUV",
        brand: "Vertex",
        type: "SUV",
        price: 95000,
        condition: "New",
        specs: {
            engine: "3.5L V6 Hybrid",
            power: "400 HP",
            acceleration: "5.5s (0-100 km/h)",
            transmission: "9-Speed Auto"
        },
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
        features: ["Panoramic Sunroof", "360 Camera", "Nappa Leather", "Air Suspension"]
    },
    {
        id: 3,
        name: "Zenith Executive",
        brand: "Stellar",
        type: "Sedan",
        price: 72000,
        condition: "Used",
        specs: {
            engine: "2.0L Turbo",
            power: "250 HP",
            acceleration: "6.2s (0-100 km/h)",
            transmission: "7-Speed DCT"
        },
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        features: ["Heated Seats", "Wireless Charging", "Blind Spot Monitor", "Matrix LED"]
    }
];

export const services = [
    {
        id: "general",
        title: "General Service",
        icon: "fas fa-tools",
        desc: "Comprehensive check-up and maintenance for peak performance."
    },
    {
        id: "engine",
        title: "Engine Diagnostics",
        icon: "fas fa-microchip",
        desc: "Advanced computer diagnostics to identify and fix engine issues."
    },
    {
        id: "oil",
        title: "Oil & Filter Change",
        icon: "fas fa-oil-can",
        desc: "Premium synthetic oil replacement to protect your engine."
    },
    {
        id: "brakes",
        title: "Brake Repair",
        icon: "fas fa-stop-circle",
        desc: "Expert brake pad, rotor, and fluid services for your safety."
    }
];
