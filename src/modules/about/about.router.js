import { Router } from "express";
import controller from "./about.controller.js";

import checkToken from "../../middlewares/checkToken.js";

const router = Router();

router.get("/about", controller.GET);

router.put("/about", checkToken, controller.PUT);

export default router;
