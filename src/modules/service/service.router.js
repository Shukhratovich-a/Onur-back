import { Router } from "express";

import controller from "./service.controller.js";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.get("/services", controller.GET);
router.get("/services/:serivceSlug", controller.GET);

router.put("/services/:serviceId", checkToken, validation, controller.PUT);

export default router;
