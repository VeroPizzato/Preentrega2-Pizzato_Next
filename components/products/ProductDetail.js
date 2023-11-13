import { mockData } from "@/data/products"
import Image from "next/image"
import ItemCount from "./ItemCount"
import IrAtras from "../ui/IrAtras"

const ProductDetail = ({ slug }) => {
    const item = mockData.find(p => p.slug === slug)      
  
    return (
        <div className="max-w-4xl m-auto">
            <IrAtras className="font-mono text-lg text-red-900 hover:font-bold underline mb-6"/>
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
                        <ItemCount item={item}/>
                    </div>                    
                </div>
            </section>
            <section className="mt-12">
                <h3 className="font-mono text-xl font-semibold border-b border-red-900 pb-4 my-4 ">Descripcion</h3>
                <p className="font-mono text-gray-600 text-justify">{item.description}</p>
            </section>
        </div>
    )
}

export default ProductDetail