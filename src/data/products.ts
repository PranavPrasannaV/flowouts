
export interface ProductOption {
    name: string;
    values: string[];
}

export interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    images: string[];
    options: ProductOption[];
}

export const products: Product[] = [
    // --- Rise Collection (Lights) ---
    {
        id: "1",
        name: "Unisex Oversized Rise Icon Fleece - Lights",
        price: "$36.00 USD",
        category: "Hoodies",
        description: "<p>The Rise Icon Fleece is a staple for your wardrobe. Featuring a puff print Rise Icon logo on the left chest and a large puff print Rise Icon logo on the back. Made with a 100% cotton face and 65% cotton, 35% polyester blend, this hoodie is sure to keep you warm and comfortable.</p><ul><li>100% cotton face</li><li>65% cotton, 35% polyester</li><li>Fabric weight: 8.5 oz/y² (288.2 g/m²)</li><li>Tightly knit 3-end fleece</li><li>Side-seamed construction</li><li>Self-fabric patch on the back</li><li>Double-needle stitched rib collar, cuffs, and hem</li></ul>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533",
            "https://flowouts.com/cdn/shop/files/67f73add5eb2434680872895690b6399.png?v=1763666439&width=533",
            "https://flowouts.com/cdn/shop/files/84f9b876537b42669e29a99285038c7b.png?v=1763666442&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["White", "Sport Grey", "Sand"] }
        ]
    },
    {
        id: "2",
        name: "Unisex Rise Icon Clinched Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>The Rise Icon Clinched Sweatpants are a perfect match for the Rise Icon Fleece. Featuring a puff print Rise Icon logo on the left thigh and a clinched bottom. Made with a 100% cotton face and 65% cotton, 35% polyester blend, these sweatpants are sure to keep you warm and comfortable.</p><ul><li>100% cotton face</li><li>65% cotton, 35% polyester</li><li>Charcoal Heather is 55% cotton, 45% polyester</li><li>Fabric weight: 8.5 oz/y² (288.2 g/m²)</li><li>Tightly knit 3-end fleece</li><li>5-thread stitching</li><li>Cuffed and side-seamed legs</li><li>Elastic inside the waistband</li><li>Flat drawstrings in a matching color</li><li>2 cross pockets in front</li><li>1 top-stitched patch pocket on the back of the right leg</li><li>Ribbed waist, cuffs, and gusset at crotch</li></ul>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533",
            "https://flowouts.com/cdn/shop/files/be0613a7b69c4c1aab78772a1df6ccf7.png?v=1763666063&width=533",
            "https://flowouts.com/cdn/shop/files/a25ec516480242278daae7c08a946cf6.png?v=1763666066&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Sport Grey", "Navy"] }
        ]
    },
    {
        id: "3",
        name: "Essential Cotton T-Shirt",
        price: "$21.00 USD",
        category: "T-Shirts",
        description: "<p>The Essential Cotton T-Shirt is a staple for your wardrobe. Made with 100% cotton, this t-shirt is sure to keep you comfortable.</p><ul><li>100% cotton</li><li>Fabric weight: 5.0–5.3 oz/yd² (170-180 g/m²)</li><li>Open-end yarn</li><li>Tubular fabric</li><li>Taped neck and shoulders</li><li>Double seam at sleeves and bottom hem</li></ul>",
        images: [
            "https://flowouts.com/cdn/shop/files/0a4a12781a684c8eb04a756176c28725.png?v=1766260932&width=533",
            "https://flowouts.com/cdn/shop/files/efc8a51372864b858444318721c548d8.png?v=1766260935&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["Black", "White", "Navy", "Sport Grey", "Sand"] }
        ]
    },
    {
        id: "4",
        name: "Unisex Oversized Rise Hoodie - Lights",
        price: "$36.00 USD",
        category: "Hoodies",
        description: "<p>The Oversized Rise Hoodie is a staple for your wardrobe. Featuring a puff print Rise logo on the center chest. Made with a 100% cotton face and 65% cotton, 35% polyester blend, this hoodie is sure to keep you warm and comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Sport Grey", "Sand"] }
        ]
    },
    {
        id: "5",
        name: "Unisex Oversized Rise Hoodie - Darks",
        price: "$36.00 USD",
        category: "Hoodies",
        description: "<p>The Oversized Rise Hoodie is a staple for your wardrobe. Featuring a puff print Rise logo on the center chest. Made with a 100% cotton face and 65% cotton, 35% polyester blend, this hoodie is sure to keep you warm and comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Charcoal Heather", "Carbon Grey"] }
        ]
    },
    {
        id: "6",
        name: "Unisex Rise Icon Tee - Lights",
        price: "$21.00 USD",
        category: "T-Shirts",
        description: "<p>The Rise Icon Tee is a staple for your wardrobe. Featuring a puff print Rise Icon logo on the left chest. Made with 100% cotton, this t-shirt is sure to keep you comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Sport Grey", "Sand"] }
        ]
    },
    {
        id: "7",
        name: "Unisex Rise Icon Tee",
        price: "$21.00 USD",
        category: "T-Shirts",
        description: "<p>The Rise Icon Tee is a staple for your wardrobe. Featuring a puff print Rise Icon logo on the left chest. Made with 100% cotton, this t-shirt is sure to keep you comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Dark Heather"] }
        ]
    },
    {
        id: "8",
        name: "Unisex Rise Icon Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>The Rise Icon Sweatpants are a perfect match for the Rise Icon Fleece. Featuring a puff print Rise Icon logo on the left thigh and a open bottom. Made with a 100% cotton face and 65% cotton, 35% polyester blend, these sweatpants are sure to keep you warm and comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Sport Grey", "Navy"] }
        ]
    },
    {
        id: "9",
        name: "Unisex Oversized Rise Icon Fleece - Darks",
        price: "$36.00 USD",
        category: "Hoodies",
        description: "<p>The Rise Icon Fleece is a staple for your wardrobe. Featuring a puff print Rise Icon logo on the left chest and a large puff print Rise Icon logo on the back. Made with a 100% cotton face and 65% cotton, 35% polyester blend, this hoodie is sure to keep you warm and comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Charcoal Heather", "Carbon Grey"] }
        ]
    },
    // --- The Chef Collection ---
    {
        id: "10",
        name: "Unisex Flower Icon Oversized Hoodie",
        price: "$45.99 USD",
        category: "Hoodies",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. This hoodie features a large puff print flower icon on the back and a small puff print flower icon on the left chest.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey", "Maroon"] }
        ]
    },
    {
        id: "11",
        name: "Unisex Flower Clinched Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. These sweatpants feature a puff print flower icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey"] }
        ]
    },
    {
        id: "12",
        name: "Unisex Flower Straight Leg Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. These sweatpants feature a puff print flower icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey"] }
        ]
    },
    {
        id: "13",
        name: "Unisex Chef Straight Leg Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>The Chef Collection. Featuring a puff print Chef Hat icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey", "Sport Grey"] }
        ]
    },
    {
        id: "14",
        name: "Unisex Chef Drawstring Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>The Chef Collection. Featuring a puff print Chef Hat icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey", "Sport Grey"] }
        ]
    },
    {
        id: "15",
        name: "Unisex Chef Clinched Sweatpants",
        price: "$35.50 USD",
        category: "Pants",
        description: "<p>The Chef Collection. Featuring a puff print Chef Hat icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey", "Sport Grey"] }
        ]
    },
    // BATCH_1_PLACEHOLDER
    {
        id: "16",
        name: "Unisex Chef's Flowers Oversized Hoodie - Lights",
        price: "$45.99 USD",
        category: "Hoodies",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. This hoodie features a large puff print flower icon on the back and a small puff print flower icon on the left chest.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["White", "Sport Grey", "Sand", "Light Pink", "Light Blue"] }
        ]
    },
    {
        id: "17",
        name: "Unisex Chef's Flowers Oversized Hoodie - Darks",
        price: "$45.99 USD",
        category: "Hoodies",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. This hoodie features a large puff print flower icon on the back and a small puff print flower icon on the left chest.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=533"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["Black", "Navy", "Carbon Grey", "Maroon"] }
        ]
    },
    // --- Essentials Collection ---
    // --- Essentials Collection (Splatter, Vintage, Within Reach) ---
    {
        id: "18",
        name: "Unisex Splatter Clinched Sweatpants",
        price: "$27.65 USD",
        category: "Pants",
        description: "<p>The Splatter Clinched Sweatpants. Designed for a comfortable fit.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/ba0712090709445e8b0951b89947f742.png?v=1766259942&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Grey"] }
        ]
    },
    {
        id: "19",
        name: "Unisex Splatter Jogged Sweatpants",
        price: "$26.60 USD",
        category: "Pants",
        description: "<p>The Splatter Jogged Sweatpants. Perfect for lounging or hitting the streets.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/621604e9b93b4443bc26aeef03f8b224.png?v=1766260047&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Grey"] }
        ]
    },
    {
        id: "20",
        name: "Men's Icon Crewneck Sweatshirt",
        price: "$29.60 USD",
        category: "Sweatshirts",
        description: "<p>The Icon Crewneck Sweatshirt. Classic style, modern comfort.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Grey", "Navy"] }
        ]
    },
    {
        id: "21",
        name: "Men's Splatter Crewneck Sweatshirt",
        price: "$28.60 USD",
        category: "Sweatshirts",
        description: "<p>The Splatter Crewneck Sweatshirt. Featuring our signature splatter design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/53560e1c741445a39875cd6ca2b3ed39.png?v=1766262326&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Grey", "Navy"] }
        ]
    },
    {
        id: "22",
        name: "Women's Splatter Mock-Neck Crew Sweatshirt",
        price: "$28.60 USD",
        category: "Sweatshirts",
        description: "<p>The Splatter Mock-Neck Crew. A feminine cut with edge.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/bc6828abc7d445f6aa143a0fc125fc92.png?v=1766260646&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Pink", "White", "Grey"] }
        ]
    },
    {
        id: "23",
        name: "Men's Vintage Crewneck Sweatshirt",
        price: "$28.60 USD",
        category: "Sweatshirts",
        description: "<p>The Vintage Crewneck Sweatshirt. Timeless appeal.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/0a4a12781a684c8eb04a756176c28725.png?v=1766260932&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "24",
        name: "Women's Vintage Mock-Neck Crew Sweatshirt",
        price: "$29.60 USD",
        category: "Sweatshirts",
        description: "<p>The Vintage Mock-Neck Crew. Retro vibes, modern feel.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/643335520f7e4cdba44965bbc37ebfc1.png?v=1766262252&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Pink", "White"] }
        ]
    },
    {
        id: "25",
        name: "Unisex Vintage Oversized Hoodie",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>The Vintage Oversized Hoodie. Your new go-to hoodie.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/b7de01e2cb7d4f3eb0c20f5336be7ed6.png?v=1766261097&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "26",
        name: "Women's Within Reach Mock-Neck Crew Sweatshirt",
        price: "$29.60 USD",
        category: "Sweatshirts",
        description: "<p>Within Reach Mock-Neck. Elevate your everyday.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/db34db6d90ac4ed3b712354a71b77a76.png?v=1766260752&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Pink", "White", "Grey"] }
        ]
    },
    {
        id: "27",
        name: "Unisex Splatter Drawstring Sweatpants",
        price: "$23.60 USD",
        category: "Pants",
        description: "<p>The Splatter Drawstring Sweatpants. Distinctive style.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/ad9f92a6ddb74db0a80d0491186a60ea.png?v=1766260490&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Grey", "Navy"] }
        ]
    },
    {
        id: "28",
        name: "Unisex Splatter Straight-Leg Sweatpants",
        price: "$24.65 USD",
        category: "Pants",
        description: "<p>The Splatter Straight-Leg Sweatpants. Comfy and cool.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/0676ec032a344c689ed856d5c4b02028.png?v=1766260280&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Grey", "Navy"] }
        ]
    },
    {
        id: "29",
        name: "Unisex Oversized Within Reach Hoodie - Darks",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Within Reach Hoodie - Darks. Bold and understated.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/ec82284901064f6fbf03b968bdb9ddbf.png?v=1766195645&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Maroon"] }
        ]
    },
    {
        id: "30",
        name: "Unisex Oversized Within Reach Hoodie",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Within Reach Hoodie. Comfort for everyone.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/99dcb7479bbf4a0193b2c9523367b786.png?v=1766195465&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Grey", "Sand", "Blue", "Pink"] }
        ]
    },
    {
        id: "31",
        name: "Unisex Oversized Essentials Splatter Hoodie - Darks",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>Essentials Splatter Hoodie - Darks. A must-have.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4e85450ea0224317b299db8e6483f270.png?v=1766194926&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy", "Maroon"] }
        ]
    },
    {
        id: "32",
        name: "Unisex Oversized Essentials Splatter Hoodie",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>Essentials Splatter Hoodie. Brighten up your look.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/2562b4773aab45a3bb7d137db4bc6956.png?v=1766194340&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Grey", "Sand", "Blue", "Pink"] }
        ]
    },

    // --- Men's, Women's, Kids & Accesssories ---
    {
        id: "33",
        name: "Unisex Bloom Tee",
        price: "$27.98 USD",
        category: "T-Shirts",
        description: "<p>The Bloom Tee. Featuring a floral design on the front.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/16288427630593147062_2048.jpg?v=1756755937&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "34",
        name: "Unisex Custom T-shirt",
        price: "$25.98 USD",
        category: "T-Shirts",
        description: "<p>Customize your own Everwear T-shirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/14057660942097065310_2048.jpg?v=1755293430&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black", "Navy"] }
        ]
    },
    {
        id: "35",
        name: "Unisex Moisture Wicking Tee",
        price: "$28.00 USD",
        category: "T-Shirts",
        description: "<p>Stay dry and comfortable with our Moisture Wicking Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/2221850085756166904_2048.jpg?v=1761764739&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black", "Grey"] }
        ]
    },
    {
        id: "36",
        name: "Unisex Time Tee",
        price: "$27.98 USD",
        category: "T-Shirts",
        description: "<p>The Time Tee. A classic fit for everyday wear.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/7724861034979215976_2048.jpg?v=1758218409&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Navy", "Black"] }
        ]
    },
    {
        id: "37",
        name: "Unisex Time Sweatshirt",
        price: "$34.99 USD",
        category: "Sweatshirts",
        description: "<p>The Time Sweatshirt. Warm and comfortable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/17686173235074296104_2048.jpg?v=1758132405&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Navy", "Black"] }
        ]
    },
    {
        id: "38",
        name: "Unisex Simplicity Hoodie",
        price: "$45.99 USD",
        category: "Hoodies",
        description: "<p>Simple, clean, and comfortable. The Simplicity Hoodie.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/17959550923306507680_2048.jpg?v=1760384730&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black", "Navy"] }
        ]
    },
    {
        id: "39",
        name: "Unisex Simplicity Sweatshirt",
        price: "$34.99 USD",
        category: "Sweatshirts",
        description: "<p>Simple, clean, and comfortable. The Simplicity Sweatshirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/17893970599747840087_2048.jpg?v=1758040173&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black", "Navy"] }
        ]
    },
    {
        id: "40",
        name: "Unisex Plain Tee",
        price: "$21.00 USD",
        category: "T-Shirts",
        description: "<p>A basic essential. The Plain Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/7639769883904622808_2048.jpg?v=1757995063&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "41",
        name: "Unisex Class Dad Cap",
        price: "$29.00 USD",
        category: "Accessories",
        description: "<p>The Class Dad Cap. Stylish and adjustable.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/12699289891218389047_2048.jpg?v=1757361241&width=2000"
        ],
        options: [
            { name: "Size", values: ["One Size"] },
            { name: "Color", values: ["Black", "Spruce"] }
        ]
    },
    {
        id: "42",
        name: "Unisex Bloom Zip Up",
        price: "$53.99 USD",
        category: "Hoodies",
        description: "<p>The Bloom Zip Up. Floral details on a versatile zip-up.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/7953914014705719964_2048.jpg?v=1757120670&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "White"] }
        ]
    },
    {
        id: "43",
        name: "Unisex Bloom Sweatshirt",
        price: "$34.99 USD",
        category: "Sweatshirts",
        description: "<p>The Bloom Sweatshirt. Cozy and floral.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/2146985109198489075_2048.jpg?v=1757092982&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "White"] }
        ]
    },
    {
        id: "44",
        name: "Unisex Bloom Hoodie",
        price: "$45.99 USD",
        category: "Hoodies",
        description: "<p>The Bloom Hoodie. A customer favorite.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/12883155825177698600_2048.jpg?v=1757093037&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "White"] }
        ]
    },
    {
        id: "45",
        name: "Unisex Be Kind Tee",
        price: "$23.95 USD",
        category: "T-Shirts",
        description: "<p>Spread positivity with the Be Kind Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/10014795168014931179_2048.jpg?v=1756790071&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "46",
        name: "Unisex Dad Hat",
        price: "$22.98 USD",
        category: "Accessories",
        description: "<p>The classic Dad Hat.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4060842036044226886_2048.jpg?v=1755631215&width=2000"
        ],
        options: [
            { name: "Size", values: ["One Size"] },
            { name: "Color", values: ["Black", "White", "Navy"] }
        ]
    },
    {
        id: "47",
        name: "Unisex Custom Sweatshirt",
        price: "$32.00 USD",
        category: "Sweatshirts",
        description: "<p>Custom Everwear Sweatshirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4502957420705134009_2048.jpg?v=1755538373&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy"] }
        ]
    },
    {
        id: "48",
        name: "Men's Simplicity Tee",
        price: "$22.98 USD",
        category: "T-Shirts",
        description: "<p>Men's Simplicity Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/5123042853627955403_2048.jpg?v=1755537708&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "White"] }
        ]
    },
    {
        id: "49",
        name: "Unisex Simplicity Tee",
        price: "$22.98 USD",
        category: "T-Shirts",
        description: "<p>Unisex Simplicity Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/3382764235969053055_2048.jpg?v=1755537352&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "50",
        name: "Unisex Long Sleeve",
        price: "$28.98 USD",
        category: "T-Shirts",
        description: "<p>Unisex Long Sleeve.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/1178942352101120313_2048.jpg?v=1755537714&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "51",
        name: "Unisex Socks",
        price: "$17.98 USD",
        category: "Accessories",
        description: "<p>Unisex Everwear Socks.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/16267017878006336087_2048.jpg?v=1757360909&width=2000"
        ],
        options: [
            { name: "Size", values: ["One Size"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "52",
        name: "Men's T-shirt",
        price: "$26.98 USD",
        category: "T-Shirts",
        description: "<p>Everwear T-shirt for Men.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/8152031151650257946_2048.jpg?v=1755713840&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "White"] }
        ]
    },
    {
        id: "53",
        name: "Unisex T-shirt",
        price: "$26.98 USD",
        category: "T-Shirts",
        description: "<p>Unisex Everwear T-shirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/7392435905709192895_2048.jpg?v=1755537250&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "54",
        name: "Women's Simplicity Tee",
        price: "$22.98 USD",
        category: "T-Shirts",
        description: "<p>Women's Simplicity Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/3382764235969053055_2048_df1b9a23-4324-4710-9048-74a7aff434e1.jpg?v=1755537542&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    {
        id: "55",
        name: "Women's T-shirt",
        price: "$26.98 USD",
        category: "T-Shirts",
        description: "<p>Everwear T-shirt for Women.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/3331503845951851025_2048.jpg?v=1755805092&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White", "Black"] }
        ]
    },
    // --- Kids & Toddlers ---
    {
        id: "56",
        name: "Kid's Game Day Tee",
        price: "$23.00 USD",
        category: "Kids",
        description: "<p>Kid's Game Day Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/8939123078964906113_2048.jpg?v=1758220174&width=2000"
        ],
        options: [
            { name: "Size", values: ["XS", "S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "57",
        name: "Toddler's Game Day Tee",
        price: "$22.00 USD",
        category: "Kids",
        description: "<p>Toddler's Game Day Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/405130485103688241_2048.jpg?v=1758219774&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "58",
        name: "Kid's Simplicity Hoodie",
        price: "$33.00 USD",
        category: "Kids",
        description: "<p>Kid's Simplicity Hoodie.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/15079112872227844767_2048.jpg?v=1758041306&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["Black", "White"] }
        ]
    },
    {
        id: "59",
        name: "Toddler's Plain Tee",
        price: "$20.00 USD",
        category: "Kids",
        description: "<p>Toddler's Plain Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/2044141549423345103_2048.jpg?v=1757995016&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "60",
        name: "Kid's Plain Tee",
        price: "$21.00 USD",
        category: "Kids",
        description: "<p>Kid's Plain Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4810955587630024950_2048.jpg?v=1757995052&width=2000"
        ],
        options: [
            { name: "Size", values: ["XS", "S", "M", "L", "XL"] },
            { name: "Color", values: ["White", "Black", "Navy", "Sport Grey", "Dark Heather", "Royal Blue", "Red", "Pink"] }
        ]
    },
    {
        id: "61",
        name: "Toddler's Long Sleeve Tee",
        price: "$27.98 USD",
        category: "T-Shirts",
        description: "<p>Toddler's Long Sleeve Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/865223395347864750_2048.jpg?v=1757885881&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "62",
        name: "Kid's Long Sleeve Tee",
        price: "$26.98 USD",
        category: "T-Shirts",
        description: "<p>Kid's Long Sleeve Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/1358012620792639551_2048.jpg?v=1757885386&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "63",
        name: "Toddler's Simplicity Sweatshirt",
        price: "$30.00 USD",
        category: "Sweatshirts",
        description: "<p>Toddler's Simplicity Sweatshirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/17429923658399186_2048.jpg?v=1758040264&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "64",
        name: "Kid's Embroidered Sweatshirt",
        price: "$29.98 USD",
        category: "Sweatshirts",
        description: "<p>Kid's Embroidered Sweatshirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/6770082730265284708_2048.jpg?v=1757884948&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "65",
        name: "Toddler's Kindergarten Rocks Tee",
        price: "$20.98 USD",
        category: "T-Shirts",
        description: "<p>Toddler's Kindergarten Rocks Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/8972121553838753077_2048.jpg?v=1757884744&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "66",
        name: "Toddler's Pawsitive Tee",
        price: "$20.00 USD",
        category: "T-Shirts",
        description: "<p>Toddler's Pawsitive Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/15701747153336246468_2048.jpg?v=1757356222&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "67",
        name: "Kid's Pawsitive Tee",
        price: "$22.95 USD",
        category: "T-Shirts",
        description: "<p>Kid's Pawsitive Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/16993518394732728915_2048.jpg?v=1757355956&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "68",
        name: "Kid's Bee Cool T-Shirt",
        price: "$22.95 USD",
        category: "T-Shirts",
        description: "<p>Kid's Bee Cool T-Shirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/11993906624947676586_2048.jpg?v=1757355828&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "69",
        name: "Toddler's Bee Cool T-Shirt",
        price: "$20.00 USD",
        category: "T-Shirts",
        description: "<p>Toddler's Bee Cool T-Shirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4677978064975148151_2048.jpg?v=1757355533&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "70",
        name: "Kid's Unisex T-shirt",
        price: "$27.98 USD",
        category: "T-Shirts",
        description: "<p>Kid's Unisex T-shirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/11128867469013438813_2048.jpg?v=1755874760&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "71",
        name: "Custom Toddler's Long Sleeve",
        price: "$22.98 USD",
        category: "T-Shirts",
        description: "<p>Custom Toddler's Long Sleeve.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/10868444877253443555_2048.jpg?v=1755380552&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "72",
        name: "Toddler's Simplicity Tee",
        price: "$22.98 USD",
        category: "T-Shirts",
        description: "<p>Toddler's Simplicity Tee.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/17343490599143744015_2048_b790bac4-f29f-4984-bb4b-894853fa62df.jpg?v=1755633191&width=2000"
        ],
        options: [
            { name: "Size", values: ["2T", "3T", "4T", "5T"] },
            { name: "Color", values: ["White"] }
        ]
    },
    {
        id: "73",
        name: "Kid's Unisex T-shirt (Variant)",
        price: "$27.98 USD",
        category: "T-Shirts",
        description: "<p>Kid's Unisex T-shirt.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/6572927489468605578_2048.jpg?v=1755542367&width=2000"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL"] },
            { name: "Color", values: ["White"] }
        ]
    }
];
