import express from "express";
import {
  checkout,
  getPayments,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();
router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);
router.route("/getpayments").get(getPayments);

export default router;
