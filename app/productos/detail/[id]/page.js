import ProductDetail from "@/components/products/ProductDetail"

const Detail = ({params}) => {
    const {id} = params

    return (
        <main className="container m-auto mt-10">
            <ProductDetail id={id}/>
        </main>
    )
}

export default Detail