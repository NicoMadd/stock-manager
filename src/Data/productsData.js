import { writable } from "svelte/store"
import axios from "axios"

const url = "http://localhost:5000/api"

export const products = writable([])

export const fetchProducts = async () => {
  const response = await axios.get(`${url}/products`)
  products.set(response.data.products)
  console.log(response.data.products)
}

export const addProduct = async (product) => {
  console.log("newProd", { product })
  const newProduct = await axios
    .post(`${url}/products`, { product })
    .then((response) => response.data.product)
  products.update((products) => [...products, newProduct])
}

export const deleteProduct = async (id) => {
  await axios.delete(`${url}/products/${id}`)
  products.update((products) => products.filter((p) => p.id != id))
}

export const validateProduct = (product) => {
  if (!product.name) {
    throw new Error("Product name is required")
  }
  if (!product.description) {
    throw new Error("Product description is required")
  }
  if (!product.quantity) {
    throw new Error("Product price is required")
  }
}
