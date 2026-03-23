import React from 'react'
import { Link } from 'react-router-dom'

const PopularCategories = () => {
    // Keep these values in sync with `CategoryHeader` URL query `category`.
    // Display titles are the user-facing names (matching your photo).
    const categories = [
        {
            id: 1,
            title: 'MEN SHIRTS',
            link: 'Formal Shirts',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774259795/1fa59826-0cad-4874-a645-9f2b9ad970ec.png',
        },
        {
            id: 2,
            title: 'WOMEN SHIRTS',
            link: 'Women Shirts',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774259706/9377a989-b775-4789-afc2-b74801591b6b.png',
        },
        {
            id: 3,
            title: 'SHORTS',
            link: 'Shorts',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774259850/50e6efd3-7b91-4028-b5d8-bbba0759a067.png',
        },
        {
            id: 4,
            title: 'MEN TSHIRTS',
            link: 'Tshirts',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774259921/835a01fe-6f11-41a9-baf3-1cd5d2426069.png',
        },
        {
            id: 5,
            title: 'WOMEN TSHIRTS',
            link: 'Women Tshirts',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774259953/eca60a58-d18a-4e69-b984-c38057389572.png',
        },
        {
            id: 6,
            title: 'TROUSER',
            link: 'Pants',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774260043/e8d4841f-a00b-4926-872c-9897a87d46f1.png',
        },
        {
            id: 7,
            title: 'SHOES',
            link: 'Shoes',
            image: 'https://res.cloudinary.com/dzd47mpdo/image/upload/v1774260194/e53152db-8bfe-40cd-9d92-4fa44ed1eadf.png',
        },
        {
            id: 8,
            title: 'SUNGLASSES',
            link: 'Sunglasses',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
        },
        {
            id: 9,
            title: 'WATCHES',
            link: 'Watches',
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400',
        },
    ]

    return (
        <section className="w-full bg-white py-12 sm:py-16">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-gray-900 mb-4">
                        Popular Categories
                    </h2>
                    <div className="w-16 sm:w-20 h-0.5 bg-amber-300 mx-auto" />
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
                    {categories.map((category) => (
                        <Link
                            to={`/products?category=${encodeURIComponent(category.link)}`}
                            key={category.id}
                            className="group cursor-pointer flex flex-col items-center w-full max-w-[220px] sm:max-w-[240px]"
                        >
                            {/* Image Container */}
                            <div className="w-full aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover object-center"
                                    loading="lazy"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-medium text-gray-700 text-center group-hover:text-[#111827] transition-colors uppercase tracking-wider">
                                {category.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularCategories
