import express from "express";
import { createAdmin, loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.route("/login").post(loginAdmin)
router.route("/create").post(createAdmin)


export default router;