import { Request, Response } from "express";
import { createProductService } from "../../services/products/createProductService";

export const createProduct = async (req: Request, res: Response) => {
    const { name, category, status, quantity } = req.body;

    try {
        const product = await createProductService(name, category, status, quantity);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ message: 'There was an internal error during your request' });
    }
}