import React from 'react';
import { Link } from 'react-router-dom';

const InteriorSolutions = () => {
    return (
        <section className="w-full bg-[#f8fafc] py-10 sm:py-14">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_20px_70px_-30px_rgba(17,24,39,0.35)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Content Side */}
                        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                            <span className="inline-flex items-center gap-2 text-[#111827] font-bold tracking-widest uppercase mb-5 text-xs sm:text-sm">
                                <span className="w-2 h-2 rounded-full bg-[#111827]" />
                                Best Seller Spotlight
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-5 leading-tight">
                                Trending Styles for <br />
                                <span className="text-[#111827] italic">Modern Wardrobes</span>
                            </h2>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#111827] text-white font-medium hover:bg-[#1f2937] transition-colors rounded-sm text-center w-fit">
                                    Shop Best Sellers
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                <span className="text-sm text-gray-500">Trusted by 10,000+ style-focused shoppers</span>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-[320px] sm:h-[380px] lg:h-auto bg-[#eef2f7] flex items-center justify-center p-6 lg:p-8">
                            <img
                                src="https://res.cloudinary.com/dzd47mpdo/image/upload/v1774250844/bf6032f6-8f09-4c4d-8fd4-e4dad223bd0f.png"
                                alt="Best Seller Fashion Collection"
                                className="w-full max-w-xl lg:max-w-2xl h-full object-cover rounded-2xl shadow-xl"
                            />
                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 shadow-md">
                                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1">This Week</p>
                                <p className="text-sm font-semibold text-gray-900">Most Loved Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteriorSolutions;
