import productsControllers from "../controllers/products-controllers";
import { validateBody } from "../middlewares/validation-middleware";
import { deleteProductSchema, productsSchema } from "../schemas/products-schema";
import { Router } from "express";



const router = Router();

router.get("/all", productsControllers.getAll);
router.post("/new", validateBody(productsSchema), productsControllers.insertNew);
router.delete("/delete", validateBody(deleteProductSchema), productsControllers.deleteProduct);

export default router;