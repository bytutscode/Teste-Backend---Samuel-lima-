import { Request, Response } from "express";
import Product from "../../models/Product";

export const getProducts = async (req: Request, res: Response) => {

    try {
        const products = await Product.findAll();
        return res.json(products)
    } catch (error) {
        return res.json({ message: 'There was an error during your request' })
    }
}