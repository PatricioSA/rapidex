'use client'

import { Product } from "@/app/types";
import { Dispatch, SetStateAction, createContext, useState } from "react";

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

    function addToCart(product: Product) {
        setCartProducts([...cartProducts, product])
    }

    return (
        <CartContext.Provider value={{
            cartProducts, setCartProducts, addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}