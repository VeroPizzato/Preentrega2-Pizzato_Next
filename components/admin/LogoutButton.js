"use client"
import Boton from "../ui/Boton"

const LogoutButton = ({valor}) => {   
    if (valor===true)    
        return <Boton className="font-mono text-lg bg-red-500 hover:bg-red-700 hover:font-bold visible">Logout</Boton>
    else
        return <Boton className="font-mono text-lg bg-red-500 hover:bg-red-700 hover:font-bold invisible">Logout</Boton>
}

export default LogoutButton