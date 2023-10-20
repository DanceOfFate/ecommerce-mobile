import mongoose, {models} from "mongoose";
import {Product} from "../types";


const productSchema = new mongoose.Schema<Product>({
    name: { type: String, required: true },
    supplier: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    product_location: { type: String, required: true }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);
export default Product;