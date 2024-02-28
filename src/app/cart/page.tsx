/* eslint-disable @next/next/no-img-element */
'use client'

import CheckoutForm from "@/components/CheckoutForm";
import Titles from "@/components/layout/Titles";
import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";
import { GoTrash } from "react-icons/go";

export default function CartPage() {
    const { cartProducts, removeCartProducts } = useContext(CartContext)

    let totalPrice = 0
    for(const product of cartProducts) {
        totalPrice += product.price
    }

    return (
        <section className="cartContainer mt-8">
            <Titles mainTitle="Carrinho" subTitle="" />

            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <aside>
                    {cartProducts.length === 0 && (
                        <h1>Nenhum Produto</h1>
                    )}
                    {cartProducts.length > 0 && cartProducts.map((product, index) => (
                        <div key={index}
                            className="flex items-center gap-4 border-b
                            border-b-red-300 mb-2 py-2">
                            <div className="w-24">
                                <img
                                    src={product.image}
                                    alt={`imagem ${product.name}`}
                                    width={240}
                                    height={240}
                                    loading='lazy'
                                />
                            </div>

                            <div className="grow">
                                <h3 className="font-semibold">{product.name}</h3>

                                <span className="text-lg">R${product.price}</span>
                            </div>

                            <div>
                                <button onClick={() => removeCartProducts(index)}>
                                    <GoTrash size={25}/>
                                </button>
                            </div>
                        </div>
                    ))}

                    <p className="mt-4 text-lg">
                        Total: <span className="font-semibold">R${totalPrice}</span>
                    </p>
                </aside>

                <CheckoutForm totalPrice={totalPrice}/>
            </div>
        </section>
    )
}