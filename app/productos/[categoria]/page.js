import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Spirit Computacion - ${params.categoria}`,
    }
}

const Productos = ({params}) => {
    const { categoria } = params

    return (
        <main className="container m-auto">
            <div>
                <h2 className="text-4xl text-red-900 text-center my-4 font-mono">Productos</h2>
                <p className="text-2xl text-bold text-center border-b pb-8 font-mono">
                    Trabajamos las mejores marcas y los modelos de última generación en los siguientes productos
                </p>
            </div>
            <div className="flex gap-10">
                <CategoriesMenu />
                <ProductsList categoria={categoria}/>
            </div>
        </main>
    )
}

export default Productos