import { writable } from "svelte/store"
import axios from "axios"

const url = "http://localhost:5000/api"

export const outputs = writable([])

export const fetchOutputs = async () => {
  const response = await axios.get(`${url}/outputs`)
  outputs.set(response.data.outputs)
  console.log(response.data.outputs)
}

export const addOutput = async (output) => {
  console.log("newOutput", { output })
  await axios.post(`${url}/outputs`, { output })
  outputs.update((outputs) => [...outputs, output])
}

export const deleteOutput = async (output) => {
  await axios.delete(`${url}/outputs/${output.id}`)
  outputs.update((outputs) => outputs.filter((o) => o.id !== output.id))
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
