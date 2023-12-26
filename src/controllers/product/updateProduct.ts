import { Request, Response } from "express";
import Product from "../../models/Product";
import { updateProductService } from "../../services/products/updateProductService";

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, category, status, quantity } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        const updatedProduct = await updateProductService(id, name, category, status, quantity);
        res.status(204).send();
    } catch (error) {
        return res.json({ message: 'There was an error during your request' })
    }
}