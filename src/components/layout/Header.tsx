'use client'
import { CartContext } from "@/context/AppProvider";
import Link from "next/link"
import { useContext, useState } from "react";
import { TfiMenu } from "react-icons/tfi";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const { cartProducts } = useContext(CartContext)

    return (
        <header>
            <div className="flex justify-between items-center md:hidden">
                <Link className="text-primary font-semibold text-2xl" href=''>
                    RAPIDEX
                </Link>
                <button onClick={() => setMobileNavOpen(prevState => !prevState)}>
                    <TfiMenu size={25} />
                </button>
                {cartProducts.length > 0 && (
                    <Link href={''}>Cart {cartProducts.length}</Link>
                )}
            </div>

            {mobileNavOpen && (
                <div className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 text-center">
                    <nav className="flex flex-col items-center gap-2 text-gray-500 
                font-semibold">
                        <Link href='/'>Home</Link>
                        <Link href='/menu'>Menu</Link>
                        <Link href=''>Contato</Link>
                    </nav>
                </div>
            )}

            <div className="hidden md:flex items-center justify-between">
                <Link className="text-primary font-semibold text-2xl" href=''>
                    RAPIDEX
                </Link>
                <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                    <Link href='/'>Home</Link>
                    <Link href='/menu'>Menu</Link>
                    <Link href=''>Contato</Link>
                    {cartProducts.length > 0 && (
                        <Link href={''}>Cart {cartProducts.length}</Link>
                    )}
                </nav>
            </div>

        </header>
    )
}