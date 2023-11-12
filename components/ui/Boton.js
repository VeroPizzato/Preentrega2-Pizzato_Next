const Boton = ({ children, className = '', ...args }) => {

    return (
        <button 
            className={`rounded-lg py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:font-bold text-white text-center ${className}`} 
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton