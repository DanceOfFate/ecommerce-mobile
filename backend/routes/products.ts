import express from "express";
import {addProduct, getAllProducts, getProduct, searchProduct} from "../controllers/productsControllers";

const router = express.Router();

router.get('/:id', getProduct);
router.get('/search/:key', searchProduct);
router.get('/', getAllProducts);
router.post('/', addProduct);


export default router;