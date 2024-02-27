/* eslint-disable @next/next/no-img-element */
'use client'

import { Product } from "@/app/types";
import { CartContext } from "@/context/AppProvider";
import Image from "next/image";
import { useContext, useState } from "react";


export default function MenuItem({ product, image }: { product: Product, image: string }) {
    const { name, description, price } = product
    const [showModal, setShowModal] = useState(false)
    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart(product)
        setShowModal(false)
        alert('Adicionado ao carrinho')
    }

    const onHandleCardClick = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white
                hover:shadow-md hover:shadow-black/25 transition-all">

                <div onClick={onHandleCardClick} className="hover:cursor-pointer">
                    <img src={image} alt={name}
                        className="max-h-48 block mx-auto"
                    />

                    <h4 className="font-semibold text-xl my-3">{name}</h4>

                    <p className="text-gray-500 text-sm line-clamp-1">{description}</p>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                    Adicionar ao carrinho R${price}
                </button>
            </div>

            {showModal && (
                <div className="flex items-center justify-center fixed inset-0 
                bg-black/60">
                    <div className="bg-white p-4 rounded max-w-md flex flex-col items-center">
                        <Image
                            src={image}
                            alt={name}
                            width={200} height={100}
                            className="mx-auto"
                        />
                        <h2 className="text-lg font-bold mb-2">{name}</h2>
                        <p className="text-sm text-gray-500">{description}</p>
                        <button
                            onClick={handleAddToCart}
                            className="mt-4 bg-primary text-white rounded px-8 py-2">
                            Adicionar ao carrinho R${price}
                        </button>
                        <button onClick={() => setShowModal(false)} className="mt-2 px-8 py-2 border">
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}