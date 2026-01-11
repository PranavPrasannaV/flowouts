import { Product, products } from "./products";

export interface Collection {
    id: string;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    image: string;
    products: Product[];
}

// Rise Collection
const riseNames = [
    "Unisex Oversized Rise Icon Fleece - Lights",
    "Unisex Rise Icon Clinched Sweatpants",
    "Essential Cotton T-Shirt",
    "Unisex Oversized Rise Hoodie - Lights",
    "Unisex Oversized Rise Hoodie - Darks",
    "Unisex Rise Icon Tee - Lights",
    "Unisex Rise Icon Tee",
    "Unisex Rise Icon Sweatpants",
    "Unisex Oversized Rise Icon Fleece - Darks"
];
export const riseCollection: Product[] = products.filter(p => riseNames.includes(p.name));

// The Chef Collection
const chefNames = [
    "Unisex Flower Icon Oversized Hoodie",
    "Unisex Flower Clinched Sweatpants",
    "Unisex Flower Straight Leg Sweatpants",
    "Unisex Chef Straight Leg Sweatpants",
    "Unisex Chef Drawstring Sweatpants",
    "Unisex Chef Clinched Sweatpants",
    "Unisex Chef's Flowers Oversized Hoodie - Lights",
    "Unisex Chef's Flowers Oversized Hoodie - Darks"
];
export const chefCollection: Product[] = products.filter(p => chefNames.includes(p.name));

// Essentials: Within Reach Collection
const essentialsNames = [
    "Unisex Splatter Clinched Sweatpants",
    "Unisex Splatter Jogged Sweatpants",
    "Men's Icon Crewneck Sweatshirt",
    "Men's Splatter Crewneck Sweatshirt",
    "Women's Splatter Mock-Neck Crew Sweatshirt",
    "Men's Vintage Crewneck Sweatshirt",
    "Unisex Vintage Oversized Hoodie",
    "Women's Vintage Mock-Neck Crew Sweatshirt",
    "Women's Within Reach Mock-Neck Crew Sweatshirt",
    "Unisex Splatter Drawstring Sweatpants",
    "Unisex Splatter Straight-Leg Sweatpants",
    "Unisex Oversized Within Reach Hoodie - Darks",
    "Unisex Oversized Within Reach Hoodie",
    "Unisex Oversized Essentials Splatter Hoodie - Darks",
    "Unisex Oversized Essentials Splatter Hoodie"
];
export const essentialsWithinReachCollection: Product[] = products.filter(p => essentialsNames.includes(p.name));

// Mens Collection
const mensNames = [
    "Unisex Bloom Tee", "Unisex Custom T-shirt", "Unisex Vintage Oversized Hoodie", "Unisex Splatter Drawstring Sweatpants",
    "Unisex Splatter Straight-Leg Sweatpants", "Unisex Oversized Within Reach Hoodie - Darks", "Unisex Oversized Within Reach Hoodie",
    "Unisex Oversized Essentials Splatter Hoodie - Darks", "Unisex Oversized Essentials Splatter Hoodie", "Unisex Flower Icon Oversized Hoodie",
    "Unisex Flower Clinched Sweatpants", "Unisex Flower Straight Leg Sweatpants", "Unisex Chef Straight Leg Sweatpants",
    "Unisex Chef Drawstring Sweatpants", "Unisex Chef Clinched Sweatpants", "Unisex Chef's Flowers Oversized Hoodie - Lights",
    "Unisex Chef's Flowers Oversized Hoodie - Darks", "Unisex Oversized Rise Icon Fleece - Lights", "Unisex Rise Icon Clinched Sweatpants",
    "Unisex Rise Icon Tee - Lights", "Unisex Rise Icon Tee", "Unisex Rise Icon Sweatpants", "Unisex Oversized Rise Icon Fleece - Darks",
    "Essential Cotton T-Shirt", "Unisex Oversized Rise Hoodie - Lights", "Unisex Oversized Rise Hoodie - Darks", "Unisex Moisture Wicking Tee",
    "Unisex Time Tee", "Unisex Time Sweatshirt", "Unisex Simplicity Hoodie", "Unisex Simplicity Sweatshirt", "Unisex Plain Tee",
    "Unisex Class Dad Cap", "Unisex Bloom Zip Up", "Unisex Bloom Sweatshirt", "Unisex Bloom Hoodie", "Unisex Be Kind Tee",
    "Unisex Dad Hat", "Unisex Custom Sweatshirt", "Men's Simplicity Tee", "Unisex Simplicity Tee", "Unisex Long Sleeve", "Unisex Socks",
    "Men's T-shirt", "Unisex T-shirt"
];
export const mensCollection: Product[] = products.filter(p => mensNames.includes(p.name));

// Womens Collection
const womensNames = [
    "Unisex Bloom Tee", "Unisex Custom T-shirt", "Unisex Vintage Oversized Hoodie", "Women's Within Reach Mock-Neck Crew Sweatshirt",
    "Unisex Splatter Drawstring Sweatpants", "Unisex Splatter Straight-Leg Sweatpants", "Unisex Oversized Within Reach Hoodie - Darks",
    "Unisex Oversized Within Reach Hoodie", "Unisex Oversized Essentials Splatter Hoodie - Darks", "Unisex Oversized Essentials Splatter Hoodie",
    "Unisex Flower Icon Oversized Hoodie", "Unisex Flower Clinched Sweatpants", "Unisex Flower Straight Leg Sweatpants",
    "Unisex Chef Straight Leg Sweatpants", "Unisex Chef Drawstring Sweatpants", "Unisex Chef Clinched Sweatpants",
    "Unisex Chef's Flowers Oversized Hoodie - Lights", "Unisex Chef's Flowers Oversized Hoodie - Darks", "Unisex Oversized Rise Icon Fleece - Lights",
    "Unisex Rise Icon Clinched Sweatpants", "Unisex Oversized Rise Hoodie - Darks", "Unisex Rise Icon Tee - Lights", "Unisex Rise Icon Tee",
    "Unisex Rise Icon Sweatpants", "Unisex Oversized Rise Icon Fleece - Darks", "Essential Cotton T-Shirt", "Unisex Oversized Rise Hoodie - Lights",
    "Unisex Moisture Wicking Tee", "Unisex Time Tee", "Unisex Time Sweatshirt", "Unisex Simplicity Hoodie", "Unisex Simplicity Sweatshirt",
    "Unisex Plain Tee", "Unisex Class Dad Cap", "Unisex Bloom Zip Up", "Unisex Bloom Sweatshirt", "Unisex Bloom Hoodie", "Unisex Be Kind Tee",
    "Unisex Dad Hat", "Unisex Custom Sweatshirt", "Women's Simplicity Tee", "Unisex Simplicity Tee", "Unisex Long Sleeve", "Unisex Socks",
    "Women's T-shirt", "Unisex T-shirt"
];
export const womensCollection: Product[] = products.filter(p => womensNames.includes(p.name));

// Kids Collection
const kidsNames = [
    "Kid's Game Day Tee", "Toddler's Game Day Tee", "Kid's Simplicity Hoodie", "Toddler's Plain Tee", "Kid's Plain Tee",
    "Toddler's Long Sleeve Tee", "Kid's Long Sleeve Tee", "Toddler's Simplicity Sweatshirt", "Kid's Embroidered Sweatshirt",
    "Toddler's Kindergarten Rocks Tee", "Toddler's Pawsitive Tee", "Kid's Pawsitive Tee", "Kid's Bee Cool T-Shirt",
    "Toddler's Bee Cool T-Shirt", "Kid's Unisex T-shirt", "Custom Toddler's Long Sleeve",
    "Toddler's Simplicity Tee", "Kid's Unisex T-shirt (Variant)"
];
export const kidsCollection: Product[] = products.filter(p => kidsNames.includes(p.name));


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
    {
        id: "mens",
        name: "Men's Collection",
        slug: "mens",
        tagline: "Bold & Versatile",
        description: "Explore our versatile collection for men, featuring comfortable hoodies, sweatpants, and tees.",
        image: "https://flowouts.com/cdn/shop/files/mens-collection-banner.jpg",
        products: mensCollection,
    },
    {
        id: "womens",
        name: "Women's Collection",
        slug: "womens",
        tagline: "Chic & Comfy",
        description: "Discover stylish and comfortable streetwear for women, from oversized hoodies to classic tees.",
        image: "https://flowouts.com/cdn/shop/files/womens-collection-banner.jpg",
        products: womensCollection,
    },
    {
        id: "kids-and-toddlers",
        name: "Kids & Toddlers",
        slug: "kids-and-toddlers",
        tagline: "Little Flow",
        description: "Adorable and durable styles for the little ones. Comfort and cuteness combined.",
        image: "https://flowouts.com/cdn/shop/files/kids-collection-banner.jpg",
        products: kidsCollection,
    },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
    return collections.find((c) => c.slug === slug);
}
