"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function SignIn() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const res = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid credentials. Try user/password.");
            setIsLoading(false);
        } else {
            router.push("/");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">
            {/* Left Side - Image/Brand */}
            <div className="hidden md:flex flex-1 bg-gradient-to-br from-neutral-900 via-black to-neutral-800 relative overflow-hidden items-center justify-center">
                {/* Abstract decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
                </div>
                <div className="relative z-10 p-12 text-white text-center">
                    <h1 className="text-6xl font-bold tracking-tighter uppercase mb-6">Flow</h1>
                    <p className="text-xl max-w-md opacity-80">
                        Join our community of minimalists. Experience premium quality designed for the modern individual.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-24 relative">
                <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Store
                </Link>

                <div className="max-w-md w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                        <p className="text-neutral-500 mb-8">Enter your credentials to access your account.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-sm outline-none focus:border-black dark:focus:border-white transition-colors"
                                    placeholder="user"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-sm outline-none focus:border-black dark:focus:border-white transition-colors"
                                    placeholder="password"
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm font-medium">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest p-4 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                                {isLoading ? "Signing In..." : "Sign In"}
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-neutral-500">
                            Don't have an account? <a href="#" className="font-bold text-foreground hover:underline">Sign Up</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
