import { Router } from "express";
import controller from "./user.controller.js";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.get("/users", checkToken, controller.GET);
router.get("/users/:userId", checkToken, controller.GET);

router.post("/users", validation, controller.POST);

router.put("/users/:userId", checkToken, controller.PUT);

router.delete("/users/:userId", checkToken, controller.DELETE);

export default router;
