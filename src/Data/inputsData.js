import { writable } from "svelte/store"
import axios from "axios"

const url = "http://localhost:5000/api"

export const inputs = writable([])

export const fetchInputs = async () => {
  const response = await axios.get(`${url}/inputs`)
  inputs.set(response.data.inputs)
  console.log(response.data.inputs)
}

export const addInput = async (input) => {
  console.log("newInput", { input })
  await axios.post(`${url}/inputs`, { input })
  inputs.update((inputs) => [...inputs, input])
}

export const deleteInput = async (id) => {
  await axios.delete(`${url}/inputs/${id}`)
  inputs.update((inputs) => inputs.filter((i) => i.id != id))
}

export const validateInput = (input) => {
  if (!input.name) {
    throw new Error("Input name is required")
  }
}
