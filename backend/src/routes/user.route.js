import { Router } from "express";
import {
  addAddress,
  addToWishlist,
  deleteAddress,
  getAddresses,
  getWishlist,
  removeFromWishlist,
  updateAddress,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute); //protect all routes after this middleware

//address routes
router.post("/addresses", addAddress);
router.get("/addresses", getAddresses);
router.put("/addresses/:id", updateAddress);
router.delete("/addresses/:id", deleteAddress);

//wishlist routes
router.post("/wishlist", addToWishlist);
router.delete("/wishlist/:productID", removeFromWishlist);
router.get("/wishlist", getWishlist);

export default router;
