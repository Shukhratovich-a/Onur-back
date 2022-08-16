import { Router } from "express";
import controller from "./admin.controller.js";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.get("/admins", checkToken, controller.GET);
router.get("/admins/:adminId", checkToken, controller.GET);
router.post("/admins/register", checkToken, validation, controller.REGISTER);
router.post("/admins/login", validation, controller.LOGIN);

export default router;
