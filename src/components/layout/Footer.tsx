export default function Footer() {
    return (
        <footer className="text-gray-500 border px-8 py-4 mt-16">

            <section className="grid md:grid-cols-2 gap-4 mb-8 md:ml-16">
                <section>
                    <h2 className="font-semibold">Horário de Funcionamento</h2>
                    <p>
                        Terça a Sexta: <time>18:00</time> - <time>00:00</time> <br />
                        Sábado e Domingo: <time>18:00</time> - <time>02:00</time>
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold">Endereço</h2>
                    <p>Rua Compre Aqui, 145 - Centro, Juiz de Fora - MG</p>
                </section>
            </section>

            <div className="text-center">&copy; 2024 Todos os direitos reservados</div>
        </footer>
    )
}