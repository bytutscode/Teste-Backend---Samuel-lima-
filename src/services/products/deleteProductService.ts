import product from "../../controllers/product";
import Product from "../../models/Product"

export const deleteProductService = async (id: string) => {
    await Product.destroy({ where: { id } })
}