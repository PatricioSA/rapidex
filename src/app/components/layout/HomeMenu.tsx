import MenuItem from "../MenuItem";

export default function HomeMenu() {
    return (
        <section>
        <div className="text-center mb-4">
            <h3 className="uppercase text-gray-500 font-semibold">
                Confira
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">
                Menu
            </h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
    </section>
    )
}