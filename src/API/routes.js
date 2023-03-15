const express = require("express")
// const { logger } = require("../config/loggerConfig.js")
const router = express.Router()

const {
    productsController,
    inputsController,
    outputsController,
} = require("./controller.js")

router.route("/products").get(productsController.getAll).post(productsController.add)
router.route("/inputs").get(inputsController.getAll).post(inputsController.add)
router.route("/outputs").get(outputsController.getAll).post(outputsController.add)
router
    .route("/products/:id")
    .delete(productsController.delete)
    .get(productsController.getById)
router.route("/inputs/:id").delete(inputsController.delete).get(inputsController.getById)
router
    .route("/outputs/:id")
    .delete(outputsController.delete)
    .get(outputsController.getById)
router
    .route("/products/columns")
    .get(productsController.getColumns)
    .post(productsController.addColumn)

module.exports = { router }
