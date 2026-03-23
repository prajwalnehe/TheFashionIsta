import React from 'react';
import { Link } from 'react-router-dom';

const ModernLuxury = () => {
    return (
        <section className="w-full bg-[#f8fafc] py-10 sm:py-14 overflow-hidden border-y border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative order-1 lg:order-1">
                        {/* New Arrival Badge - Mobile Only */}
                        <div className="text-center mb-6 lg:hidden">
                            <span className="inline-block py-1 px-3 border border-[#111827] rounded-full text-[#111827] text-xs font-bold tracking-[0.2em] uppercase">
                                Trend Drop
                            </span>
                        </div>
                        <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-t-full overflow-hidden shadow-2xl">
                            <img
                                src="https://res.cloudinary.com/dzd47mpdo/image/upload/v1774249210/a5b9d8ad-13e1-4ec4-a962-d4361b86bf0b.png"
                                alt="New Season Fashion Edit"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -top-6 -right-6 lg:right-10 w-48 h-48 bg-[#e5e7eb] rounded-full z-0 hidden lg:block" />
                        <div className="absolute -bottom-6 -left-6 lg:left-10 w-32 h-32 border-2 border-[#111827]/20 rounded-full z-0 hidden lg:block" />

                    </div>

                    {/* Content Side */}
                    <div className="order-2 lg:order-2 text-center">
                        <span className="hidden lg:inline-block py-1 px-3 border border-[#111827] rounded-full text-[#111827] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            Trend Drop
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 leading-none">
                            Street <br />
                            <span className="text-[#111827]">Luxury</span> Edit.
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-lg mx-auto">
                            Refresh your wardrobe with elevated essentials made for modern movement. Discover premium fabrics, confident cuts, and statement layering pieces built for everyday style.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products" className="group bg-[#111827] text-white px-8 py-4 rounded-sm font-medium hover:bg-[#1f2937] transition-all flex items-center justify-center gap-2">
                                Shop The Edit
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ModernLuxury;
