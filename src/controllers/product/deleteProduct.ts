import { Request, Response } from "express";
import Product from "../../models/Product";
import { deleteProductService } from "../../services/products/deleteProductService";

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        await deleteProductService(id)
        return res.status(204).send()

    } catch (error) {
        return res.status(500).json({ message: 'There was an internal error during your request' });
    }
}