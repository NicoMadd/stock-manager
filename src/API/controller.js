const data = require("./data.json")

const products = data.products
const inputs = data.inputs
const outputs = data.outputs

const getProducts = (req, res) => {
    res.send({
        products: products,
    })
}

const getInputs = (req, res) => {
    res.send({
        inputs: inputs,
    })
}

const getOutputs = (req, res) => {
    res.send({
        outputs: outputs,
    })
}

const addProduct = (req, res) => {
    const { product } = req.body
    product.id = products.length + 1
    console.log("newProd", { product })
    products.push(product)
    res.send({
        product,
    })
}

const addInput = (req, res) => {
    const { input } = req.body
    inputs.push(input)
    res.send({
        inputs: inputs,
    })
}

const addOutput = (req, res) => {
    const { output } = req.body
    outputs.push(output)
    res.send({
        outputs: outputs,
    })
}

const deleteProduct = (req, res) => {
    const { id } = req.params
    console.log("id", id)
    let index = products.findIndex((p) => p.id == id)
    products.splice(index, 1)
    res.send({
        products,
    })
}

const deleteInput = (req, res) => {
    const { id } = req.params
    let index = inputs.findIndex((i) => i.id == id)
    inputs.splice(index, 1)
    res.send({
        inputs,
    })
}

const deleteOutput = (req, res) => {
    const { id } = req.params
    let index = outputs.findIndex((o) => o.id == id)
    outputs.splice(index, 1)
    res.send({
        outputs,
    })
}

module.exports = {
    getProducts,
    getInputs,
    getOutputs,
    addProduct,
    addInput,
    addOutput,
    deleteInput,
    deleteOutput,
    deleteProduct,
}
