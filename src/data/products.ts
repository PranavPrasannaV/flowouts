export interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    image: string;
    colors?: string[];
}

export const products: Product[] = [
    { id: "1", name: "Animal Plushy", price: "$25.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/7303051550260819368_2048.jpg?v=1758601911" },
    { id: "2", name: "Beach Towel", price: "$35.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/3807659480818779022_2048.jpg?v=1758168568" },
    { id: "3", name: "Celestial Harmony Bracelet", price: "$20.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/156511146995249152.jpg?v=1758689056" },
    { id: "4", name: "Ceramic Coaster", price: "$15.00", category: "Home", image: "https://flowouts.com/cdn/shop/files/5795619905901191601_2048.jpg?v=1758168489" },
    { id: "5", name: "Custom Toddler's Long Sleeve", price: "$30.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/10868444877253443555_2048.jpg?v=1755380552" },
    { id: "6", name: "Elegant Modern Placemat", price: "$20.00", category: "Home", image: "https://flowouts.com/cdn/shop/files/5980339568742692486_2048.jpg?v=1758168067" },
    { id: "7", name: "Essential Cotton T-Shirt", price: "$35.00", category: "T-Shirts", image: "https://flowouts.com/cdn/shop/files/2d9ba9fd6f434953a8a3b1861eed84be.png?v=1763398158" },
    { id: "8", name: "Fleece Blanket", price: "$45.00", category: "Home", image: "https://flowouts.com/cdn/shop/files/8013691805102790315_2048.jpg?v=1758168783" },
    { id: "9", name: "Flow Phone Case", price: "$25.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/9580086008835725893_2048.jpg?v=1758252408" },
    { id: "10", name: "Insulated Water Bottle", price: "$30.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/6003680373957445845_2048.jpg?v=1758169012" },
    { id: "11", name: "Kid's Bee Cool T-Shirt", price: "$25.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/11993906624947676586_2048.jpg?v=1757355828" },
    { id: "12", name: "Kid's Embroidered Sweatshirt", price: "$40.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/6770082730265284708_2048.jpg?v=1757884948" },
    { id: "13", name: "Kid's Game Day Tee", price: "$25.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/8939123078964906113_2048.jpg?v=1758220174" },
    { id: "14", name: "Kid's Long Sleeve Tee", price: "$30.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/1358012620792639551_2048.jpg?v=1757885386" },
    { id: "15", name: "Kid's Pawsitive Tee", price: "$25.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/16993518394732728915_2048.jpg?v=1757355956" },
    { id: "16", name: "Kid's Plain Tee", price: "$20.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/4810955587630024950_2048.jpg?v=1757995052" },
    { id: "17", name: "Kid's Simplicity Hoodie", price: "$45.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/15079112872227844767_2048.jpg?v=1758041306" },
    { id: "18", name: "Kid's Unisex T-shirt", price: "$25.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/6572927489468605578_2048.jpg?v=1755542367" },
    { id: "19", name: "Men's High Top Canvas", price: "$55.00", category: "Shoes", image: "https://flowouts.com/cdn/shop/files/17850285132936033032_2048.jpg?v=1757360624" },
    { id: "20", name: "Men's Icon Crewneck Sweatshirt", price: "$75.00", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761" },
    { id: "25", name: "Santi", price: "$25.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/5750811090376071482_2048.jpg?v=1758688482" },
    { id: "26", name: "Shakti", price: "$25.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/9092125600326881756_2048.jpg?v=1758688849" },
    { id: "27", name: "Simple Backpack", price: "$40.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/14139453879712394899_2048.jpg?v=1757360563" },
    { id: "28", name: "Spiral Notebook", price: "$15.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/9251974657531631620_2048.jpg?v=1755376785" },
    { id: "29", name: "Sraddha", price: "$25.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/4044625100820844124_2048.jpg?v=175868897" },
    { id: "30", name: "Stainless Steel Water Bottle", price: "$25.00", category: "Accessories", image: "https://flowouts.com/cdn/shop/files/4362661534882118433_2048.jpg?v=1758169225" },
    { id: "31", name: "Toddler's Bee Cool T-Shirt", price: "$20.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/4677978064975148151_2048.jpg?v=1757355700" },
    { id: "32", name: "Toddler's Game Day Tee", price: "$20.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/405130485103688241_2048.jpg?v=1758220023" },
    { id: "33", name: "Toddler's Kindergarten Rocks Tee", price: "$20.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/8972121553838753077_2048.jpg?v=1755800033" },
    { id: "34", name: "Toddler's Long Sleeve Tee", price: "$25.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/865223395347864750_2048.jpg?v=1757885233" },
    { id: "35", name: "Toddler's Pawsitive Tee", price: "$20.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/15701747153336246468_2048.jpg?v=1757355883" },
    { id: "36", name: "Toddler's Plain Tee", price: "$18.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/2044141549423345103_2048.jpg?v=1757994849" },
    { id: "37", name: "Toddler's Simplicity Sweatshirt", price: "$30.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/17429923658399186_2048.jpg?v=1758040974" },
    { id: "38", name: "Toddler's Simplicity Tee", price: "$20.00", category: "Kids", image: "https://flowouts.com/cdn/shop/files/17343490599143744015_2048.jpg?v=1758040713" },
    { id: "39", name: "Unisex Be Kind Tee", price: "$30.00", category: "T-Shirts", image: "https://flowouts.com/cdn/shop/files/10014795168014931179_2048.jpg?v=1757271457" },
    { id: "40", name: "Unisex Bloom Hoodie", price: "$65.00", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/12883155825177698600_2048.jpg?v=1760411786" },
    { id: "41", name: "Unisex Bloom Sweatshirt", price: "$60.00", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/2146985109198489075_2048.jpg?v=1760412030" },
    { id: "42", name: "Unisex Bloom Tee", price: "$35.00", category: "T-Shirts", image: "https://flowouts.com/cdn/shop/files/16288427630593147062_2048.jpg?v=1760411429" },
    { id: "43", name: "Unisex Bloom Zip Up", price: "$70.00", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/7953914014705719964_2048.jpg?v=1760411956" },
    { id: "44", name: "Unisex Chef Clinched Sweatpants", price: "$65.00", category: "Pants", image: "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1766264660" },
    { id: "45", name: "Unisex Chef Drawstring Sweatpants", price: "$60.00", category: "Pants", image: "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1766264426" },
    { id: "46", name: "Unisex Chef Straight Leg Sweatpants", price: "$60.00", category: "Pants", image: "https://flowouts.com/cdn/shop/files/216b398c4c504279bb4401743fa3e1f2.png?v=1766264560" },
    { id: "47", name: "Unisex Chef's Flowers Oversized Hoodie - Darks", price: "$75.00", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1766265005" },
    { id: "48", name: "Unisex Chef's Flowers Oversized Hoodie - Lights", price: "$75.00", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/e69a84747b0647a8ab85a55b0d3ecf16.png?v=1766265064" },
    { id: "85", name: "Unisex Vintage Oversized Hoodie", price: "$80.00", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/b7de01e2cb7d4f3eb0c20f5336be7ed6.png?v=1766262961" }
];

export const essentialsCollection = products.filter(p =>
    p.name.includes("Essential") ||
    p.name.includes("Icon") ||
    p.name.includes("Simplicity")
);
