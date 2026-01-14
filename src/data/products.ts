
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
    colorImages?: Record<string, string>; // Maps color name to main image URL
}

export const products: Product[] = [
    // --- Rise Collection ---
    {
        id: "1",
        name: "Unisex Oversized Rise Hoodie - Darks",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Item Number: R00286. Gender: Unisex. Model: Loose. Fabric: 42% cotton, 53% polyester, 5% other fibers. Fabric Weight: 10.3 oz/yd² (350 g/m²). Fabric Thickness: Thick. Fabric Stretch: Slight Stretch. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/b9418098ab8c4751a88b0b4217759216.png?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/907961e4e8b54011b6e4e9375605eba6.png?v=1763666201&width=1946",
            "https://flowouts.com/cdn/shop/files/447de4c9023e41d198b348e1da11f105.png?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/3c47ea9efd574f7da3b103e2e06305da.png?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/b405e80b183a41d68b482883ac7feb85.png?v=1763666201&width=1946",
            "https://flowouts.com/cdn/shop/files/0ebaad44736745c6a6122e47b05ee3ad.png?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/cda72c0e63bb45b1a6024a593492c01f.png?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435428-image-image-R00286-_2823_29-v1741338808-v1750230173_5e6f4ca7-de02-459e-960f-f4ada9b02e27.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435429-image-R00286-_2824_29-v1741338806_34cdd574-6628-43a4-a2f8-ebfc8dc4378e.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_283_29-v1729062593_9e65c391-830b-44e5-bed9-ec0046f93f32.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_281_29-v1729062582_69a1fe7e-d3d1-4ee4-9f90-cefc0fd8dae6.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_286_29-v1729062589_8c9a42f4-4924-4011-bdf4-0fbc3994c71b.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_cbf01e2f-6c12-4d2b-a27e-7e95a0421e12.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_bf6f88ec-0cfb-4cce-a9b7-739f984f3132.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_c453bc6b-2eac-44a4-83c2-4c1b18b3aac9.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_90914ef5-c55e-4907-ab5c-4b2c7898f88d.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725674-R00286-D_20_284_29_b1fb508a-9878-4338-9671-9167a03e0cd0.jpg?v=1763666202&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29.jpg?v=1763666202&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Brown", "Coffee", "Navy Blue", "Eden Green", "Gray"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/b9418098ab8c4751a88b0b4217759216.png?v=1763666202&width=1946",
            "Brown": "https://flowouts.com/cdn/shop/files/768cad5370ee40e4853f815b73fdd1a5.png?v=1763666202&width=1946",
            "Coffee": "https://flowouts.com/cdn/shop/files/10f78a252829492d9ee22f8359b02384.png?v=1763666202&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/bb2e0a27a618452eb910622fb3ddfbc1.png?v=1763666202&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/e386852380a74b4396da2a13ef70bb0c.png?v=1763666201&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/630e576a6af34b4cbc57d79d551cfa47.png?v=1763666201&width=1946"
        }
    },
    {
        id: "2",
        name: "Unisex Oversized Rise Icon Fleece - Lights",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>Item Number: R00286. Gender: Unisex. Model: Loose. Fabric: 42% cotton, 53% polyester, 5% other fibers. Fabric Weight: 10.3 oz/yd² (350 g/m²). Fabric Thickness: Thick. Fabric Stretch: Slight Stretch. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/40267c63803348b99b16ea5dcd771f66.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/2777120eca914761b52f3fa2ca207bfa.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/e00aa8dd5f9f474ea34009426f7cdb66.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/588bbebe0af4427599c3f11cb5580d8c.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/ebd08ef3d3a14a12a8efbc853f325f28.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/4a785dc660404f60a0cc9ea7543f1035.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/f11f449343df4af39e69df376b83eaea.png?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435428-image-image-R00286-_2823_29-v1741338808-v1750230173_cc2a2028-82e1-4e43-9628-4d38a4c3f07a.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435429-image-R00286-_2824_29-v1741338806_e9cbce41-c26c-4131-9478-dfac6e2ca59c.jpg?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_283_29-v1729062593_f5c17449-e556-48e5-a811-ad743f31a48f.jpg?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_281_29-v1729062582_4671cabe-357e-4afb-af25-4f73dd5a6e4a.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_286_29-v1729062589_fb12b1e6-6802-469f-871a-be4a72a8ae97.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_f6cea56f-9775-43ee-9da6-430c78c3a603.jpg?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29_c661bddc-47bb-44ee-8ccb-8da5bd9b8f84.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_8e3867b1-da64-4773-a6ba-f24a777dea87.jpg?v=1763666435&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_5ff7c10d-d6b9-4af0-8d4c-45ff3acebae7.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_6a877e6e-61e2-4afa-b489-01da417aac0e.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725674-R00286-D_20_284_29_d74d6b7e-8281-40fd-9a70-4b83ad44c090.jpg?v=1763666436&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29_73a4be97-3bfc-4b07-a917-513fbe406740.jpg?v=1763666436&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Oat Gray", "Flower Gray", "Gray Apricot", "Dark Purple", "Medium Blue", "Medium Green"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/d9ec22ba9d82443094e50792f3e51d68.png?v=1763666436&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/fa19f59625c74da7b8636535b18002bd.png?v=1763666435&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/792388d0d02d45c2841c2b3eadbbef37.png?v=1763666435&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/0ef5947b59534c39baa1cc8b8664cdac.png?v=1763666435&width=1946",
            "Dark Purple": "https://flowouts.com/cdn/shop/files/67ed99a87f5e4cbdacbb9cd28909822a.png?v=1763666435&width=1946",
            "Medium Blue": "https://flowouts.com/cdn/shop/files/48c19ca8ba264386b05d58a70866b8ee.png?v=1763666435&width=1946",
            "Medium Green": "https://flowouts.com/cdn/shop/files/7317dc94a85240c7be36ef97226992b6.png?v=1763666435&width=1946"
        }
    },
    {
        id: "3",
        name: "Unisex Rise Icon Clinched Sweatpants",
        price: "$27.65 USD",
        category: "Pants",
        description: "<p>Item Number: AMK002. Gender: Unisex. Model: Loose. Fabric: 100% cotton. Fabric Weight: 10.0 oz/yd² (340 g/m²). Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/7071f9935e9c4c4d9c773cd77c94a0dd.png?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/b24792e6b4af4014ad1d284684c72b60.png?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/437ba39385894a5cbb192ac28588cb85.png?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132663-AMK002-_281_29_04a7cce2-7fcc-47ee-b702-45b2330e8bc7.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132677-AMK002-_282_29_93169be0-c484-4084-8709-dfa8fad08a7b.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1749805423-AMK002-M-_281_29_24df0da2-7ae2-4af0-95b0-d8b7c5d03b29.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1749805423-AMK002-M-_282_29_11926f31-dfe2-4134-b594-d38bb460d45b.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1749805423-AMK002-M-_284_29_04d06317-e41b-4a71-add2-06b57d4ce8c8.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1749805424-AMK002-M-_285_29_ecb6a608-fe04-466b-9636-c45beefe873b.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132691-AMK002-D-_281_29_3bb8f74e-e374-4e6a-990e-e3a13ebc105c.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132740-AMK002-D-_282_29_1a682615-99c7-46f7-927a-b8d04397c02f.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132811-AMK002-D-_286_29_f1728a59-a14f-4829-88f0-995d65fac12f.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132804-AMK002-D-_284_29_8b79df33-c819-4fc0-b854-23e2bd8ec1b9.jpg?v=1763666060&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750132830-AMK002-D-_285_29_6feebe0d-21ad-4ba5-8580-c5d3534d2cf8.jpg?v=1763666060&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Apricot", "Light Gray"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/dc29e20528d648fcb483d2b18a994e90.png?v=1763666060&width=1946",
            "Apricot": "https://flowouts.com/cdn/shop/files/00c15696dd144a9e9a2f53b4d505c085.png?v=1763666060&width=1946",
            "Light Gray": "https://flowouts.com/cdn/shop/files/2d3068bd77f148909f3742d444f649f3.png?v=1763666060&width=1946"
        }
    },
    {
        id: "4",
        name: "Essential Cotton T-Shirt",
        price: "$24.00 USD",
        category: "T-Shirts",
        description: "<p>Item Number: RT0063. Gender: Unisex. Model: Regular. Fabric: 100% cotton. Fabric Weight: 7.7 oz/yd² (260 g/m²). Fabric Thickness: Moderate. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean. Features: Basics, Casual, Preppy, Sporty, Daily.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/2d9ba9fd6f434953a8a3b1861eed84be.png?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/4b6e6d39bea5499caf8d461877f96291.png?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/b78f2bcd0e274e3d886c848665159d13.png?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/a0d3d2a58da64234a9d93ccb2a4dbc0a.png?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/992f1addda2c446ba7ea4a3424d85c8f.png?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761732965-RT0063-_285_29TT.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761732950-RT0063-_286_29TT.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733084-RT0063-D-_281_29.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_283_29.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733086-RT0063-D-_286_29.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_282_29.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_285_29.jpg?v=1763398158&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_284_29.jpg?v=1763398158&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["White", "White Gray", "Apricot", "Blue"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/2d9ba9fd6f434953a8a3b1861eed84be.png?v=1763398158&width=1946",
            "White Gray": "https://flowouts.com/cdn/shop/files/38dccdac7540469c9e873358fc549490.png?v=1763398158&width=1946",
            "Apricot": "https://flowouts.com/cdn/shop/files/41e54efd31ec47ff8418c55aa1b9fd1e.png?v=1763398158&width=1946",
            "Blue": "https://flowouts.com/cdn/shop/files/2546d598630c43eaac5d924a10f8739b.png?v=1763398158&width=1946"
        }
    },
    {
        id: "5",
        name: "Unisex Oversized Rise Hoodie - Lights",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Item Number: R00286. Gender: Unisex. Model: Loose. Fabric: 42% cotton, 53% polyester, 5% other fibers. Fabric Weight: 10.3 oz/yd² (350 g/m²). Fabric Thickness: Thick. Fabric Stretch: Slight Stretch. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/596614028ea04517919bef07e59c9a8a.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/d29951fbf1ac43eca8219e3b0ea20e81.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/1f54f9088b1a41a8a38a04abe10d5c17.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/dd9be688f3924a14bdc9ab01702eff72.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/205909f570ff411faff40dc3a1c66c45.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/d2d7eef8d7af40898c5c98774dee3e87.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/a2d687f36257424bba24f066e0b4c2f3.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/af6b6d6629e6420cb38e5598c16bb86f.png?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435428-image-image-R00286-_2823_29-v1741338808-v1750230173_fe83b892-ff1b-4bc7-b36b-17fe9434e415.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435429-image-R00286-_2824_29-v1741338806_1e333b20-1740-49b6-a3e6-035daf4353e6.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_283_29-v1729062593_ac9a023a-1549-4678-a589-40874c096647.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_281_29-v1729062582_0ebd19ac-4a96-4095-b857-a6fdcb4a70a3.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_286_29-v1729062589_c28f2f19-1b0a-4225-9852-03789b8c1d93.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_1db51a41-8c46-436d-a664-2b4e9e9372dc.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29_065cfaa2-dd06-4453-9509-a8a6d8770144.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_38ec45cf-8888-4aed-958a-08093d861657.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_aae77e4a-608b-4e76-9866-b7b25cf354b9.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_4b5ccd4f-96ec-4cde-b4d5-72add29c6a08.jpg?v=1763396868&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725674-R00286-D_20_284_29_e40b3e7f-4653-432e-b384-2f87aab6a6d9.jpg?v=1763396869&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29_45fd857b-f787-4c5e-ae1d-4e0dcf73f495.jpg?v=1763396869&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Oat Gray", "White", "Flower Gray", "Gray Apricot", "Dark Purple", "Medium Blue", "Medium Green"] }
        ],
        colorImages: {
            "Oat Gray": "https://flowouts.com/cdn/shop/files/596614028ea04517919bef07e59c9a8a.png?v=1763396868&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/c0542cc831784d88924188dd4d025f70.png?v=1763396868&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/b9bccb97adf244378f1209f03255f8af.png?v=1763396868&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/809dbfa6efbb46098bf3e311a520a222.png?v=1763396868&width=1946",
            "Dark Purple": "https://flowouts.com/cdn/shop/files/fdf8d8b754c94e77b3dc178a4e0a5b93.png?v=1763396868&width=1946",
            "Medium Blue": "https://flowouts.com/cdn/shop/files/ad75ad928acc458fabc02da7a719f9b2.png?v=1763396868&width=1946",
            "Medium Green": "https://flowouts.com/cdn/shop/files/dc6e97c6d7144eff820d741518876f71.png?v=1763396868&width=1946"
        }
    },
    {
        id: "6",
        name: "Unisex Rise Icon Tee - Lights",
        price: "$21.00 USD",
        category: "T-Shirts",
        description: "<p>Item Number: RT0063. Gender: Unisex. Model: Regular. Fabric: 100% cotton. Fabric Weight: 7.7 oz/yd² (260 g/m²). Fabric Thickness: Moderate. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean. Features: Basics, Casual, Preppy, Sporty, Daily.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4b0398033c4747ed81b9f51ff593c481.png?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/b3f5cccac3a945ab964524f2d9679e36.png?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/ba6d17be18c84ef1b5ed2e66b77005bf.png?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/ccfdec5b52734ffbab43b707ec366077.png?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/783afad4d88f4a318bb370de6d6a28ef.png?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761732965-RT0063-_285_29TT_6a59333a-86a3-449e-a575-7557adf5dc4f.jpg?v=1763527129&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761732950-RT0063-_286_29TT_0e7d20b1-ba38-4ab8-b8d5-6f9a84b71677.jpg?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733084-RT0063-D-_281_29_2a629708-9b32-473d-80db-17284aed4dd9.jpg?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_283_29_56b79f83-ef46-466f-9c9b-8f1d65001d7d.jpg?v=1763527128&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733086-RT0063-D-_286_29_8488916a-8144-429e-8254-c4d8b0643011.jpg?v=1763527129&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_285_29_dc942cc6-1862-4914-830d-1c9d5bcd4b5a.jpg?v=1763527129&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_284_29_2664aaff-176a-4cf2-b508-204f427b103a.jpg?v=1763527128&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["White", "White Gray", "Apricot", "Blue"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/4b0398033c4747ed81b9f51ff593c481.png?v=1763527128&width=1946",
            "White Gray": "https://flowouts.com/cdn/shop/files/a8f754d42458451bb1353bc411352fa3.png?v=1763527128&width=1946",
            "Apricot": "https://flowouts.com/cdn/shop/files/86b6f78d4c3944fcacb293af6b8c5e5d.png?v=1763527128&width=1946",
            "Blue": "https://flowouts.com/cdn/shop/files/c716f710686c4b39a957c8401eda3bf0.png?v=1763527128&width=1946"
        }
    },
    {
        id: "7",
        name: "Unisex Rise Icon Tee",
        price: "$21.00 USD",
        category: "T-Shirts",
        description: "<p>Item Number: RT0063. Gender: Unisex. Model: Regular. Fabric: 100% cotton. Fabric Weight: 7.7 oz/yd² (260 g/m²). Fabric Thickness: Moderate. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean. Features: Basics, Casual, Preppy, Sporty, Daily.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/312d582361e844eca762dae713dad780.png?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/91aea1e62aa0455888397a8a90bd555c.png?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/27eace7314e743e6bed5e30276d877bf.png?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/ad4830bf921a456293c95414b506386e.png?v=1763526950&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761732965-RT0063-_285_29TT_0f4e0371-fc12-4e75-bfea-c368adebc21e.jpg?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761732950-RT0063-_286_29TT_48d098b9-b180-47f8-8002-16a229174274.jpg?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733084-RT0063-D-_281_29_bea2ae65-dc82-406c-883c-10c490f50df0.jpg?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_283_29_9c84dbdd-0ff7-4b2a-9f89-1d40ddc3e23c.jpg?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733086-RT0063-D-_286_29_cf94e796-ab76-421e-b103-bbc2cffde0a6.jpg?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_285_29_8d32afb6-1723-43a3-80b7-253c200c9afe.jpg?v=1763526948&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761733085-RT0063-D-_284_29_d77642df-092b-44d3-a7b3-1b771b1e133c.jpg?v=1763526948&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["Black", "Dark Gray", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/312d582361e844eca762dae713dad780.png?v=1763526948&width=1946",
            "Dark Gray": "https://flowouts.com/cdn/shop/files/3eb555dd22484a0bb6a4e84f69ca5077.png?v=1763526948&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/207f4eda251c4a12b7e345839b62d9a0.png?v=1763526948&width=1946"
        }
    },
    {
        id: "8",
        name: "Unisex Rise Icon Sweatpants",
        price: "$24.65 USD",
        category: "Pants",
        description: "<p>Item Number: RK0034. Gender: Unisex. Model: Loose. Fabric: 85% cotton, 15% polyester. Fabric Weight: 9.4 oz/yd² (320 g/m²). Fabric Thickness: Moderate. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean. Features: Basics, Casual, Preppy, Sporty.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4819f561815b48289777b7a8bc708771.png?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/a42bfb190bbe443194e5eb891b546c2d.png?v=1763526587&width=1946",
            "https://flowouts.com/cdn/shop/files/5966ca805ad84dd992196c22a248449f.png?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/dcdd5bee013c47d998ac9c5c727c9567.png?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738864-RK0034-_281_29TT.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738864-RK0034-_282_29TT.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762765677-RK0034-D-_281_29.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738901-RK0034-D-_282_29.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_284_29.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_286_29.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738901-RK0034-D-_283_29.jpg?v=1763526588&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_285_29.jpg?v=1763526588&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Flower Gray", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/4819f561815b48289777b7a8bc708771.png?v=1763526588&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/bf6cd0427a684c02b74dfbfc3eab2486.png?v=1763526589&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/3a1eb459732a408eaf11d79feac92cc4.png?v=1763526588&width=1946"
        }
    },
    {
        id: "9",
        name: "Unisex Oversized Rise Icon Fleece - Darks",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>Gender: Unisex. Model: Loose. Fabric: 42% cotton, 53% polyester, 5% other fibers. Fabric Weight: 10.3 oz/yd² (350 g/m²). Fabric Thickness: Thick. Fabric Stretch: Slight Stretch. Care Instructions: Machine wash at 30°C (gentle cycle); Do not bleach; Tumble dry low; Iron at low temperature, avoid ironing on print; Do not dry clean.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/873ea83a2e7541bcbb2736758f700fb0.png?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/30a959ebeca64ec5ae4d1d2e12c337ad.png?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/2826df3012a44916aa091fbf30cadcaa.png?v=1763666126&width=1946",
            "https://flowouts.com/cdn/shop/files/8f9e0e9a93914c568ca2546f262f7688.png?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/6d5482da4ed949a9b20b5806d5e7f7aa.png?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/09d46c2faa274e879fdff97f14c250ef.png?v=1763666126&width=1946",
            "https://flowouts.com/cdn/shop/files/4143dd8157d443f79a6434469bec1fb0.png?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435428-image-image-R00286-_2823_29-v1741338808-v1750230173_a3083e70-4e8d-43c8-8e21-ff24d244ad38.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760435429-image-R00286-_2824_29-v1741338806_798de2fe-cd86-423b-b4f1-5a5535e48fbe.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_283_29-v1729062593_85c4dd04-8b34-4cc1-92d4-7f1fba58a737.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_281_29-v1729062582_161cd7a5-b239-4ca7-85b9-54714bdc4596.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-286-M_20_286_29-v1729062589_bfea888d-67d2-404c-869a-c9233d6db2cd.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_b450cdae-c77c-4a44-a86d-aeb2a559f85d.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29_f5bbec31-7313-40d2-988b-a7270f64d534.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_9269f952-aac2-4ad8-b76f-c40a82c114b2.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_f2443075-ec56-4de0-b407-e8873338798f.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_41d3f239-de7f-4f89-abb7-9509df07150d.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725674-R00286-D_20_284_29_7455febb-4914-4fe3-ab02-7c789afc8344.jpg?v=1763666127&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29_b16cb349-3a2b-4333-8bc2-252d26ce0853.jpg?v=1763666127&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Eden Green", "Navy Blue", "Coffee", "Brown", "Gray"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/873ea83a2e7541bcbb2736758f700fb0.png?v=1763666127&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/fcfefad10185405ab36b0273402e03e8.png?v=1763666126&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/fb114181c04b4d009eae71d0186da8bd.png?v=1763666127&width=1946",
            "Coffee": "https://flowouts.com/cdn/shop/files/435d606ae8054386a804591098bd6010.png?v=1763666127&width=1946",
            "Brown": "https://flowouts.com/cdn/shop/files/2b70a0a2bc2b46c4b2dd7e5dff13aceb.png?v=1763666127&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/fefed39010ad497ab8292d0e501faf03.png?v=1763666127&width=1946"
        }
    },
    // --- The Chef Collection ---
    {
        id: "10",
        name: "Unisex Flower Icon Oversized Hoodie",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. This hoodie features a large puff print flower icon on the back and a small puff print flower icon on the left chest.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/671724b27dde4ab1bba007dd36123c0a.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/0de50e6dae3d417fb64d8072deec60be.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/f9f3f7e058b041c6a229f29d0e30a129.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/610e696e1e5a487ea39aca38b342886b.png?v=1764952903&width=1946",
            "https://flowouts.com/cdn/shop/files/9b3f92cb4cf24561ab71ce8266b92de7.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/8940dfbf81b042b8b43538c8e2a1fd33.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/3d286db9f0cb48ada7b341f7b950acf7.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/8e45e9f59df045d6a122717261da623a.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/eede04fee4d94e37a53bc1552f3a5b62.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/e228b0c9638148fd98a190c52fa17635.png?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_bf05940d-cb51-4329-a7d8-65ecf31cf270.jpg?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29_be8cc517-78be-42d8-908f-ebd2eaaccdfc.jpg?v=1764952903&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_eef9ca1f-757f-470d-8fe1-2bd42a958389.jpg?v=1764952903&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_8a99fcca-5a95-4300-b3d9-8738358cb70f.jpg?v=1764952902&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_f8b64c82-955e-4c5d-8933-7c5733a581f7.jpg?v=1764952903&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29_e358cd8b-0d60-4045-aa72-7987a9992550.jpg?v=1764952904&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "White", "Oat Gray", "Flower Gray", "Gray Apricot", "Medium Blue", "Navy Blue", "Eden Green", "Gray"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/671724b27dde4ab1bba007dd36123c0a.png?v=1764952902&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/38ea1ed9ebcf4dbe88a7f96879a33225.png?v=1764952902&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/4fcdfe8cc59c4872b88c8332a9729861.png?v=1764952902&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/31a7d751122d494fb9a5c19bbef1d4d8.png?v=1764952902&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/0579ee5be388425aaaf46a055276bc5d.png?v=1764952902&width=1946",
            "Medium Blue": "https://flowouts.com/cdn/shop/files/0d21e730b187488fab9bd58deaef3515.png?v=1764952902&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/dff66a8a27ab4b2ab97385727194871a.png?v=1764952903&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/b2cbf6702dbc411e808a9aef9243458d.png?v=1764952902&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/5233165bfe984335ace43517c68086aa.png?v=1764952902&width=1946"
        }
    },
    {
        id: "11",
        name: "Unisex Flower Clinched Sweatpants",
        price: "$27.65 USD",
        category: "Pants",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. These sweatpants feature a puff print flower icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/b66c2b0bf18941808ea70aeccdf68100.png?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/58f5144dd8f3474fbc5333f8c5a0251a.png?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/7f4b46da3ca6406e90bf43d0baa89c02.png?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/b5d76a9d2402429eb82d1dd75802b516.png?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750731731-image-image-RU0077--_281_29-v1730791732-v1748488582.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750731731-image-image-RU0077--_282_29-v1730791743-v1748488582.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750748134-RU0077-M-_281_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750748134-RU0077-M-_282_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750748407-RU0077-M-_284_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1730791547-RU0077-D_20_283_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1730791548-RU0077-D_20_284_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1730791547-RU0077-D_20_282_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1730791547-RU0077-D_20_281_29.jpg?v=1764952175&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1730791548-RU0077-D_20_285_29.jpg?v=1764952176&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1730791548-RU0077-D_20_286_29.jpg?v=1764952176&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Mild Apricot", "Light Gray", "Black"] }
        ],
        colorImages: {
            "Mild Apricot": "https://flowouts.com/cdn/shop/files/b66c2b0bf18941808ea70aeccdf68100.png?v=1764952175&width=1946",
            "Light Gray": "https://flowouts.com/cdn/shop/files/62e636bcb08a4c5a86484c5e67fa6e73.png?v=1764952175&width=1946",
            "Black": "https://flowouts.com/cdn/shop/files/4a5ee578d55941428b981a1b2c1804f4.png?v=1764952175&width=1946"
        }
    },
    {
        id: "12",
        name: "Unisex Flower Straight Leg Sweatpants",
        price: "$24.65 USD",
        category: "Pants",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. These sweatpants feature a puff print flower icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/cefd55d96f8a40f38b28b527e5fff540.png?v=1764952286&width=1946",
            "https://flowouts.com/cdn/shop/files/32fde7381b814ab4bc74ec508990ccba.png?v=1764952286&width=1946",
            "https://flowouts.com/cdn/shop/files/9cf498ec45a441b19fa5f9531dcefbb6.png?v=1764952286&width=1946",
            "https://flowouts.com/cdn/shop/files/0ed138ede718444ea5bfd5dd4d88e9f2.png?v=1764952286&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738864-RK0034-_281_29TT_a93caeb8-6cb7-4cbe-9b26-06312744e0ad.jpg?v=1764952286&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738864-RK0034-_282_29TT_d921b214-e023-4d36-83e5-00f3ff904bd8.jpg?v=1764952286&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762765677-RK0034-D-_281_29_212f4016-b2b4-46c3-82de-973f4c3dfe92.jpg?v=1764952287&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738901-RK0034-D-_282_29_cb64dbbb-c31c-48b5-bcc3-9028dfb380a5.jpg?v=1764952287&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_284_29_b0570412-dfb8-49ed-b202-1a9c7ee2042c.jpg?v=1764952287&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_286_29_f79cf150-7bba-41ed-b26f-1417ee79c972.jpg?v=1764952287&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738901-RK0034-D-_283_29_1dcbac77-60d3-4332-a08d-f2083b15e525.jpg?v=1764952287&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_285_29_01c3aa36-6be3-4f54-b503-b0ad100f46fc.jpg?v=1764952287&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Flower Gray", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/cefd55d96f8a40f38b28b527e5fff540.png?v=1764952286&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/1e57c84b5b0b4ea787853bc1c8a68721.png?v=1764952286&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/92a8d8acb4cc46a28db74e0ee54f47fa.png?v=1764952286&width=1946"
        }
    },
    {
        id: "13",
        name: "Unisex Chef Straight Leg Sweatpants",
        price: "$24.65 USD",
        category: "Pants",
        description: "<p>The Chef Collection. Featuring a puff print Chef Hat icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/216b398c4c504279bb4401743fa3e1f2.png?v=1764899660&width=1946",
            "https://flowouts.com/cdn/shop/files/b3b003fb66ee4c858f3f261daf059b41.png?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/2684ef6f67f24aac8ba73e97da903f0e.png?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/91172a4215d449619b60fce177fa841d.png?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738864-RK0034-_281_29TT_9516696c-ea64-4070-ac3f-1a6cbbd18c87.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738864-RK0034-_282_29TT_cf68bd2b-d06d-48be-8f0e-74c3e913150d.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762765677-RK0034-D-_281_29_7b7704c1-89bb-4e05-8ebb-9b26e0f56da6.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738901-RK0034-D-_282_29_8aa53f20-39f6-47c6-a11d-90ea9b38a48c.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_284_29_969200f4-2f7d-40fe-bec7-5f73a0f9ab7b.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_286_29_5aee0b3b-f806-43b2-b99a-7ea6af16241e.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738901-RK0034-D-_283_29_3757ceca-51ff-409f-88be-478bb7eb98ba.jpg?v=1764899661&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1762738902-RK0034-D-_285_29_c3f9ec72-efc6-4969-955a-5a46f0b5e6b3.jpg?v=1764899663&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Flower Gray", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/216b398c4c504279bb4401743fa3e1f2.png?v=1764899660&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/e83372d0c05c4c2e9fc12259ec4152f6.png?v=1764899661&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/6dc4bfd62df248519be6daf31974dd93.png?v=1764899661&width=1946"
        }
    },
    {
        id: "14",
        name: "Unisex Chef Drawstring Sweatpants",
        price: "$23.60 USD",
        category: "Pants",
        description: "<p>The Chef Collection. Featuring a puff print Chef Hat icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/c6b0763a29664873b556c43107ed41d8.png?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/cf1592776a904c79a5ca4b72511c7310.png?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761708188-RK0029-_281_29TT.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761881474-RK0029-_284_29.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761708309-RK0029-F-_281_29.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761708310-RK0029-F-_282_29.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761708310-RK0029-F-_283_29.jpg?v=1764899421&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761801631-RK0029-D-_284_29.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761801631-RK0029-D-_285_29.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761801631-RK0029-D-_286_29.jpg?v=1764899421&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761801630-RK0029-D-_281_29.jpg?v=1764899420&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761801631-RK0029-D-_282_29.jpg?v=1764899421&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1761801631-RK0029-D-_283_29.jpg?v=1764899421&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["Black", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/11c8946cc2aa4274b2f621d0063cc878.png?v=1764899420&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/1e5fa22357f047648190e54398cbaf49.png?v=1764899422&width=1946"
        }
    },
    {
        id: "15",
        name: "Unisex Chef Clinched Sweatpants",
        price: "$27.65 USD",
        category: "Pants",
        description: "<p>The Chef Collection. Featuring a puff print Chef Hat icon on the left thigh.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/bbebaddfd0474ce4baee46561b5490d0.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/867734023ab3433a8df419cf4556f5ec.png?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/de65efe2de8849a6b6b5fe6458c3a197.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/37bf1328c19b4e31a14bec1a8d59dbac.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/c4c5c3e639384aedbda2d0305394dffb.png?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/8a4a1b509b5a4136b8ee01b92946e9c9.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/ba750949443f4485adbab040066d0d96.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760669131-AMK001-_285_29.png?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1760669132-AMK001-_286_29.png?v=1764899165&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750316260-AMK001-M-_281_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750316260-AMK001-M-_282_29.jpg?v=1764899167&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750316260-AMK001-M-_284_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1750316260-AMK001-M-_283_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1735023683-AMK001-D_20_281_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1735023708-AMK001-D_20_282_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1735023877-AMK001-D_20_283_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1735023700-AMK001-D_20_286_29.jpg?v=1764899166&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1735024779-AMK001-D_20_284_29.jpg?v=1764899166&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Cream Apricot", "Black", "Medium Blue", "Gray Coffee", "Gray", "Eden Green"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/a87a995820f4496cb3bbcec372023a4c.png?v=1764899165&width=1946",
            "Cream Apricot": "https://flowouts.com/cdn/shop/files/7e70ba41011240908dacaaafa2cd42c0.png?v=1764899165&width=1946",
            "Black": "https://flowouts.com/cdn/shop/files/c7770d828f69430c929ff8b3cfdaccc0.png?v=1764899165&width=1946",
            "Medium Blue": "https://flowouts.com/cdn/shop/files/33012df491b84530aa58be5354f10b90.png?v=1764899165&width=1946",
            "Gray Coffee": "https://flowouts.com/cdn/shop/files/6c5f83e5d04c4195a9f7e9c6e9f66833.png?v=1764899166&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/8e14287aafde4d10821768d9a7402caf.png?v=1764899165&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/ddbcb03f367d4920884084d4cb9a40aa.png?v=1764899166&width=1946"
        }
    },
    {
        id: "16",
        name: "Unisex Chef's Flowers Oversized Hoodie - Lights",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. This hoodie features a large puff print flower icon on the back and a small puff print flower icon on the left chest.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/e69a84747b0647a8ab85a55b0d3ecf16.png?v=1764864125&width=1946",
            "https://flowouts.com/cdn/shop/files/457eaef9b0614c6ba64d2195caae2474.png?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/f1c23bf0513441939b8d9fdd065da38e.png?v=1764864125&width=1946",
            "https://flowouts.com/cdn/shop/files/b3e1ddc37d32470eb105bb3ecc02419f.png?v=1764864125&width=1946",
            "https://flowouts.com/cdn/shop/files/4b35078ab0ac40b092839e3214e3ee8b.png?v=1764864125&width=1946",
            "https://flowouts.com/cdn/shop/files/f29deb6d24b849f69967eb80305271b1.png?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/c4770cc731eb4c95b8aeae81f665485e.png?v=1764864125&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_450c7ae4-fef2-48ef-b0ec-05172c7cf9ec.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29_d5abe5ad-6a4d-4de7-897a-44129287e604.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_1b627c25-60ed-4743-9027-cbcca05853a3.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_284_29_113ed708-c55b-4b1f-890b-e15f21641a53.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_605b3b01-10a9-4036-8779-e0c38133657e.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725664-R00286-D_20_281_29_621dfa57-bd38-496b-8b0c-5efe99574d8d.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_e4aec8f1-cc83-47c2-8f4e-45d180f5bf4a.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725674-R00286-D_20_284_29_34725815-06b4-4734-b77f-2f519a461cdf.jpg?v=1764864126&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29_06eef8cf-de29-442e-b1e4-4fc13793e073.jpg?v=1764864126&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Oat Gray", "Flower Gray", "Gray Apricot", "Dark Purple", "Medium Blue"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/e69a84747b0647a8ab85a55b0d3ecf16.png?v=1764864125&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/6c7e32f82a7c4e89bb4f576e2fcbb2c2.png?v=1764864126&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/a867df275141452eb601dd24b3b0e2ec.png?v=1764864125&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/6d589944da104046bffe6567eccb4edf.png?v=1764864126&width=1946",
            "Dark Purple": "https://flowouts.com/cdn/shop/files/ec43072f79204c8f98ea8b1875e645e9.png?v=1764864126&width=1946",
            "Medium Blue": "https://flowouts.com/cdn/shop/files/00419f3254d74b3f84d2bf0acc882249.png?v=1764864127&width=1946"
        }
    },
    {
        id: "17",
        name: "Unisex Chef's Flowers Oversized Hoodie - Darks",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Chef's Flowers. A collection inspired by the beauty of nature and the art of cooking. This hoodie features a large puff print flower icon on the back and a small puff print flower icon on the left chest.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1764864206&width=1946",
            "https://flowouts.com/cdn/shop/files/b830fb04c28b4a8f93a6a2628c7ca66c.png?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/d3491da0c3554a48b745ef652f391897.png?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/826d65c134d14abf9bd4de935ef995cb.png?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/8c74260617b049e29ef2e252c847e6cd.png?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/8114deb1da1d4802b3c8dd005212d1f1.png?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/82f14607ae7546939df7607bce83d4e4.png?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568909-R00286-F-_281_29_a694cd08-26d3-40d3-9a8a-2f36b17e03ba.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568911-R00286-F-_282_29_773fca80-6dff-47c5-801f-11af85e6750d.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_283_29_6ad519ed-8c0f-4f28-85e3-d3869e346c69.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1755568912-R00286-F-_284_29_46908f9f-15f9-44ff-8768-7cd3da8e90e5.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725658-R00286-D_20_282_29_8963178b-0699-4cd8-8f30-c9ae1a05e4eb.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725664-R00286-D_20_281_29_c49233e3-8899-420d-bc59-31aac4dbd831.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725669-R00286-D_20_283_29_8110a25d-f9b6-47c9-9ed7-94d7d85906b8.jpg?v=1764864207&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725674-R00286-D_20_284_29_5fe59e89-4a4b-4ef6-8f52-4a83c8ee4ece.jpg?v=1764864208&width=1946",
            "https://flowouts.com/cdn/shop/files/image-v1733725708-R00286-D_20_286_29_5141977a-ff0d-4741-8de3-f4e811e601fb.jpg?v=1764864207&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Klein Blue", "Gray", "Brown", "Navy Blue", "Eden Green"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/c50190668a55401f87a19fa434a429a5.png?v=1764864206&width=1946",
            "Klein Blue": "https://flowouts.com/cdn/shop/files/39df8316c4644a1b9c7731093dbcab56.png?v=1764864207&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/8eb5faa883bc4877b0a9e6319fb37731.png?v=1764864207&width=1946",
            "Brown": "https://flowouts.com/cdn/shop/files/130a73d8587744f98dd29186b915f651.png?v=1764864207&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/93060e1b8f814c5ea717d465ccfca79e.png?v=1764864207&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/75e592aad6964fb8811440db7b6b1d8e.png?v=1764864207&width=1946"
        }
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
    },
    // --- The Basics Collection ---
    {
        id: "74",
        name: "Unisex Clinched Sweatpants",
        price: "$27.65 USD",
        category: "Pants",
        description: "<p>The Basics. Essential comfort for everyday wear. These clinched sweatpants feature a relaxed fit with cuffed bottoms.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/e80ca858021f4159949106c0392d1a52_27d9cf03-2de7-43be-8c73-f9d716824d38.png?v=1761937700&width=1946",
            "https://flowouts.com/cdn/shop/files/2f3c051ccd714c23a4c7d7276f0c3f02_50729c78-2e98-423e-ba2d-34b8d08c0872.png?v=1761937700&width=1946",
            "https://flowouts.com/cdn/shop/files/9ab20a28cc0e446aba0bf5ee579f981a_ab2a4043-c678-4034-a663-f29baff7df64.png?v=1761937701&width=1946",
            "https://flowouts.com/cdn/shop/files/931049d4b9104f1d963bef46a9a2d6c3_66c292e5-722e-4f87-80e4-3598398b5bb0.png?v=1761937700&width=1946",
            "https://flowouts.com/cdn/shop/files/ba96c9d1433e4e2fbc6ee8cb75027187_0c9b8e3f-0366-4f4f-be88-3afacff9c7c2.png?v=1761937700&width=1946",
            "https://flowouts.com/cdn/shop/files/fe0aa0830a62466a8d5d3c14992ea335_6833567d-f304-45da-82d8-a07810c3f2ca.png?v=1761937700&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Apricot", "Light Gray"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/e80ca858021f4159949106c0392d1a52_27d9cf03-2de7-43be-8c73-f9d716824d38.png?v=1761937700&width=1946",
            "Apricot": "https://flowouts.com/cdn/shop/files/ba96c9d1433e4e2fbc6ee8cb75027187_0c9b8e3f-0366-4f4f-be88-3afacff9c7c2.png?v=1761937700&width=1946",
            "Light Gray": "https://flowouts.com/cdn/shop/files/fe0aa0830a62466a8d5d3c14992ea335_6833567d-f304-45da-82d8-a07810c3f2ca.png?v=1761937700&width=1946"
        }
    },
    {
        id: "75",
        name: "Unisex Straight Leg Sweatpants",
        price: "$24.65 USD",
        category: "Pants",
        description: "<p>The Basics. Essential comfort for everyday wear. These straight leg sweatpants feature a relaxed fit with a clean silhouette.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/0f0c3637a27147919a95b228e9a8aeec.png?v=1760473653&width=1946",
            "https://flowouts.com/cdn/shop/files/b02e532d355d4e5faf3f82a8cf92f1b1.png?v=1760473653&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/0f0c3637a27147919a95b228e9a8aeec.png?v=1760473653&width=1946"
        }
    },
    {
        id: "76",
        name: "Unisex Oversized Fleece",
        price: "$25.70 USD",
        category: "Hoodies",
        description: "<p>The Basics. Essential comfort for everyday wear. This oversized fleece hoodie features a relaxed fit for maximum comfort.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/1180d149ba504b309d926ecbb119a5b6.png?v=1760632664&width=1946",
            "https://flowouts.com/cdn/shop/files/2de780eb087d47d3ac319d539402ee08.png?v=1760632664&width=1946",
            "https://flowouts.com/cdn/shop/files/b697a7e17bc84a35a62544951748c6b1.png?v=1760632664&width=1946",
            "https://flowouts.com/cdn/shop/files/e1e635a3c5bc4767a9a220c83c3fb8a9.png?v=1760632665&width=1946",
            "https://flowouts.com/cdn/shop/files/a7f8b421e2194c76b8a3758591e4e6fa.png?v=1760632664&width=1946",
            "https://flowouts.com/cdn/shop/files/9dc4f12c191040eb8f8c8c8b1be9926e.png?v=1760632664&width=1946",
            "https://flowouts.com/cdn/shop/files/967436cd54a44cb3b09c60c93e55823d.png?v=1760632665&width=1946",
            "https://flowouts.com/cdn/shop/files/29274a68a0ce4d4a9fdccad6af339b53.png?v=1760632665&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Oat Gray", "Flower Gray", "Gray Apricot", "Dark Purple", "Medium Blue"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/1180d149ba504b309d926ecbb119a5b6.png?v=1760632664&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/a7f8b421e2194c76b8a3758591e4e6fa.png?v=1760632664&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/e1e635a3c5bc4767a9a220c83c3fb8a9.png?v=1760632665&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/9dc4f12c191040eb8f8c8c8b1be9926e.png?v=1760632664&width=1946",
            "Dark Purple": "https://flowouts.com/cdn/shop/files/967436cd54a44cb3b09c60c93e55823d.png?v=1760632665&width=1946",
            "Medium Blue": "https://flowouts.com/cdn/shop/files/29274a68a0ce4d4a9fdccad6af339b53.png?v=1760632665&width=1946"
        }
    },
    // --- Essentials: Within Reach Collection ---
    {
        id: "77",
        name: "Unisex Splatter Clinched Sweatpants",
        price: "$27.65 USD",
        category: "Pants",
        description: "<p>Essentials. Splatter paint design with a clinched fit for comfort and style.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/ba0712090709445e8b0951b89947f742.png?v=1766259942&width=1946",
            "https://flowouts.com/cdn/shop/files/c5c24be92ae44da78895eb2bc1ed6482.png?v=1766259942&width=1946",
            "https://flowouts.com/cdn/shop/files/a0b165d7073346d5a4263b4e9b6ae71b.png?v=1766259941&width=1946",
            "https://flowouts.com/cdn/shop/files/ca6645604c6b487e9b42a30bb8edd008.png?v=1766259941&width=1946",
            "https://flowouts.com/cdn/shop/files/04afec3eb4d24fb2b18b9da55f63cecd.png?v=1766259942&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Mild Apricot", "Light Gray", "Royal Blue", "Red"] }
        ],
        colorImages: {
            "Mild Apricot": "https://flowouts.com/cdn/shop/files/ba0712090709445e8b0951b89947f742.png?v=1766259942&width=1946",
            "Light Gray": "https://flowouts.com/cdn/shop/files/67078e33d5304322b93d9015e72daf12.png?v=1766259941&width=1946",
            "Royal Blue": "https://flowouts.com/cdn/shop/files/6b346d1759ef480a8e43813840b8fce3.png?v=1766259942&width=1946",
            "Red": "https://flowouts.com/cdn/shop/files/01e9e76b560d4cd09824e2907f5d4885.png?v=1766259942&width=1946"
        }
    },
    {
        id: "78",
        name: "Unisex Splatter Jogged Sweatpants",
        price: "$26.60 USD",
        category: "Pants",
        description: "<p>Essentials. Splatter paint design with a jogged fit.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/621604e9b93b4443bc26aeef03f8b224.png?v=1766260047&width=1946",
            "https://flowouts.com/cdn/shop/files/68f771c645cd4c52995afed5e359cd4d.png?v=1766260047&width=1946",
            "https://flowouts.com/cdn/shop/files/b0c03409441d413f81a8439ac6de8b61.png?v=1766260046&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/621604e9b93b4443bc26aeef03f8b224.png?v=1766260047&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/cd55c66ab40140848fa5bdc7181ce554.png?v=1766260047&width=1946"
        }
    },
    {
        id: "79",
        name: "Men's Icon Crewneck Sweatshirt",
        price: "$28.20 USD",
        category: "Sweatshirts",
        description: "<p>Essentials. Heavyweight crewneck with icon design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761&width=1946",
            "https://flowouts.com/cdn/shop/files/5a19cb83e1434c72937d37100d3f3231.png?v=1766262762&width=1946",
            "https://flowouts.com/cdn/shop/files/4ef9930326f042eca6be5bc4a2a00223.png?v=1766262762&width=1946",
            "https://flowouts.com/cdn/shop/files/741fa6c8a4924af9a7b41ec105b14f8a.png?v=1766262762&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Camel", "Water Blue", "Gray"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/7eb5a9c0fb9845f28b9b231597d9ddde.png?v=1766262761&width=1946",
            "Camel": "https://flowouts.com/cdn/shop/files/8d59a6da698c4aed8b700fa1f03ad93e.png?v=1766262761&width=1946",
            "Water Blue": "https://flowouts.com/cdn/shop/files/c8cc64c55bea467081499207a65af2a4.png?v=1766262762&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/3e3adf71c8e247ca8041e2f57f82c84e.png?v=1766262762&width=1946"
        }
    },
    {
        id: "80",
        name: "Men's Splatter Crewneck Sweatshirt",
        price: "$28.20 USD",
        category: "Sweatshirts",
        description: "<p>Essentials. Heavyweight crewneck with splatter design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/53560e1c741445a39875cd6ca2b3ed39.png?v=1766262326&width=1946",
            "https://flowouts.com/cdn/shop/files/fb867c73e7484ae3b490cc3e6ae6d506.png?v=1766262326&width=1946",
            "https://flowouts.com/cdn/shop/files/30f71bb623234b2b849250bb5cbdec9b.png?v=1766262326&width=1946",
            "https://flowouts.com/cdn/shop/files/cdc7b5cd5cc94cb7adfb8c35016e0c62.png?v=1766262327&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Camel", "Water Blue", "Gray"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/53560e1c741445a39875cd6ca2b3ed39.png?v=1766262326&width=1946",
            "Camel": "https://flowouts.com/cdn/shop/files/5fcd84c65cc64e659450aac0d7f28bc4.png?v=1766262327&width=1946",
            "Water Blue": "https://flowouts.com/cdn/shop/files/982c18a13b55404eab3d2598c0e43da4.png?v=1766262327&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/b2ce1a64ddd949a58d0e3e5bf2dc1ffb.png?v=1766262327&width=1946"
        }
    },
    {
        id: "81",
        name: "Women's Splatter Mock-Neck Crew Sweatshirt",
        price: "$26.70 USD",
        category: "Sweatshirts",
        description: "<p>Essentials. Fleece mock-neck with splatter design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/5e8153686f174247aea4208749b9bcd7.png?v=1766260646&width=1946",
            "https://flowouts.com/cdn/shop/files/eb06ac12ea7a497d84bb9fb69695c373.png?v=1766260646&width=1946",
            "https://flowouts.com/cdn/shop/files/b6ed6991cc1e40749c8bde152237d7f5.png?v=1766260646&width=1946",
            "https://flowouts.com/cdn/shop/files/9001c8ed9ffa48e697f36866004e1893.png?v=1766260646&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["White", "Flower Gray", "Yellow", "Cream Apricot", "Pink"] }
        ],
        colorImages: {
            "White": "https://flowouts.com/cdn/shop/files/5e8153686f174247aea4208749b9bcd7.png?v=1766260646&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/7c41056e24f744a795b90d5801595685.png?v=1766260646&width=1946",
            "Yellow": "https://flowouts.com/cdn/shop/files/80851f2e3d5749708f939c9ad680abda.png?v=1766260646&width=1946",
            "Cream Apricot": "https://flowouts.com/cdn/shop/files/47cd6a2ae76c449db4a76e007df4de91.png?v=1766260647&width=1946",
            "Pink": "https://flowouts.com/cdn/shop/files/bc6828abc7d445f6aa143a0fc125fc92.png?v=1766260646&width=1946"
        }
    },
    {
        id: "82",
        name: "Men's Vintage Crewneck Sweatshirt",
        price: "$28.20 USD",
        category: "Sweatshirts",
        description: "<p>Essentials. Heavyweight crewneck with vintage design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/39d8cee330d84552a63f1a5d738b8a58.png?v=1766260932&width=1946",
            "https://flowouts.com/cdn/shop/files/1ceedbc37c58499f9c2298daf6c02077.png?v=1766260932&width=1946",
            "https://flowouts.com/cdn/shop/files/fffea5285d024de08ad3a7dec0ce58c5.png?v=1766260932&width=1946",
            "https://flowouts.com/cdn/shop/files/0a4a12781a684c8eb04a756176c28725.png?v=1766260932&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Camel", "Gray", "Water Blue", "White"] }
        ],
        colorImages: {
            "Camel": "https://flowouts.com/cdn/shop/files/39d8cee330d84552a63f1a5d738b8a58.png?v=1766260932&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/1ceedbc37c58499f9c2298daf6c02077.png?v=1766260932&width=1946",
            "Water Blue": "https://flowouts.com/cdn/shop/files/fffea5285d024de08ad3a7dec0ce58c5.png?v=1766260932&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/0a4a12781a684c8eb04a756176c28725.png?v=1766260932&width=1946"
        }
    },
    {
        id: "83",
        name: "Unisex Vintage Oversized Hoodie",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Essentials. Oversized hoodie with vintage design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/c6c97668a9b44262a8cb9cb31cb6d41c.png?v=1766261096&width=1946",
            "https://flowouts.com/cdn/shop/files/16fc86c4a56040808b068788ddf2f734.png?v=1766261097&width=1946",
            "https://flowouts.com/cdn/shop/files/5d4a6a9e0e6d4ca59bbcaab9721a86e1.png?v=1766261097&width=1946",
            "https://flowouts.com/cdn/shop/files/b7de01e2cb7d4f3eb0c20f5336be7ed6.png?v=1766261097&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Flower Gray", "Gray Apricot", "Oat Gray", "White"] }
        ],
        colorImages: {
            "Flower Gray": "https://flowouts.com/cdn/shop/files/c6c97668a9b44262a8cb9cb31cb6d41c.png?v=1766261096&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/16fc86c4a56040808b068788ddf2f734.png?v=1766261097&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/5d4a6a9e0e6d4ca59bbcaab9721a86e1.png?v=1766261097&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/b7de01e2cb7d4f3eb0c20f5336be7ed6.png?v=1766261097&width=1946"
        }
    },
    {
        id: "84",
        name: "Women's Vintage Mock-Neck Crew Sweatshirt",
        price: "$26.70 USD",
        category: "Sweatshirts",
        description: "<p>Essentials. Fleece mock-neck with vintage design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/75a8bf34360740969d0b9038334bf950.png?v=1766262252&width=1946",
            "https://flowouts.com/cdn/shop/files/3f0e595e48824d81a30806770d0ae5e4.png?v=1766262252&width=1946",
            "https://flowouts.com/cdn/shop/files/643335520f7e4cdba44965bbc37ebfc1.png?v=1766262252&width=1946",
            "https://flowouts.com/cdn/shop/files/3eadefd7393f46d888e5def024b37981.png?v=1766262252&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Cream Apricot", "Flower Gray", "Pink", "White", "Yellow"] }
        ],
        colorImages: {
            "Cream Apricot": "https://flowouts.com/cdn/shop/files/75a8bf34360740969d0b9038334bf950.png?v=1766262252&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/3f0e595e48824d81a30806770d0ae5e4.png?v=1766262252&width=1946",
            "Pink": "https://flowouts.com/cdn/shop/files/643335520f7e4cdba44965bbc37ebfc1.png?v=1766262252&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/3eadefd7393f46d888e5def024b37981.png?v=1766262252&width=1946",
            "Yellow": "https://flowouts.com/cdn/shop/files/b07b2ae10e514849bad9a21ec4dfcd8f.png?v=1766262252&width=1946"
        }
    },
    {
        id: "85",
        name: "Women's Within Reach Mock-Neck Crew Sweatshirt",
        price: "$26.70 USD",
        category: "Sweatshirts",
        description: "<p>Essentials. Fleece mock-neck with Within Reach design.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/aec498b1a47d43f9bfb79805da86ae13.png?v=1766260751&width=1946",
            "https://flowouts.com/cdn/shop/files/d6b99d3775854593840cd44d011cadcf.png?v=1766260751&width=1946",
            "https://flowouts.com/cdn/shop/files/db34db6d90ac4ed3b712354a71b77a76.png?v=1766260752&width=1946",
            "https://flowouts.com/cdn/shop/files/61de2e0b47c3430090242407fe6a2f25.png?v=1766260751&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Cream Apricot", "Flower Gray", "Pink", "White", "Yellow"] }
        ],
        colorImages: {
            "Cream Apricot": "https://flowouts.com/cdn/shop/files/aec498b1a47d43f9bfb79805da86ae13.png?v=1766260751&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/d6b99d3775854593840cd44d011cadcf.png?v=1766260751&width=1946",
            "Pink": "https://flowouts.com/cdn/shop/files/db34db6d90ac4ed3b712354a71b77a76.png?v=1766260752&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/61de2e0b47c3430090242407fe6a2f25.png?v=1766260751&width=1946",
            "Yellow": "https://flowouts.com/cdn/shop/files/3b9c68eb7d584ba197d8106ec1f0230c.png?v=1766260751&width=1946"
        }
    },
    {
        id: "86",
        name: "Unisex Splatter Drawstring Sweatpants",
        price: "$23.60 USD",
        category: "Pants",
        description: "<p>Essentials. Splatter design with drawstring waist.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/ad9f92a6ddb74db0a80d0491186a60ea.png?v=1766260490&width=1946",
            "https://flowouts.com/cdn/shop/files/9c85cfc0a7994e4a85c573f5dbd93037.png?v=1766260491&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
            { name: "Color", values: ["Black", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/ad9f92a6ddb74db0a80d0491186a60ea.png?v=1766260490&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/9c85cfc0a7994e4a85c573f5dbd93037.png?v=1766260491&width=1946"
        }
    },
    {
        id: "87",
        name: "Unisex Splatter Straight-Leg Sweatpants",
        price: "$24.65 USD",
        category: "Pants",
        description: "<p>Essentials. Splatter design with straight leg fit.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/0676ec032a344c689ed856d5c4b02028.png?v=1766260280&width=1946",
            "https://flowouts.com/cdn/shop/files/9a744c7042a14cce89dabbdb2879b598.png?v=1766260280&width=1946",
            "https://flowouts.com/cdn/shop/files/e63bebb51e914374b37c32b30c791be3.png?v=1766260280&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Flower Gray", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/0676ec032a344c689ed856d5c4b02028.png?v=1766260280&width=1946",
            "Flower Gray": "https://flowouts.com/cdn/shop/files/9a744c7042a14cce89dabbdb2879b598.png?v=1766260280&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/e63bebb51e914374b37c32b30c791be3.png?v=1766260280&width=1946"
        }
    },
    {
        id: "88",
        name: "Unisex Oversized Within Reach Hoodie - Darks",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Essentials. Oversized hoodie with Within Reach design in dark colors.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/ec82284901064f6fbf03b968bdb9ddbf.png?v=1766195645&width=1946",
            "https://flowouts.com/cdn/shop/files/4c2394ddf17444bfa23baa663154adf1.png?v=1766195645&width=1946",
            "https://flowouts.com/cdn/shop/files/9c9f5ad972114c1da9f43b821e95fbd4.png?v=1766195645&width=1946",
            "https://flowouts.com/cdn/shop/files/11b7ec1dec754f68a034922e7155d422.png?v=1766195645&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Eden Green", "Gray", "Klein Blue", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/ec82284901064f6fbf03b968bdb9ddbf.png?v=1766195645&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/4c2394ddf17444bfa23baa663154adf1.png?v=1766195645&width=1946",
            "Gray": "https://flowouts.com/cdn/shop/files/9c9f5ad972114c1da9f43b821e95fbd4.png?v=1766195645&width=1946",
            "Klein Blue": "https://flowouts.com/cdn/shop/files/11b7ec1dec754f68a034922e7155d422.png?v=1766195645&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/8a7510b8225b4be49aeeeeaf0e8e5834.png?v=1766195645&width=1946"
        }
    },
    {
        id: "89",
        name: "Unisex Oversized Within Reach Hoodie",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Essentials. Oversized hoodie with Within Reach design in light colors.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/0efe2ef45ee04cc98401f5083e36db2a.png?v=1766195465&width=1946",
            "https://flowouts.com/cdn/shop/files/6ecd3b4c9425447082cfc1338a90174e.png?v=1766195465&width=1946",
            "https://flowouts.com/cdn/shop/files/03f91e186398473a9c79d9073aa754d3.png?v=1766195465&width=1946",
            "https://flowouts.com/cdn/shop/files/99dcb7479bbf4a0193b2c9523367b786.png?v=1766195465&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Flower Gray", "Gray Apricot", "Oat Gray", "White"] }
        ],
        colorImages: {
            "Flower Gray": "https://flowouts.com/cdn/shop/files/0efe2ef45ee04cc98401f5083e36db2a.png?v=1766195465&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/6ecd3b4c9425447082cfc1338a90174e.png?v=1766195465&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/03f91e186398473a9c79d9073aa754d3.png?v=1766195465&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/99dcb7479bbf4a0193b2c9523367b786.png?v=1766195465&width=1946"
        }
    },
    {
        id: "90",
        name: "Unisex Oversized Essentials Splatter Hoodie - Darks",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Essentials. Oversized hoodie with splatter design in dark colors.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/4e85450ea0224317b299db8e6483f270.png?v=1766194926&width=1946",
            "https://flowouts.com/cdn/shop/files/91ba25cd06b14f239c986f6f74fd25a0.png?v=1766194925&width=1946",
            "https://flowouts.com/cdn/shop/files/ba0e527c42c44499a153b012bf54473f.png?v=1766194925&width=1946",
            "https://flowouts.com/cdn/shop/files/c32ee6b1a17f41279c3937ab27f5288e.png?v=1766194925&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Black", "Brown", "Coffee", "Eden Green", "Klein Blue", "Navy Blue"] }
        ],
        colorImages: {
            "Black": "https://flowouts.com/cdn/shop/files/4e85450ea0224317b299db8e6483f270.png?v=1766194926&width=1946",
            "Brown": "https://flowouts.com/cdn/shop/files/91ba25cd06b14f239c986f6f74fd25a0.png?v=1766194925&width=1946",
            "Coffee": "https://flowouts.com/cdn/shop/files/ba0e527c42c44499a153b012bf54473f.png?v=1766194925&width=1946",
            "Eden Green": "https://flowouts.com/cdn/shop/files/c32ee6b1a17f41279c3937ab27f5288e.png?v=1766194925&width=1946",
            "Klein Blue": "https://flowouts.com/cdn/shop/files/bd36a3850b5b45118f5834f85dad6998.png?v=1766194925&width=1946",
            "Navy Blue": "https://flowouts.com/cdn/shop/files/727fc4dad32b43b49a422eb524203b18.png?v=1766194925&width=1946"
        }
    },
    {
        id: "91",
        name: "Unisex Oversized Essentials Splatter Hoodie",
        price: "$27.20 USD",
        category: "Hoodies",
        description: "<p>Essentials. Oversized hoodie with splatter design in light colors.</p>",
        images: [
            "https://flowouts.com/cdn/shop/files/d4f3685e8a1748e694ac0003a4aa6724.png?v=1766194340&width=1946",
            "https://flowouts.com/cdn/shop/files/a5cf847710254254b434bc1ee0f42de0.png?v=1766194340&width=1946",
            "https://flowouts.com/cdn/shop/files/e9e23c74ec8242118341181547e78555.png?v=1766194340&width=1946",
            "https://flowouts.com/cdn/shop/files/2562b4773aab45a3bb7d137db4bc6956.png?v=1766194340&width=1946"
        ],
        options: [
            { name: "Size", values: ["S", "M", "L", "XL", "2XL"] },
            { name: "Color", values: ["Flower Gray", "Gray Apricot", "Oat Gray", "White"] }
        ],
        colorImages: {
            "Flower Gray": "https://flowouts.com/cdn/shop/files/d4f3685e8a1748e694ac0003a4aa6724.png?v=1766194340&width=1946",
            "Gray Apricot": "https://flowouts.com/cdn/shop/files/a5cf847710254254b434bc1ee0f42de0.png?v=1766194340&width=1946",
            "Oat Gray": "https://flowouts.com/cdn/shop/files/e9e23c74ec8242118341181547e78555.png?v=1766194340&width=1946",
            "White": "https://flowouts.com/cdn/shop/files/2562b4773aab45a3bb7d137db4bc6956.png?v=1766194340&width=1946"
        }
    }
];
