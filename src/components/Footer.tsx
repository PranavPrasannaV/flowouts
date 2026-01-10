import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-6 md:px-12 border-t border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">Flow</h2>
                    <p className="text-neutral-400 text-sm max-w-sm">
                        Elevating everyday essentials with premium quality and minimalist design.
                        Join the movement.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Shop</h3>
                    <ul className="space-y-4 text-neutral-400 text-sm">
                        <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                        <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
                        <li><Link href="/products?category=Accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h3>
                    <ul className="space-y-4 text-neutral-400 text-sm">
                        <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                        <li><Link href="mailto:contact@flow.com" className="hover:text-white transition-colors">Contact Me</Link></li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                <p>© 2026 Flow. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
