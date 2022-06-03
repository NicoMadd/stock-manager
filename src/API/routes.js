const express = require("express")
// const { logger } = require("../config/loggerConfig.js")
const router = express.Router()

const {
  getProducts,
  getInputs,
  getOutputs,
  addProduct,
  addInput,
  addOutput,
  deleteInput,
  deleteOutput,
  deleteProduct,
} = require("./controller.js")

router.route("/products").get(getProducts).post(addProduct)
router.route("/inputs").get(getInputs).post(addInput)
router.route("/outputs").get(getOutputs).post(addOutput)
router.route("/products/:id").delete(deleteProduct)
router.route("/inputs/:id").delete(deleteInput)
router.route("/outputs/:id").delete(deleteOutput)

module.exports = { router }
