import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { wishlistAPI, cartAPI } from '../services/api'
import { useAuth } from '../context/AuthContext'

const Wishlist = () => {
    const { isAuthenticated } = useAuth()
    const [selectedItems, setSelectedItems] = useState([])
    const [sortBy, setSortBy] = useState('newest')
    const [filterBy, setFilterBy] = useState('all')
    const [wishlistItems, setWishlistItems] = useState([])
    const [loading, setLoading] = useState(true)

    // Fetch wishlist from API
    useEffect(() => {
        // Only fetch if authenticated
        if (!isAuthenticated) {
            setLoading(false)
            return
        }

        const fetchWishlist = async () => {
            try {
                setLoading(true)
                const response = await wishlistAPI.get()
                if (response.data.success) {
                    setWishlistItems(response.data.data || [])
                }
            } catch (error) {
                console.error('Error fetching wishlist:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchWishlist()
    }, [isAuthenticated])

    // Filter and sort logic
    const getFilteredItems = () => {
        let filtered = [...wishlistItems]

        if (filterBy === 'in-stock') {
            filtered = filtered.filter(item => item.inStock)
        } else if (filterBy === 'out-of-stock') {
            filtered = filtered.filter(item => !item.inStock)
        }

        // Sort
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price)
        } else if (sortBy === 'discount') {
            filtered.sort((a, b) => {
                const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0
                const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0
                return discountB - discountA
            })
        } else if (sortBy === 'newest') {
            filtered.sort((a, b) => new Date(b.createdAt || b.addedOn) - new Date(a.createdAt || a.addedOn))
        }

        return filtered
    }

    const filteredItems = getFilteredItems()

    const handleRemoveFromWishlist = async (productId) => {
        try {
            await wishlistAPI.remove(productId)
            setWishlistItems(prev => prev.filter(item => (item._id || item.id) !== productId))
            setSelectedItems(prev => prev.filter(id => id !== productId))
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to remove from wishlist')
        }
    }

    const handleAddToCart = async (productId) => {
        try {
            await cartAPI.add({ productId, quantity: 1 })
            alert('Item added to cart!')
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to add to cart')
        }
    }

    const handleMoveSelectedToCart = async () => {
        try {
            for (const productId of selectedItems) {
                await cartAPI.add({ productId, quantity: 1 })
            }
            alert('Items added to cart!')
            setSelectedItems([])
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to add items to cart')
        }
    }

    const handleRemoveSelected = async () => {
        try {
            for (const productId of selectedItems) {
                await wishlistAPI.remove(productId)
            }
            setWishlistItems(prev => prev.filter(item => !selectedItems.includes(item._id || item.id)))
            setSelectedItems([])
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to remove items')
        }
    }

    const handleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    const handleSelectAll = () => {
        if (selectedItems.length === filteredItems.length) {
            setSelectedItems([])
        } else {
            setSelectedItems(filteredItems.map(item => item._id || item.id))
        }
    }

    const totalSavings = filteredItems.reduce((sum, item) => {
        if (item.originalPrice && item.originalPrice > item.price) {
            return sum + (item.originalPrice - item.price)
        }
        return sum
    }, 0)

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#111827]"></div>
            </div>
        )
    }

    // Show login prompt if not authenticated
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
                <div className="text-center max-w-md px-4">
                    <div className="mb-6">
                        <svg className="w-32 h-32 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Please Login</h2>
                    <p className="text-gray-500 mb-6">Login to view your wishlist and save your favorite items</p>
                    <div className="flex gap-3 justify-center">
                        <Link
                            to="/login"
                            className="inline-block px-8 py-3 bg-[#111827] text-white font-semibold rounded-lg hover:bg-[#70482d] transition-colors shadow-md hover:shadow-lg"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="inline-block px-8 py-3 border-2 border-[#111827] text-[#111827] font-semibold rounded-lg hover:bg-[#111827] hover:text-white transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>
                    <Link to="/" className="inline-block mt-4 text-sm text-gray-600 hover:text-gray-900">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    if (filteredItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
                <div className="text-center max-w-md px-4">
                    <div className="mb-6">
                        <svg className="w-32 h-32 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Wishlist is Empty</h2>
                    <p className="text-gray-500 mb-6">Save items you love for later!</p>
                    <Link
                        to="/products"
                        className="inline-block px-8 py-3 bg-[#111827] text-white font-semibold rounded-lg hover:bg-[#70482d] transition-colors shadow-md hover:shadow-lg"
                    >
                        Start Shopping
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-100 min-h-screen py-6">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                My Wishlist
                            </h1>
                            <p className="text-gray-600">
                                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} •
                                <span className="text-green-600 font-semibold ml-1">
                                    Save ₹{totalSavings.toLocaleString()}
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Link
                                to="/products"
                                className="flex-1 md:flex-none px-6 py-2.5 border-2 border-[#111827] text-[#111827] rounded-lg hover:bg-[#111827] hover:text-white transition-colors font-medium text-center"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Filters and Sort */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        {/* Bulk Actions */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                                    onChange={handleSelectAll}
                                    className="form-checkbox h-5 w-5 text-[#111827] rounded focus:ring-[#111827]"
                                />
                                <span className="text-sm font-medium text-gray-700">Select All</span>
                            </label>
                            {selectedItems.length > 0 && (
                                <>
                                    <span className="text-sm text-gray-500">
                                        {selectedItems.length} selected
                                    </span>
                                    <button
                                        onClick={handleMoveSelectedToCart}
                                        className="px-4 py-1.5 bg-[#111827] text-white rounded-lg hover:bg-[#70482d] transition-colors text-sm font-medium"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={handleRemoveSelected}
                                        className="px-4 py-1.5 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                                    >
                                        Remove
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Filter and Sort */}
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <select
                                value={filterBy}
                                onChange={(e) => setFilterBy(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#111827] focus:border-transparent text-sm"
                            >
                                <option value="all">All Items</option>
                                <option value="in-stock">In Stock</option>
                                <option value="out-of-stock">Out of Stock</option>
                            </select>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#111827] focus:border-transparent text-sm"
                            >
                                <option value="newest">Newest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="discount">Highest Discount</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Wishlist Grid - Simplified for brevity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => {
                            const productId = (item._id || item.id)?.toString()

                            const productImage =
                                item.image ||
                                item.images?.image1 ||
                                item.images?.image2 ||
                                item.images?.image3 ||
                                'https://via.placeholder.com/800x800?text=Product+Image'

                            const productTitle = item.name || item.title || 'Untitled Product'

                            const computedPrice =
                                typeof item.price === 'number'
                                    ? item.price
                                    : (typeof item.mrp === 'number'
                                        ? Math.round(item.mrp - ((item.mrp * (item.discountPercent || 0)) / 100))
                                        : 0)

                            const computedOriginal =
                                typeof item.originalPrice === 'number'
                                    ? item.originalPrice
                                    : (typeof item.mrp === 'number' ? item.mrp : computedPrice)

                            return (
                                <div
                                    key={productId}
                                    className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
                                >
                                    <div className="relative">
                                        <img
                                            src={productImage}
                                            alt={productTitle}
                                            className="w-full aspect-square object-cover bg-gray-50"
                                            loading="lazy"
                                        />

                                        <div className="absolute left-3 top-3">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={productId ? selectedItems.includes(productId) : false}
                                                    onChange={() => productId && handleSelectItem(productId)}
                                                    className="h-4 w-4 rounded text-[#111827]"
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {item.category || item.tag || ''}
                                        </div>
                                        <h3 className="text-gray-900 font-bold text-sm mt-1 line-clamp-2">
                                            {productTitle}
                                        </h3>

                                        <div className="flex items-center gap-3 mt-3">
                                            <span className="text-[#111827] font-bold">
                                                ₹{computedPrice.toLocaleString()}
                                            </span>
                                            {computedOriginal && computedOriginal !== computedPrice && (
                                                <span className="text-gray-500 line-through text-xs">
                                                    ₹{computedOriginal.toLocaleString()}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2 mt-4">
                                            <button
                                                className="flex-1 px-3 py-2 bg-[#111827] text-white text-xs font-semibold rounded-lg hover:bg-[#1f2937] transition-colors"
                                                onClick={() => productId && handleAddToCart(productId)}
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                className="px-3 py-2 border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                                                onClick={() => productId && handleRemoveFromWishlist(productId)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
