import { Request, Response } from "express";
import Product from "../../models/Product";

export const createProductService = async (name: string, category: string, status: string, quantity: number) => {
    const newProduct = Product.build();
    newProduct.name = name;
    newProduct.category = category;
    newProduct.status = status;
    newProduct.quantity = quantity;

    await newProduct.save()
    return newProduct;
}