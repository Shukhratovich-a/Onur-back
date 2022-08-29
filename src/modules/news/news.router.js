import { Router } from "express";

import controller from "./news.controller.js";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.get("/news", controller.GET);
router.get("/news/:newsId", controller.GET);
router.get("/services/:serviceId/news", controller.GET);

router.post("/news", checkToken, controller.POST);

router.put("/news/:newsId", checkToken, controller.PUT);

router.delete("/news/:newsId", checkToken, controller.DELETE);

export default router;
