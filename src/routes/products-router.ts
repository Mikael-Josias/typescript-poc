import productsControllers from "../controllers/products-controllers";
import { Router } from "express";


const router = Router();

router.get("/all", productsControllers.getAll);

export default router;