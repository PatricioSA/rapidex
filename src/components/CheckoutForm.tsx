'use client'

import { CartContext } from "@/context/AppProvider"
import { FormEvent, useContext, useState } from "react"

export default function CheckoutForm({ totalPrice }: { totalPrice: number }) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [observations, setObservations] = useState('')

    const {cartProducts} = useContext(CartContext)

    const onHandleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const productsNames = cartProducts.map(product => product.name).join(', ');

        fetch('http://localhost:3333/api/enviar-mensagem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                address,
                phoneNumber,
                orderDetails: productsNames,
                observations
            })
        }).then(response => {
            if (response.ok) {
                console.log('Mensagem enviada com sucesso');
            } else {
                console.error('Erro ao enviar mensagem:', response.statusText);
            }
        }).catch(error => {
            console.error('Erro ao enviar mensagem:', error);
        });
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-4">Dados de entrega</h2>

            <form onSubmit={onHandleSubmit} className="checkoutForm">
                <div>
                    <label htmlFor="name">Nome</label> <br />
                    <input type="text" name="name" required
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div>
                    <label htmlFor="address">Endereço</label> <br />
                    <input type="text" name="address" placeholder="Rua Compre aqui, 145 - Bairro" required
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">
                        Telefone <br />
                        <small>Format: 32 91234-4567</small>
                    </label> <br />
                    <input type="tel" name="phoneNumber" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="32 91234-4567" required
                        onChange={e => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                    />
                </div>

                <div>
                    <label htmlFor="observations">Observações</label> <br />
                    <textarea name="observations"
                        onChange={e => setObservations(e.target.value)}
                        value={observations}
                    ></textarea>
                </div>

                <button type="submit" className="mt-4 bg-primary text-white rounded px-8 py-2 w-full">
                    Finalizar R${totalPrice}
                </button>
            </form>
        </div>
    )
}