"use client"
import Link from "next/link"

const MenuList = ({open, setOpen}) => {

    const handleClose = () => setOpen(false)

    return (
        <div >  

                <nav className="flex flex-col gap-5 px-4 text-white">
                    <Link onClick={handleClose} href={"/"}>Inicio</Link>
                    <Link onClick={handleClose} href={"/productos/all"}>Productos</Link>
                    <Link onClick={handleClose} href={"/nosotros"}>Nosotros</Link>
                    <Link onClick={handleClose} href={"/contacto"}>Contacto</Link>
                </nav>
          
        </div>
    )
}

export default MenuList