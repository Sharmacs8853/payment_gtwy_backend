import express from "express";
import { createServices, getServices } from "../controllers/serviceController.js";


const router = express.Router();
router.route("/create").post(createServices);
router.route("/get").get(getServices);


export default router;