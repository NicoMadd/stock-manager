const productsJSON = require("./products.json")
const inputsJSON = require("./inputs.json")
const outputsJSON = require("./outputs.json")

const { Resource } = require("./Resource.js")
const { ResourceController } = require("./ResourceController.js")

const productsPath = "./src/API/products.json"
const inputsPath = "./src/API/inputs.json"
const outputsPath = "./src/API/outputs.json"

const products = productsJSON.elements
const inputs = inputsJSON.elements
const outputs = outputsJSON.elements

const productsColumns = productsJSON.columns
const inputsColumns = inputsJSON.columns
const outputsColumns = outputsJSON.columns

const productsResource = new Resource(
    "products",
    productsColumns,
    products,
    (resourcePath = productsPath)
)
const inputsResource = new Resource(
    "inputs",
    inputsColumns,
    inputs,
    (resourcePath = inputsPath)
)
const outputsResource = new Resource(
    "outputs",
    outputsColumns,
    outputs,
    (resourcePath = outputsPath)
)

const productsController = new ResourceController(productsResource)
const inputsController = new ResourceController(inputsResource)
const outputsController = new ResourceController(outputsResource)

module.exports = {
    productsController,
    inputsController,
    outputsController,
}
