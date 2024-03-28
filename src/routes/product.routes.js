import { Router } from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct, uploadImage } from "../controller/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router()

router.route('/').get(getAllProducts)
router.route('/create').post(upload.single('image'), uploadImage, createProduct)
router.route('/update/:id').put(updateProduct)
router.route('/delete/:id').delete(deleteProduct)

export default router