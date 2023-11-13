"use client"
import Boton from "../ui/Boton"
import ProductsTable from "../admin/ProductsTable"
import LogoutButton from "../admin/LogoutButton"

const LoginForm = () => {    

    const MostrarPanelAdministracion = () => {   
        const visible = true;    
        <div className="container m-auto mt-6">    
            <LogoutButton visible={visible} />
            <h2 className="text-2xl my-10 border-b pb-4 font-mono">Panel de Administración</h2>
            <ProductsTable />
        </div>
    }
   
    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h2 className="font-mono text-lg">Login</h2>
                <input
                    type="email"                    
                    required
                    placeholder="Tu email"
                    className="p-2 rounded w-full border border-blue-100 block my-4 font-mono"
                    name="email"                    
                />
                <input
                    type="password"                    
                    required
                    placeholder="Tu password"
                    className="p-2 rounded w-full border border-blue-100 block my-4 font-mono"
                    name="password"                   
                />
                <Boton className="font-mono text-lg mr-4" onClick={() => {MostrarPanelAdministracion}} >Ingresar</Boton>
                <Boton className="font-mono text-lg mr-4">Registrarse</Boton>                
            </form>
        </div>
    )

}

export default LoginForm