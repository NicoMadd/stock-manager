<script>
    import {
        columns,
        products,
        fetchProducts,
        fetchProductColumns,
        addProduct,
        deleteProduct,
        validateProduct,
        addProductColumn,
    } from "../Data/productsData.js"
    import Table from "../Table/Table.svelte"

    let addNewProduct = (product) => {
        try {
            validateProduct(product)
            addProduct(product)
        } catch (e) {
            alert(e)
            throw e
        }
    }

    let deleteProductById = ({ id }) => {
        console.log("delete product", id)
        deleteProduct(id)
    }

    let addColumn = (column, e) => {
        console.log("add column", column)
        addProductColumn(column)
    }

    let fetchData = async () => {
        await fetchProductColumns()
        console.log("columns", $columns)
        await fetchProducts()
        console.log("products", $products)
    }
</script>

{#await fetchData()}
    <div>Fetching Products</div>
{:then results}
    <Table
        columns={$columns}
        options={$products}
        addRow={addNewProduct}
        {addColumn}
        excludeColumns={["id"]}
        elementOptions={[{ label: "Delete Product", action: deleteProductById }]}
    />
{/await}
