'use client'

import { Product } from "@/app/types";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface CartContextType {
    cartProducts: Product[];
    addToCart: (product: Product, extras?: any[]) => void;
    setCartProducts: Dispatch<SetStateAction<Product[]>>
}

export const CartContext = createContext<CartContextType>({
    cartProducts: [],
    addToCart: () => {},
    setCartProducts: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [cartProducts, setCartProducts] = useState<Product[]>([])

    const ls = window.localStorage

    useEffect(() => {
        if(ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart') || ''))
        }
    }, [ls])

    const saveCartToLocalStorage = (cartProducts: Product[]) => {
        if(ls) {
            ls.setItem('cart', JSON.stringify(cartProducts))
        }
    }

    function addToCart(product: Product) {
        setCartProducts(prevCartProducts => {
            const newCartProducts = [...prevCartProducts, product]
            saveCartToLocalStorage(newCartProducts)
            return newCartProducts
        })
    }

    return (
        <CartContext.Provider value={{
            cartProducts, setCartProducts, addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}