
export default function CheckoutForm() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-4">Dados de entrega</h2>

            <form className="checkoutForm">
                <div>
                    <label htmlFor="name">Nome</label> <br />
                    <input type="text" name="name"/>
                </div>

                <div>
                    <label htmlFor="endereco">Endereço</label> <br />
                    <input type="text" name="endereco"/>
                </div>

                <div>
                    <label htmlFor="telefone">telefone</label> <br />
                    <input type="tel" name="telefone"/>
                </div>

                <div>
                    <label htmlFor="observacoes">Observações</label> <br />
                    <textarea name="observacoes"></textarea>
                </div>

            </form>
        </div>
    )
}