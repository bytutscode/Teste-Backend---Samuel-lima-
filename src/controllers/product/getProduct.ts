import { Request, Response } from "express";
import Product from "../../models/Product";

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        return res.status(200).json(product)
    } catch (error) {
        return res.json({ message: 'There was an error during your request' })
    }
}