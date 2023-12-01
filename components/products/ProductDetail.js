"use client"
import Image from "next/image"
import IrAtras from "../ui/IrAtras"
import NotFound from "@/app/not-found"
import { CartContext } from "@/context/CartContext"   
import { useContext, useState } from "react"

const ProductDetail = async ({ slug }) => {
    const item = await fetch(`http://localhost:3000/api/producto/${slug}`, 
    {cache: "no-store"}
    ).then(res => res.json())  
   
    if (!item)
         return (
             <NotFound/>
    )

    const {addItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const [stockDisponible, setStockDisponible]  = useState(item.stock);

    const addToCart = () => {
        if (quantity <= stockDisponible) {         
            setCantidad(0); // reinicio el contador                       
            onAdd(quantity);
        }
    }

    const onAdd = (quantity) => {   
        addItem(item, quantity);
        setQuantity(quantity); 
        setStockDisponible(stockDisponible - quantity);       
    };

    return (
        <div className="max-w-4xl m-auto">
            <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mb-6">Volver</IrAtras>
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={`/imgs/${item.image}`}                    
                        alt={item.title}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="font-mono text-2xl font-semibold border-b border-red-900 pb-4 mb-4 text-justify">{item.title}</h2>
                    <p className="font-mono text-4xl text-center">$ {item.price}</p>
                    <div className="flex justify-center items-center">
                        {cantidad>0 ? <Link
                                        href={"/cart"}
                                        className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                                        Terminar mi compra
                                      </Link>
                                    :   <>                    
                                        <Counter counter={quantity} setCounter={setQuantity} max={item.stock}/>
                                        <Boton onClick={() => addToCart()}>Agregar al carrito</Boton>                            
                                      </> }
                    </div>                    
                </div>
            </section>
            <section className="mt-12">
                <h3 className="font-mono text-xl font-semibold border-b border-red-900 pb-4 my-4 ">Descripcion</h3>
                <p className="font-mono text-gray-600 text-justify mb-6">{item.description}</p>
            </section>
        </div>
    )
}

export default ProductDetail