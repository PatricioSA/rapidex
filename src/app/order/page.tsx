import Titles from "@/components/layout/Titles";

export default function OrderPage() {

    return (
        <section className="max-w-2xl mx-auto mt-8 text-center">
            <Titles
                mainTitle="Obrigado por Comprar!"
                subTitle="Pedido Realizado!"
            />

            <div className="mt-8 font-semibold">
                <p>Seu Pedido está sendo preparado</p>
                <p>Enviaremos uma confirmação pelo seu WhatsApp</p>
            </div>
        </section>
    )
}