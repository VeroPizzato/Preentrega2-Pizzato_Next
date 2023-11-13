import ProductsTable  from "@/components/admin/ProductsTable"

const Admin = () => {

    return (
        <div className="container m-auto mt-6">      
            <h2 className="text-2xl my-10 border-b pb-4 font-mono">Panel de Administración</h2>
            <ProductsTable />
        </div>                   
    )
}

export default Admin