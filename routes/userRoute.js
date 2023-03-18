import express from "express";
import { createUser, getUser, loginUser } from "../controllers/userController.js";



const router = express.Router();
router.route("/signup").post(createUser);
router.route("/login").post(loginUser)
router.route("/get").get(getUser);


export default router;