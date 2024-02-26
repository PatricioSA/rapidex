/* eslint-disable @next/next/no-img-element */
'use client'

import { Product } from "@/app/types";
import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";


export default function MenuItem(product: Product) {
    const { name, description, price } = product
    const { cartProducts, addToCart, setCartProducts } = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart(product)
        console.log(cartProducts)
    }

    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white
        hover:shadow-md hover:shadow-black/25 transition-all">

            <img src="/img/burguer.png" alt="hamburguer"
                className="max-h-60 block mx-auto" />

            <h4 className="font-semibold text-xl my-3">{name}</h4>

            <p className="text-gray-500 text-sm line-clamp-1">{description}</p>

            <button
                onClick={handleAddToCart}
                className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Adicionar ao carrinho R${price}
            </button>
        </div>
    )
}