import jwt from "jsonwebtoken";
import { Admin } from "../models/adminModel.js"

export const createAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existing_admin = await Admin.findOne({ email });
        if (existing_admin) {
            res.send({ msg: "admin already exist" });
            return;
        } else {
            const new_admin = new Admin({
                email,
                password
            })
            await new_admin.save();
            res.send({ msg: "admin sdded " })
        }
    } catch (error) {
        res.status(401).send({ msg: "admin not added failed" })
    }
}

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.findOne({ email })
        console.log(admin);
        if (admin) {
            const admin_id = admin._id;
            const token = jwt.sign({ admin_id }, process.env.SECRET);
            res.send({ msg: "Login successfull", token, admin })
        } else {
            res.send({ msg: "wrong cradentials" })
        }

    } catch (error) {
        res.send({ msg: "something wend wrong" })
    }
}