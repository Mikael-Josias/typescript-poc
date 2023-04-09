import productsControllers from "../controllers/products-controllers";
import { validateBody } from "../middlewares/validation-middleware";
import { productsSchema } from "../schemas/products-schema";
import { Router } from "express";



const router = Router();

router.get("/all", productsControllers.getAll);
router.post("/new", validateBody(productsSchema), productsControllers.insertNew);

export default router;