import { Router } from "express";
import controller from "./admin.controller.js";

import checkToken from "../../middlewares/checkToken.js";

const router = Router();

router.get("/admins", checkToken, controller.GET);
router.get("/admins/:adminId", checkToken, controller.GET);
router.post("/admins/register", checkToken, controller.REGISTER);
router.post("/admins/login", controller.LOGIN);

export default router;
