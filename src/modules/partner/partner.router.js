import { Router } from "express";
import controller from "./partner.controller.js";

import checkToken from "../../middlewares/checkToken.js";

const router = Router();

router.get("/partners", controller.GET);
router.get("/partners/:partnerId", controller.GETBYID);

router.post("/partners", checkToken, controller.POST);

router.put("/partners/:partnerId", checkToken, controller.PUT);

router.delete("/partners/:partnerId", checkToken, controller.DELETE);

export default router;
