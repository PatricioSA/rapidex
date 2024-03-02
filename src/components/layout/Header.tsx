'use client'
import { CartContext } from "@/context/AppProvider";
import Link from "next/link"
import { useContext, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { TfiMenu } from "react-icons/tfi";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const { cartProducts } = useContext(CartContext)

    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <header>
            <div className="flex justify-between items-center md:hidden">
                <Link className="text-primary font-semibold text-2xl" href='/'>
                    RAPIDEX
                </Link>

                <div className="flex items-center gap-2">
                    <button type="button" aria-label="Abrir e Fechar menu de navegação"
                        onClick={() => setMobileNavOpen(prevState => !prevState)}
                    >
                        <TfiMenu size={25} />
                    </button>
                    <Link
                        href={'/cart'}
                        className={`relative ${activeLink === "/cart" ? "active" : ""}`}
                        onClick={() => handleLinkClick('/cart')}
                    >
                        <HiOutlineShoppingCart size={25} />
                        <span className="absolute -top-2 -right-4 bg-primary
                            text-white text-xs py-1 px-2 rounded-full leading-3">
                            {cartProducts.length}
                        </span>
                    </Link>
                </div>
            </div>

            {mobileNavOpen && (
                <div className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 text-center">
                    <nav className="flex flex-col items-center gap-2 text-gray-500 
                font-semibold">
                        <Link
                            href='/'
                            className={activeLink === "/" ? "active" : ""}
                            onClick={() => handleLinkClick('/')}
                        >
                            Home
                        </Link>
                        <Link
                            href='/menu'
                            className={activeLink === "/menu" ? "active" : ""}
                            onClick={() => handleLinkClick('/menu')}
                        >
                            Menu
                        </Link>
                        <Link
                            href='/#contact'
                            className={activeLink === "/#contact" ? "active" : ""}
                            onClick={() => handleLinkClick('/#contact')}
                        >
                            Contato
                        </Link>
                    </nav>
                </div>
            )}

            <div className="hidden md:flex items-center justify-between">
                <Link className="text-primary font-semibold text-2xl" href='/'>
                    RAPIDEX
                </Link>
                <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                    <Link
                        href='/'
                        className={activeLink === "/" ? "active" : ""}
                        onClick={() => handleLinkClick('/')}
                    >
                        Home
                    </Link>
                    <Link
                        href='/menu'
                        className={activeLink === "/menu" ? "active" : ""}
                        onClick={() => handleLinkClick('/menu')}
                    >
                        Menu</Link>
                    <Link
                        href='/#contact'
                        className={activeLink === "/#contact" ? "active" : ""}
                        onClick={() => handleLinkClick('/#contact')}
                    >
                        Contato
                    </Link>
                    <Link
                        href={'/cart'}
                        className={`relative ${activeLink === "/cart" ? "active" : ""}`}
                        onClick={() => handleLinkClick('/cart')}
                    >
                        <HiOutlineShoppingCart size={25} />
                        <span className="absolute -top-2 -right-4 bg-primary
                            text-white text-xs py-1 px-2 rounded-full leading-3">
                            {cartProducts.length}
                        </span>
                    </Link>

                </nav>
            </div>

        </header>
    )
}