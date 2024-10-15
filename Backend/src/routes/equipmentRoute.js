const express = require("express")
const router = express.Router()
const equipController = require("../controllers/equipmentController")

router.post("/add-product",equipController.addProduct)
router.get("/products",equipController.allProducts)

module.exports = router