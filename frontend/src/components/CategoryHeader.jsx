import React from 'react'
import { Link } from 'react-router-dom'

export const navLinks = [
    { name: 'Men Shirts', to: '/products?category=Formal Shirts' },
    { name: 'Women Shirts', to: '/products?category=Women Shirts' },
    { name: 'Shorts', to: '/products?category=Shorts' },
    { name: 'Men Tshirts', to: '/products?category=Tshirts' },
    { name: 'Women Tshirts', to: '/products?category=Women Tshirts' },
    { name: 'Trouser', to: '/products?category=Pants' },
    { name: 'Shoes', to: '/products?category=Shoes' },
    { name: 'Sunglasses', to: '/products?category=Sunglasses' },
    { name: 'Watches', to: '/products?category=Watches' },
]

const CategoryHeader = ({ activeLink, setActiveLink }) => {
    return (
        <div className="py-2 overflow-x-auto no-scrollbar bg-white shadow-sm border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 flex items-center sm:justify-start lg:justify-center min-w-max gap-4 sm:gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        onClick={() => setActiveLink(link.name)}
                        className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-200 border ${activeLink === link.name
                            ? 'text-[#111827] border-[#111827] bg-[#111827]/5'
                            : 'text-gray-700 border-transparent hover:text-[#111827] hover:bg-gray-50'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryHeader
