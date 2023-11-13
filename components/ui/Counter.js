"use client"
import Boton from "./Boton"

const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)

    return (
        <div className="flex items-center gap-3">
            <Boton onClick={decrease}>-</Boton>
            <p className="font-bold">{counter}</p>
            <Boton onClick={increase}>+</Boton>
        </div>
    )
}

export default Counter