/* eslint-disable @next/next/no-img-element */
interface MenuItemsProps  {
    name: string,
    description: string,
    price: number,
}

export default function MenuItem({name, description, price}: MenuItemsProps) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white
        hover:shadow-md hover:shadow-black/25 transition-all">

            <img src="/img/burguer.png" alt="hamburguer" 
            className="max-h-60 block mx-auto"/>

            <h4 className="font-semibold text-xl my-3">{name}</h4>

            <p className="text-gray-500 text-sm">{description}</p>

            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Add to cart R${price}
            </button>
        </div>
    )
}