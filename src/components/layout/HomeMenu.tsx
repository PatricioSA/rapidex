import MenuItem from "../MenuItem";

export default function HomeMenu() {
    return (
        <section className="p-2">
        <div className="text-center mb-4">
            <h3 className="uppercase text-gray-500 font-semibold">
                Confira
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">
                Mais vendidos
            </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
    </section>
    )
}