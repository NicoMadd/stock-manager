<script>
    import { inputs, fetchInputs, addInput, deleteInput } from "../Data/inputsData.js"
    import Table from "../Table/Table.svelte"

    let addNewInput = (input) => {
        try {
            validateInput(input)
            addInput(input)
        } catch (e) {
            alert(e)
            throw e
        }
    }

    let deleteInputById = ({ id }) => {
        console.log("delete input", id)
        deleteInput(id)
    }
</script>

{#await fetchInputs()}
    <div>Fetching Inputs</div>
{:then results}
    <Table
        options={$inputs}
        addRow={addNewInput}
        excludeColumns={["id"]}
        elementOptions={[{ label: "Delete Input", action: deleteInputById }]}
    />
{/await}
<!-- let addNewProduct = (product) => {
  try {
    validateProduct(product)
    addProduct(product)
  } catch (e) {
    alert(e)
  }
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
{/await} -->
