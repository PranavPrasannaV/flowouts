import { products } from "@/data/products";
import { ProductCard } from "@/components/FeaturedCollection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Header />
            <section className="flex-1 pt-32 pb-24 px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
                    All Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
