import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import serviceRouter from "./routes/serviceRoute.js";
import userRoute from "./routes/userRoute.js"
import adminRoute from "./routes/adminRout.js"

config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);
app.use("/services", serviceRouter);
app.use("/user", userRoute);
app.use("/admin", adminRoute)


app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
