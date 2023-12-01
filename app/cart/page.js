import { CartContext } from "@/context/CartContext"
import { useContext, useState } from "react"
import Papelera from "@/public/icons/borrar.png"
import Boton from "../ui/Boton"

const Cart = () => {

    const { cart, clear, removeItem, totalItems, totalMonto } = useContext(CartContext);
    if (totalItems() === 0) {
        return (
            <div className="container mx-auto my-5">
                <div className="flex flex-wrap ">
                    <div className="relative flex-grow max-w-full flex-1 px-4 text-center">
                        <h1>No hay productos en el carrito</h1>                           
                        <Boton className="flex justify-between items-center ml-auto font-mono text-lg my-4">
                            Volver a Home
                        </Boton>                                                       
                    </div>                    
                </div>                
            </div>
        )
    }

    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-wrap">
                <div className="relative flex-grow max-w-full flex-1 px-4 text-center">
                    <h1>Productos Seleccionados</h1>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="relative flex-grow max-w-full flex-1 px-4">
                    <table className="min-w-full bg-gray-100 border border-gray-300">                           
                        <tbody>
                            <tr>
                                <td className="align-middle text-end" colSpan={5} ><Boton className="my-2" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</Boton></td>
                            </tr> 
                            {
                                cart.map(item => (
                                    <tr key={item.slug}>
                                        <td><img src={item.image} alt={item.title} width={80} /></td>  
                                        <td className="align-middle text-center"><h5>{item.title}</h5></td>                                
                                        <td className="align-middle text-center"><h5>{item.quantity} x $ {item.price.toLocaleString()}</h5></td>
                                        <td className="align-middle text-center"><h5>$ {(item.quantity * item.price).toLocaleString()}</h5></td>
                                        <td className="align-middle text-center"><Boton className="my-2" onClick={() => { removeItem(item.slug) }} title="Eliminar Producto"><img src={Papelera} alt="Eliminar Producto" width={25} /></Boton></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={5} className="align-middle text-end"><h4>Total de la compra: $ {totalMonto().toLocaleString()}</h4></td>  
                            </tr>
                            <tr>
                                <td className="align-middle text-end" colSpan={5}><Boton> Finalizar Compra </Boton></td>       
                            </tr> 
                        </tbody>
                    </table>                
                </div>
            </div>
        </div>
    )  
}

export default Cart