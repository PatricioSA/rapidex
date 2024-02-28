'use client'

import { Product } from "@/app/types";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface CartContextType {
    cartProducts: Product[];
    addToCart: (product: Product, extras?: any[]) => void;
    removeCartProducts: (indexToRemove: number) => void
    clearCart: () => void
    setCartProducts: Dispatch<SetStateAction<Product[]>>
}

export const CartContext = createContext<CartContextType>({
    cartProducts: [],
    addToCart: () => { },
    removeCartProducts: () => {},
    clearCart: () => {},
    setCartProducts: () => { },
})

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [cartProducts, setCartProducts] = useState<Product[]>([])

    const storage = typeof window !== 'undefined' ? window.localStorage : ''

    useEffect(() => {
        if (storage && storage.getItem('cart')) {
            setCartProducts(JSON.parse(storage.getItem('cart') || ''))
        }
    }, [storage])

    const saveCartToLocalStorage = (cartProducts: Product[]) => {
        if (storage) {
            storage.setItem('cart', JSON.stringify(cartProducts))
        }
    }

    const removeCartProducts = (indexToRemove: number) => {
        setCartProducts(prevCartProducts => {
            const newCartProducts = prevCartProducts.filter((value, index) =>
                index !== indexToRemove)
            saveCartToLocalStorage(newCartProducts)
            return newCartProducts
        })
    }

    const clearCart = () => {
        setCartProducts([])
        saveCartToLocalStorage([])
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
            cartProducts, setCartProducts, addToCart, removeCartProducts, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}