import { Router } from "express";
import controller from "./productParam.controller.js";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.post("/productparams", checkToken, validation, controller.POST);

router.put("/productparams/:paramId", checkToken, validation, controller.PUT);

router.delete("/productparams/:paramId", checkToken, controller.DELETE);

export default router;
