import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createOrder, getUserOrders } from "../controllers/order.controller.js";

const router = Router();

router.use(protectRoute); //protect all routes after this middleware

router.post("/", createOrder);
router.get("/", getUserOrders);

export default router;