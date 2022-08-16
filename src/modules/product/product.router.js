import { Router } from "express";
import controller from "./product.controller.js";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.get("/products/:productId", controller.GETBYID);

router.post("/products", checkToken, validation, controller.POST);

router.put("/products/:productId", checkToken, controller.PUT);

router.delete("/products/:productId", checkToken, controller.DELETE);

export default router;
