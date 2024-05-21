'use client'

import { CartContext } from "@/context/AppProvider"
import { useRouter } from "next/navigation"
import { FormEvent, useContext, useState } from "react"

interface DeliveryData {
    name: string;
    address: string;
    phoneNumber: string;
    observations: string;
    paymentMethod: string;
}

export default function CheckoutForm({ totalPrice }: { totalPrice: number }) {
    const [deliveryData, setDeliveryData] = useState<DeliveryData>({
        name: '',
        address: '',
        phoneNumber: '',
        observations: '',
        paymentMethod: ''
    });

    const { cartProducts, clearCart } = useContext(CartContext)
    const router = useRouter()

    const onHandleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (cartProducts.length === 0) {
            alert('O carrinho está vazio')
            return
        }

        const productsNames = cartProducts.map(product => product.name).join(', ');

        fetch('/api/enviar-mensagem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...deliveryData,
                orderDetails: productsNames,
            })
        }).then(response => {
            if (response.ok) {
                clearCart()
                clearInputs()
                router.push('/order')
            } else {
                console.error('Erro ao enviar mensagem:', response.statusText);
            }
        }).catch(error => {
            alert(error)
            console.error('Erro ao enviar mensagem:', error);
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDeliveryData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const clearInputs = () => {
        setDeliveryData({
            name: '',
            address: '',
            phoneNumber: '',
            observations: '',
            paymentMethod: ''
        });
    }

    return (
        <div className="bg-gray-200 p-4 rounded-lg max-h-[35rem]">
            <h2 className="font-semibold mb-4">Dados de entrega</h2>

            <form onSubmit={onHandleSubmit} className="checkoutForm">
                <div>
                    <label htmlFor="name">Nome</label> <br />
                    <input type="text" name="name" id="name" required
                        onChange={handleInputChange}
                        value={deliveryData.name}
                    />
                </div>

                <div>
                    <label htmlFor="address">Endereço</label> <br />
                    <input type="text" name="address" id="address" placeholder="Rua Compre aqui, 145 - Bairro" required
                        onChange={handleInputChange}
                        value={deliveryData.address}
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">
                        Telefone <br />
                        <small>Format: 32 91234-4567</small>
                    </label> <br />
                    <input type="tel" name="phoneNumber" id="phoneNumber" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="32 91234-4567" required
                        onChange={handleInputChange}
                        value={deliveryData.phoneNumber}
                    />
                </div>

                <div>
                    <label>Método de pagamento</label> <br />
                    <small>O pagamento é feito na entrega</small>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-1">
                            <label htmlFor="money">Dinheiro</label> <br />
                            <input type="radio" name="paymentMethod" id="money"
                                value={'Dinheiro'} onChange={handleInputChange} required
                            />
                        </div>

                        <div className="flex items-center gap-1">
                            <label htmlFor="creditCard">Cartão</label>
                            <input type="radio" name="paymentMethod" id="creditCard"
                                value={'Cartão'} onChange={handleInputChange} required />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="observations">Observações</label> <br />
                    <textarea name="observations" id="observations"
                        onChange={handleInputChange}
                        value={deliveryData.observations}
                    ></textarea>
                </div>

                <button type="submit" className="bg-primary text-white font-semibold 
                rounded px-8 py-2 mt-4 w-full">
                    Finalizar R${totalPrice}
                </button>
            </form>
        </div>
    )
}