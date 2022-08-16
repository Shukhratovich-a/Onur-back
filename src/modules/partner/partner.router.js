import { Router } from "express";
import controller from "./partner.controller.js";

// import checkToken from "../../middlewares/checkToken.js";

const router = Router();

router.get("/partners", controller.GET);
router.get("/partners/:partnerId", controller.GETBYID);

router.post("/partners", controller.POST);

export default router;
