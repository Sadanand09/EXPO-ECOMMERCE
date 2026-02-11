import { Router } from "express";
import {
  createProduct,
  getAllOrders,
  getAllProducts,
  updateOrderStatus,
  updateProduct,
  getAllCustomers,
  getDashboardStats,
} from "../controllers/admin.controller.js";
import { protectRoute, adminOnly } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

//optimization: apply middleware to all admin routes
router.use(protectRoute, adminOnly);

router.post("/products", upload.array("images", 3), createProduct);
router.get("/products", getAllProducts);
router.put("/products/:id", upload.array("images", 3), updateProduct);

//PUT: Used for full resopurce replacement, updating the entire resource
//PATCH: Used for partial resource update, updating only specific fields of a resource

router.get("/orders", getAllOrders);
router.patch("/orders/:orderId/status", updateOrderStatus);

router.get("/customers", getAllCustomers);

router.get("/stats", getDashboardStats);


export default router;
