import Product from "../models/Product";
import {Request, Response} from "express";


export const addProduct = async (req: Request, res: Response) => {
    const newProduct = new Product(req.body);

    try{
        const product = await newProduct.save();
        res.status(200).json(product)
    }catch (error) {
        res.status(500).json("Failed to create the product.")
    }
}

export const getAllProducts = async (req: Request, res: Response) => {
    try{
        const products = await Product.find().sort({ createdAt: -1 })
        res.status(200).json(products);
    }catch (error) {
        res.status(500).json("Failed to get the products.")
    }
}


export const getProduct  = async (req: Request, res: Response) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    }catch (error) {
        res.status(500).json("Failed to get the product.")
    }
}

export const searchProduct  = async (req: Request, res: Response) => {
    try{
        const results = await Product.aggregate(
            [
                {
                    $search: {
                        index: "ecommerce",
                        text: {
                            query: req.params.key,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]
        )
        res.status(200).json(results);
    }catch (error) {
        res.status(500).json("Failed to search the results.")
    }
}