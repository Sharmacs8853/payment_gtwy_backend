import express from "express";
import { createGst, getGst } from "../controllers/gstController.js";


const router = express.Router();


router.route("/create").post(createGst)
router.route("/get").get(getGst);

export default router;