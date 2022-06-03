<script>
    import {
        products,
        fetchProducts,
        addProduct,
        deleteProduct,
        validateProduct,
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
</script>

{#await fetchProducts()}
    <div>Fetching Products</div>
{:then results}
    <Table
        options={$products}
        addRow={addNewProduct}
        excludeColumns={["id"]}
        elementOptions={[{ label: "Delete Product", action: deleteProductById }]}
    />
{/await}
