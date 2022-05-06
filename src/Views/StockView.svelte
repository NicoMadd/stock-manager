<script>
  import { writable } from "svelte/store"
  import { products } from "../data.json"
  import Table from "../Table/Table.svelte"

  let allProducts = writable(products)
  let columnNames = ["ID", "Product ID", "Quantity"]

  let addNewProduct = (product) => {
    allProducts.push(product)
  }
</script>

<Table options={allProducts} addRow={addNewProduct} />

<style>
</style>
