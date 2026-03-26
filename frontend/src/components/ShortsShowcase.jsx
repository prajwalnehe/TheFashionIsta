import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productsAPI } from '../services/api'

const ShortsShowcase = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let ignore = false

        const fetchShorts = async () => {
            try {
                setLoading(true)
                const response = await productsAPI.getAll({
                    category: 'Shorts',
                    sortBy: 'createdAt',
                    sortOrder: 'desc',
                    limit: 8
                })

                if (!ignore && response.data.success) {
                    setProducts(response.data.data || [])
                }
            } catch (err) {
                // Keep silent to avoid breaking the home page.
                if (!ignore) setProducts([])
            } finally {
                if (!ignore) setLoading(false)
            }
        }

        fetchShorts()
        return () => {
            ignore = true
        }
    }, [])

    const getProductImage = (product) => {
        return (
            product.image ||
            product.images?.image1 ||
            product.images?.image2 ||
            product.images?.image3 ||
            'https://via.placeholder.com/900x900?text=Product+Image'
        )
    }

    const getProductName = (product) => {
        return product.name || product.title || 'Product'
    }

    const getComputedPrice = (product) => {
        if (typeof product.price === 'number') return product.price
        if (typeof product.mrp === 'number') {
            const discount = product.discountPercent || 0
            return Math.round(product.mrp - ((product.mrp * discount) / 100))
        }
        return 0
    }

    const getComputedOriginalPrice = (product) => {
        if (typeof product.originalPrice === 'number') return product.originalPrice
        if (typeof product.mrp === 'number') return product.mrp
        return null
    }

    if (loading) return null

    return (
        <section className="w-full bg-white py-12 sm:py-16 border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-gray-900 mb-3">
                        Shorts
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        A fresh edit of everyday comfort pieces, styled for effortless movement.
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">
                        No shorts found.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => {
                            const productImage = getProductImage(product)
                            const productName = getProductName(product)
                            const computedPrice = getComputedPrice(product)
                            const computedOriginal = getComputedOriginalPrice(product)

                            return (
                                <Link
                                    to={`/product/${product._id || product.id}`}
                                    key={product._id || product.id}
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                            <img
                                                src={productImage}
                                                alt={productName}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#111827] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                                                {product.tag || 'New'}
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-2.5">
                                                <p className="text-gray-500 text-xs uppercase tracking-[0.14em] font-semibold">
                                                    {product.category || 'Shorts'}
                                                </p>
                                            </div>

                                            <h3 className="text-gray-900 text-lg font-semibold mb-3 leading-tight group-hover:text-[#111827] transition-colors line-clamp-1">
                                                {productName}
                                            </h3>

                                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-[#111827] font-bold text-lg">
                                                    ₹{computedPrice.toLocaleString()}
                                                </p>
                                                {computedOriginal && computedOriginal !== computedPrice && (
                                                    <p className="text-sm text-gray-400 line-through">
                                                        ₹{computedOriginal.toLocaleString()}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ShortsShowcase

