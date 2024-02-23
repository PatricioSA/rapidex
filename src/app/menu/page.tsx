import MenuItem from "@/components/MenuItem";
import { burgers as burguers, drinks } from "../data";
import Titles from "@/components/layout/Titles";

export default function MenuPage() {
    return (
        <section>
            <Titles mainTitle="Hambúrgueres" subTitle="" />

            <div className="grid sm:grid-cols-3 gap-4 mt-4 mb-8">
                {burguers.map((product) => (
                    <MenuItem
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>

            <Titles mainTitle="Bebidas" subTitle="" />

            <div className="grid sm:grid-cols-3 gap-4 mt-4 mb-8">
                {drinks.map((product) => (
                    <MenuItem
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>

        </section>
    )
}