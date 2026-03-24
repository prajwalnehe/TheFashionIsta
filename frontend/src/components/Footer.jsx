import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0b0f19] text-white pt-16 sm:pt-20 pb-8 border-t border-white/10">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Banner */}
                <div className="rounded-sm border border-white/15 bg-gradient-to-r from-[#111827] to-[#1f2937] px-6 py-8 sm:px-10 sm:py-10 mb-12">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d1d5db] mb-3">Style Letter</p>
                            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">Weekly Fashion Drops</h3>
                            <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                                Join TheFashionIsta newsletter for exclusive edits, trend forecasts, and members-only offers.
                            </p>
                        </div>
                        <div className="flex w-full lg:w-auto gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-white/40 w-full lg:w-72"
                            />
                            <button className="bg-white text-[#111827] px-6 py-3 rounded-sm font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-gray-200 transition-colors">
                            TheFashionIsta
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed mt-4 max-w-md">
                            Curated apparel for modern wardrobes. We craft premium essentials and statement pieces designed for confidence, comfort, and everyday luxury.
                        </p>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d1d5db] mb-5">Shop</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-300">
                            <li><Link to="/products?category=Formal Shirts" className="hover:text-white transition-colors">Men Shirts</Link></li>
                            <li><Link to="/products?category=Women Shirts" className="hover:text-white transition-colors">Women Shirts</Link></li>
                            <li><Link to="/products?category=Shorts" className="hover:text-white transition-colors">Shorts</Link></li>
                            <li><Link to="/products?category=Tshirts" className="hover:text-white transition-colors">Men Tshirts</Link></li>
                            <li><Link to="/products?category=Women Tshirts" className="hover:text-white transition-colors">Women Tshirts</Link></li>
                            <li><Link to="/products?category=Pants" className="hover:text-white transition-colors">Trouser</Link></li>
                            <li><Link to="/products?category=Shoes" className="hover:text-white transition-colors">Shoes</Link></li>
                            <li><Link to="/products?category=Sunglasses" className="hover:text-white transition-colors">Sunglasses</Link></li>
                            <li><Link to="/products?category=Watches" className="hover:text-white transition-colors">Watches</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d1d5db] mb-5">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#track" className="hover:text-white transition-colors">Track Order</a></li>
                            <li><a href="#shipping" className="hover:text-white transition-colors">Shipping</a></li>
                            <li><a href="#returns" className="hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d1d5db] mb-5">Contact</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            TheFashionIsta Pvt. Ltd.
                            <br />
                            Bengaluru, Karnataka
                            <br />
                            India
                        </p>
                        <p className="text-sm text-gray-300 mt-4">
                            support@thefashionista.com
                            <br />
                            +91 44 4561 4700
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-xs sm:text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TheFashionIsta. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
