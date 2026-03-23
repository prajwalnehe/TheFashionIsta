import React from 'react';
import { Link } from 'react-router-dom';

const StyleInspiration = () => {
    return (
        <section className="w-full bg-[#f8fafc] py-16 sm:py-24">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Side - Composition */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://res.cloudinary.com/dzd47mpdo/image/upload/v1774248317/35a0e646-89dd-4d5b-919d-c1f36cd90bb4.png"
                                alt="Fashion Streetwear Collection"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
                        <h4 className="text-[#111827] font-bold tracking-[0.2em] uppercase mb-4 text-xs">Aesthetics & Comfort</h4>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            Where Style Meets <br />
                            <span className="text-[#111827] italic">Everyday Ease</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Build a fashion wardrobe that feels as good as it looks. From breathable fits to statement silhouettes, each piece is designed for confidence, movement, and modern street-to-smart styling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/products" className="px-8 py-4 bg-[#111827] text-white font-medium hover:bg-[#1f2937] transition-colors shadow-lg hover:shadow-xl rounded-sm">
                                Explore Fashion Edit
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold text-[#111827]">1200+</h3>
                                <p className="text-sm text-gray-500 mt-1">Fashion Styles</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[#111827]">30k+</h3>
                                <p className="text-sm text-gray-500 mt-1">Happy Shoppers</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[#111827]">100%</h3>
                                <p className="text-sm text-gray-500 mt-1">Fit & Quality Checks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StyleInspiration;
