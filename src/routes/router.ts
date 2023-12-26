import { Request, Response, Router } from "express";
import product from "../controllers/product";
import { createProductSchema } from "../middlewares/validation/createProductSchema";
import validator from '../middlewares/validation/validator';
import { updateProductSchema } from "../middlewares/validation/updateProductSchema";
import { getMunicipalities } from "../controllers/extra/ibgeAPISerach";

const router = Router();

// test router 
router.get('/ping', (req: Request, res: Response) => {
    return res.json({ pong: true });
});

router.post('/products', validator(createProductSchema), product.createProduct);
router.get('/products', product.getProducts);
router.get('/products/:id', product.getProduct);
router.put('/products/:id', validator(updateProductSchema), product.updateProduct);
router.delete('/products/:id', product.deleteProduct);

// extra
router.get('/municipios', getMunicipalities)


export default router;