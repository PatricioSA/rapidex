/* eslint-disable @next/next/no-img-element */
export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white
        hover:shadow-md hover:shadow-black/25 transition-all">
            <img src="/img/burguer.png" alt="hamburguer" 
            className="max-h-60 block mx-auto"/>
            <h4 className="font-semibold text-xl my-3">X-Tudo</h4>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Add to cart R$12
            </button>
        </div>
    )
}