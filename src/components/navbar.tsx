'use client'

import Link from "next/link"
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react'


export default function NavBar() {
  return (
    <nav className="bg-[#FBEBB5] px-6 py-4">
      <div className="flex items-center justify-between">
        
        {/* Center Section (Navigation Links) */}
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* Right Section (Icons) */}
        <div className="flex mr-3 items-center space-x-5">
          <NavIcons />
          {/* Hamburger Menu - Visible only on mobile */}
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="space-y-2 text-center py-4">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block py-2 text-sm font-bold" // Make text bold for mobile
    : "text-sm font-bold text-center relative hover:underline" // Make text bold for desktop

  return (
    <>
      <Link className={linkClass} href="/">Home</Link>
      <Link className={linkClass} href="/shop">Shop</Link>
      <Link className={linkClass} href="/about">About</Link>
      <Link className={linkClass} href="/contact">Contact</Link>
    </>
  )
}

function NavIcons() {
  return (
    <>
     
      <button  className="p-2">
         <Link href="/login">
        <User className="h-5 w-5" />
        
        <span className="sr-only">Account</span>
        </Link>
      </button>
      <button className="p-2">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </button>
      <button className="p-2">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Wishlist</span>
      </button>
      <button className="p-2">
        <Link href="/Cart">
        <ShoppingCart className="h-5 w-5" />

        <span className="sr-only">Cart</span>
        </Link>
      </button>
    
    </>
  )
}
