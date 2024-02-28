import Image from "next/image";

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos ducimus voluptas, velit qui labore rerum
                    veritatis! Dicta!
                </p>
                <div>
                    <button className="bg-primary text-sm uppercase
                    gap-2 text-white px-4 py-2 rounded-full">
                        Peça agora
                    </button>
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