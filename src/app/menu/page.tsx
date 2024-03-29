import MenuItem from "@/components/MenuItem";
import { burguers, drinks } from "../data";
import Titles from "@/components/layout/Titles";

export default function MenuPage() {
    return (
        <section className="mt-8">
            <Titles mainTitle="Hambúrgueres" subTitle="" />

            <div className="grid sm:grid-cols-3 gap-4 mt-4 mb-8">
                {burguers.map((product) => (
                    <MenuItem
                        key={product.id}
                        product={product}
                        image={product.image}
                    />
                ))}
            </div>

            <Titles mainTitle="Bebidas" subTitle="" />

            <div className="grid sm:grid-cols-3 gap-4 mt-4 mb-8">
                {drinks.map((product) => (
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