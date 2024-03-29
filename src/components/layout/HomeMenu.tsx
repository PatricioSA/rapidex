import { burguers } from "@/app/data";
import MenuItem from "../MenuItem";
import { Product } from "../../app/types";

export default function HomeMenu() {
    const maisVendidos: Product[] = []
    const selectedIndices: number[] = [];

    while (maisVendidos.length < 3) {
        const sorteio = Math.floor(Math.random() * burguers.length)

        if (!selectedIndices.includes(sorteio)) {
            selectedIndices.push(sorteio);
            const maisVendido = burguers[sorteio];
            maisVendidos.push(maisVendido);
        }
    }

    return (
        <section className="p-2 mt-8">
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold">
                    Confira
                </h3>
                <h2 className="text-primary font-bold text-4xl italic">
                    Mais vendidos
                </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                {maisVendidos.map((product) => (
                    <MenuItem
                        key={product.id}
                        product={product}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    )
}