"use client"
import { createContext, useContext, useState } from "react"

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.slug))        
            setCart([...cart, {...item, quantity:quantity}])   
        else {
            let pos = cart.findIndex(prod => prod.slug === item.slug);
            cart[pos].quantity += quantity;
            setCart([...cart]);        
        }        
    }    

    const getItem = (itemId) => {
        if (isInCart(itemId)){
            let pos = cart.findIndex(prod => prod.id === itemId);
            return cart[pos]
        }
        else return null;
    }
     
    const removeItem = (itemSlug) => {
        const items = cart.filter(prod => prod.slug !== itemSlug)
        setCart(items);
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemSlug) => {          
        return cart.some(prod => prod.slug === itemSlug)     
    }

    const totalItems = () => {           
        return cart.reduce((acum, item) => acum += item.quantity, 0);          
    }

    const totalMonto = () => {                  
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0);        
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, totalItems, totalMonto, isInCart, getItem}}>
            {children}
        </CartContext.Provider>
    )
}