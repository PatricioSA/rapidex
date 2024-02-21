import Image from "next/image";

export default function MainSection() {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Acabe logo <br />
                    com a <br />
                    sua&nbsp;
                    <span className="text-primary">fome</span>
                </h1>
                <p className="my-4 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos ducimus voluptas, velit qui labore rerum
                    veritatis! Dicta!
                </p>
                <div>
                    <button className="bg-primary text-sm uppercase flex items-center
                    gap-2 text-white px-4 py-2 rounded-full">
                        Peça agora
                    </button>
                </div>
            </div>

            <div className="relative">
                <Image
                    src='/img/burguer.png'
                    layout='fill'
                    objectFit="contain"
                    alt="hamburguer"
                />
            </div>
        </section>
    )
}