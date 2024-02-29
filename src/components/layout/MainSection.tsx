import Image from "next/image";
import Link from "next/link";

export default function MainSection() {
    return (
        <section className="hero">
            <div className="max-h-28 pt-20 md:pt-40 text-center md:text-start">
                <h1 className="text-6xl font-semibold">
                    Acabe logo <br />
                    com a <br />
                    sua&nbsp;
                    <span className="text-primary">fome</span>
                </h1>
                <p className="my-4 text-gray-500">
                    O melhor lanche na sua casa.
                    Delivery rápido, fácil e gostoso é aqui!
                    Não perca tempo, peça agora o seu delivery!
                    Sua fome não espera!
                </p>
                <div>
                    <Link
                        href='/menu'
                        className="bg-primary text-sm uppercase
                        gap-2 text-white px-4 py-2 rounded-full"
                    >
                        Peça agora
                    </Link>
                </div>
            </div>

            <div className="relative z-10">
                <Image
                    src='/img/burguer.png'
                    layout="fill"
                    objectFit="contain"
                    alt="hamburguer"
                />
            </div>
            <div className="shape"></div>
        </section>
    )
}