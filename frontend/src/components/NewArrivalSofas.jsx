import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI } from '../services/api';

const NewArrivalSofas = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await productsAPI.getAll({
                    category: 'Tshirts',
                    sortBy: 'createdAt',
                    sortOrder: 'desc',
                    limit: 8
                });
                if (!ignore && response.data.success) {
                    setProducts(response.data.data || []);
                }
            } catch (err) {
                if (!ignore) {
                    setProducts([]);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        };

        fetchProducts();
        return () => { ignore = true; };
    }, []);

    if (loading || products.length === 0) {
        return null;
    }

    return (
        <section className="w-full bg-white py-12 sm:py-16 border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#6b7280] mb-3">Trend Drop</p>
                    <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-gray-900 mb-2">
                        New Arrival
                    </h2>
                    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                        Fresh styles curated for this season. Discover statement staples you can wear from day to night.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link
                            to={`/product/${product._id || product.id}`}
                            key={product._id || product.id}
                            className="group block"
                        >
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#111827] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                                        {product.tag || 'New'}
                                    </div>
                                    <div className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                                        Limited
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2.5">
                                        <p className="text-gray-500 text-xs uppercase tracking-[0.14em] font-semibold">{product.category}</p>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <span className="text-xs text-gray-500 font-medium">{product.rating || 0}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-gray-900 text-lg font-semibold mb-3 leading-tight group-hover:text-[#111827] transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-[#111827] font-bold text-lg">₹{product.price.toLocaleString()}</p>
                                        <span className="text-sm font-semibold text-[#111827]">Shop Now →</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivalSofas;
