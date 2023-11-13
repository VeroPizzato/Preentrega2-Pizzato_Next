import Boton from "@/components/ui/Boton"
import Papelera from "@/public/icons/borrar.png"
import Image from "next/image"

const Cart = () => {

    return (
        <main className="container m-auto">
            <h1 className="text-4xl text-red-900 text-center my-10 font-mono border-b pb-4">Tu compra</h1>
            
            <table className="min-w-full bg-white border border-gray-300">                                     
                <tbody>
                    <tr>
                        <td className="align-middle text-end" colSpan={5} ><Boton className="font-mono text-lg my-2 px-4 border-b">Vaciar Carrito</Boton></td>
                    </tr> 
                    {                                                           
                        <tr>
                            <div>
                                <td className="p-2 px-4 border-b">
                                    <Image
                                        src={`/imgs/notebook_gigabyte.png`}
                                        alt={'Notebook GIGABYTE AORUS 17 XE5 Intel i7-12700H | RTX 3070 Ti | 16GB DDR5 | 1TB NVMe | 17” FHD 360Hz'}
                                        width={80}
                                        height={80}
                                    />
                                </td>                                       
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>{'Notebook GIGABYTE AORUS 17 XE5 Intel i7-12700H | RTX 3070 Ti | 16GB DDR5 | 1TB NVMe | 17” FHD 360Hz'}</h5></td>                                
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>{1} x $ {2049999}</h5></td>
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>$ {2049999}</h5></td>
                                <td className="p-2 px-4 border-b align-middle text-center"><Image src={Papelera} alt="Eliminar Producto" width={25} /></td>
                            </div>
                            <div>
                                <td className="p-2 px-4 border-b">
                                    <Image
                                        src={`/imgs/fuente_alimentacion.png`}
                                        alt={'FUENTE GIGABYTE 850W 80 + GOLD AP850GM AORUS MODULAR'}
                                        width={80}
                                        height={80}
                                    />
                                </td>                                       
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>{'FUENTE GIGABYTE 850W 80 + GOLD AP850GM AORUS MODULAR'}</h5></td>                                
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>{3} x $ {109990}</h5></td>
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>$ {329970}</h5></td>
                                <td className="p-2 px-4 border-b align-middle text-center"><Image src={Papelera} alt="Eliminar Producto" width={25} /></td>
                            </div>
                            <div>
                                <td className="p-2 px-4 border-b">
                                    <Image
                                        src={`/imgs/micro.jpg`}
                                        alt={'MICROPROCESADOR AMD RYZEN 3 3200G WRAITH STEALTH ZEN2 AM4'}
                                        width={80}
                                        height={80}
                                    />
                                </td>                                       
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>{'MICROPROCESADOR AMD RYZEN 3 3200G WRAITH STEALTH ZEN2 AM4'}</h5></td>                                
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>{2} x $ {99990}</h5></td>
                                <td className="font-mono p-2 px-4 border-b align-middle text-center"><h5>$ {199980}</h5></td>
                                <td className="p-2 px-4 border-b align-middle text-center"><Image src={Papelera} alt="Eliminar Producto" width={25} /></td>
                            </div>
                        </tr>                     
                    }
                    <tr>
                        <td colSpan={5} className="font-mono align-middle text-end"><h4>Total de la compra: $ {2579949}</h4></td>  
                    </tr>
                    <tr>
                        <td className="align-middle text-end" colSpan={5} ><Boton className="font-mono text-lg my-2">Finalizar Compra</Boton></td>       
                    </tr> 
                </tbody>
            </table>                
              
        
        </main>
    )
}

export default Cart