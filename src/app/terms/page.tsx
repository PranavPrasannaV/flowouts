import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Header />
            <section className="flex-1 pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold uppercase mb-8">Terms of Service</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Welcome to Flow. By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    <br /><br />
                    (Placeholder for full legal text)
                </p>
            </section>
            <Footer />
        </main>
    );
}
