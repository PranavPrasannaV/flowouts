import { Product } from "./products";

export interface Collection {
    id: string;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    image: string;
    products: Product[];
}

// Rise Collection - Minimalist streetwear with "Rise" text and rose/flower icons
export const riseCollection: Product[] = [
    { id: "rise-1", name: "Unisex Oversized Rise Icon Fleece - Lights", price: "$36.00", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761" },
    { id: "rise-2", name: "Unisex Rise Icon Clinched Sweatpants", price: "$35.50", category: "Pants", image: "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1766264660" },
    { id: "rise-3", name: "Essential Cotton T-Shirt", price: "$24.00", category: "T-Shirts", image: "https://flowouts.com/cdn/shop/files/2d9ba9fd6f434953a8a3b1861eed84be.png?v=1763398158" },
    { id: "rise-4", name: "Unisex Oversized Rise Hoodie - Lights", price: "$37.50", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/e69a84747b0647a8ab85a55b0d3ecf16.png?v=1766265064" },
    { id: "rise-5", name: "Unisex Oversized Rise Hoodie - Darks", price: "$37.50", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1766265005" },
    { id: "rise-6", name: "Unisex Rise Icon Tee - Lights", price: "$21.00", category: "T-Shirts", image: "https://flowouts.com/cdn/shop/files/16288427630593147062_2048.jpg?v=1760411429" },
    { id: "rise-7", name: "Unisex Rise Icon Tee", price: "$21.00", category: "T-Shirts", image: "https://flowouts.com/cdn/shop/files/10014795168014931179_2048.jpg?v=1757271457" },
    { id: "rise-8", name: "Unisex Rise Icon Sweatpants", price: "$35.00", category: "Pants", image: "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1766264426" },
    { id: "rise-9", name: "Unisex Oversized Rise Icon Fleece - Darks", price: "$36.00", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/b7de01e2cb7d4f3eb0c20f5336be7ed6.png?v=1766262961" },
];

// The Chef Collection - Chef theme with Chef hats and flowers
export const chefCollection: Product[] = [
    { id: "chef-1", name: "Unisex Flower Icon Oversized Hoodie", price: "$36.00", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/12883155825177698600_2048.jpg?v=1760411786" },
    { id: "chef-2", name: "Unisex Flower Clinched Sweatpants", price: "$35.50", category: "Pants", image: "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1766264660" },
    { id: "chef-3", name: "Unisex Flower Straight Leg Sweatpants", price: "$32.50", category: "Pants", image: "https://flowouts.com/cdn/shop/files/216b398c4c504279bb4401743fa3e1f2.png?v=1766264560" },
    { id: "chef-4", name: "Unisex Chef Straight Leg Sweatpants", price: "$32.50", category: "Pants", image: "https://flowouts.com/cdn/shop/files/216b398c4c504279bb4401743fa3e1f2.png?v=1766264560" },
    { id: "chef-5", name: "Unisex Chef Drawstring Sweatpants", price: "$30.50", category: "Pants", image: "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1766264426" },
    { id: "chef-6", name: "Unisex Chef Clinched Sweatpants", price: "$33.99", category: "Pants", image: "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1766264660" },
    { id: "chef-7", name: "Unisex Chef's Flowers Oversized Hoodie - Lights", price: "$37.50", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/e69a84747b0647a8ab85a55b0d3ecf16.png?v=1766265064" },
    { id: "chef-8", name: "Unisex Chef's Flowers Oversized Hoodie - Darks", price: "$37.50", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1766265005" },
];

// Essentials: Within Reach Collection - Edgy streetwear with splatter paint patterns
export const essentialsWithinReachCollection: Product[] = [
    { id: "ess-1", name: "Unisex Splatter Clinched Sweatpants", price: "$27.65", category: "Pants", image: "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1766264660" },
    { id: "ess-2", name: "Unisex Splatter Jogged Sweatpants", price: "$26.60", category: "Pants", image: "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1766264426" },
    { id: "ess-3", name: "Men's Icon Crewneck Sweatshirt", price: "$29.60", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761" },
    { id: "ess-4", name: "Men's Splatter Crewneck Sweatshirt", price: "$28.60", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/2146985109198489075_2048.jpg?v=1760412030" },
    { id: "ess-5", name: "Women's Splatter Mock-Neck Crew Sweatshirt", price: "$28.60", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761" },
    { id: "ess-6", name: "Men's Vintage Crewneck Sweatshirt", price: "$28.60", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/2146985109198489075_2048.jpg?v=1760412030" },
    { id: "ess-7", name: "Women's Vintage Mock-Neck Crew Sweatshirt", price: "$29.60", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761" },
    { id: "ess-8", name: "Unisex Vintage Oversized Hoodie", price: "$25.70", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/b7de01e2cb7d4f3eb0c20f5336be7ed6.png?v=1766262961" },
    { id: "ess-9", name: "Women's Within Reach Mock-Neck Crew Sweatshirt", price: "$29.60", category: "Sweatshirts", image: "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761" },
    { id: "ess-10", name: "Unisex Splatter Drawstring Sweatpants", price: "$23.60", category: "Pants", image: "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1766264426" },
    { id: "ess-11", name: "Unisex Splatter Straight-Leg Sweatpants", price: "$24.65", category: "Pants", image: "https://flowouts.com/cdn/shop/files/216b398c4c504279bb4401743fa3e1f2.png?v=1766264560" },
    { id: "ess-12", name: "Unisex Oversized Within Reach Hoodie - Darks", price: "$27.20", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1766265005" },
    { id: "ess-13", name: "Unisex Oversized Within Reach Hoodie", price: "$27.20", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/e69a84747b0647a8ab85a55b0d3ecf16.png?v=1766265064" },
    { id: "ess-14", name: "Unisex Oversized Essentials Splatter Hoodie - Darks", price: "$25.70", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1766265005" },
    { id: "ess-15", name: "Unisex Oversized Essentials Splatter Hoodie", price: "$25.70", category: "Hoodies", image: "https://flowouts.com/cdn/shop/files/12883155825177698600_2048.jpg?v=1760411786" },
];

// Collection metadata
export const collections: Collection[] = [
    {
        id: "rise",
        name: "Rise",
        slug: "rise",
        tagline: "Elevate Your Style",
        description: "Minimalist streetwear featuring the iconic 'Rise' text and rose motifs. Available in Lights and Darks.",
        image: "https://flowouts.com/cdn/shop/files/rise-collection-banner.jpg",
        products: riseCollection,
    },
    {
        id: "the-chef",
        name: "The Chef",
        slug: "the-chef",
        tagline: "Cook Up Your Look",
        description: "Chef-inspired streetwear with iconic chef hats and floral designs. Bold, comfortable, and uniquely crafted.",
        image: "https://flowouts.com/cdn/shop/files/chef-collection-banner.jpg",
        products: chefCollection,
    },
    {
        id: "essentials",
        name: "Essentials: Within Reach",
        slug: "essentials",
        tagline: "Premium Basics, Accessible Style",
        description: "Edgy streetwear with splatter paint patterns and 'Within Reach' branding. Vintage-style fits for modern comfort.",
        image: "https://flowouts.com/cdn/shop/files/essentials-collection-banner.jpg",
        products: essentialsWithinReachCollection,
    },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
    return collections.find((c) => c.slug === slug);
}
