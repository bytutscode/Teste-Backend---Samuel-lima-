import Product from "../../models/Product"

export const updateProductService = async (id: string, name: string, category: string, status: string, quantity: number) => {
    await Product.update({ name, category, status, quantity }, { where: { id } })
}