import { useState } from "react";
import { Card, ListComponent } from "@/shared";
import { products } from "../../../../data/products/products.js";

export default function HomePage(){
    const [search, setSearch] = useState('');

    const productNames = products.map(p => p.title);

    return(
        <div
            className={`mt-10`}
        >
            {/* Hero */}
            {/* Carrusel */}
            {/* Título */}
            <h2
                className={`text-h2 place-self-center mb-12`}
            >
                Productos
            </h2>

            {/* Cards */}
            <div
                className={`
                    grid gap-6 mx-6 sm:grid-cols-2 sm:mx-12 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-max place-self-center
                `}
            >

                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}

            </div>

            {/* Ejemplo ListComponent */}
            {/* <div className={`mt-12 mx-6 sm:mx-12`}>
                <h2 className={`text-h2 place-self-center mb-4`}>
                    Buscar producto
                </h2>
                <input
                    type="text"

                    placeholder="Escribe para filtrar..."

                    value={search}

                    onChange={e => setSearch(e.target.value)}

                    className={`border rounded px-3 py-2 w-full mb-4`}
                />
                <ListComponent list={productNames} filter={search} />
            </div> */}

            

        </div>
    )
}