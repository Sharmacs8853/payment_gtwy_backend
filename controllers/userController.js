import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
    try {
        const { full_name, email, mobile, password } = req.body;
        const existing_admin = await User.findOne({ email });
        if (existing_admin) {
            res.send({ msg: "admin already exist" });
            return;
        }
        bcrypt.hash(password, 4, async function (err, hash) {
            if (err) {
                res.send({ msg: "signup failed... try again.." })
            } else {
                const new_user = new User({
                    full_name,
                    email,
                    mobile,
                    password: hash,
                })
                await new_user.save();
                res.send({ msg: "signup successfull" });
            }
        });
    } catch (error) {
        res.status(401).send({ msg: "signup failed" })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (user) {
            const hashed_password = user.password;
            const user_id = user._id;
            bcrypt.compare(password, hashed_password, function (err, result) {
                if (err) {
                    res.send({ msg: "Something went wrong, try again later" })
                } if (result) {
                    const token = jwt.sign({ user_id }, process.env.SECRET);
                    res.send({ msg: "Login successfull", token, user })
                } else {
                    res.send({ "msg": "Login failed" })
                }
            });
        } else {
            res.send({ msg: "envalid cradentials" })
        }
    } catch (error) {
        res.send({ msg: "something wend wrong" })
    }
}

export const getUser = async (req, res) => {
    try {
        const query = req.query;
        const users = await User.find(query);
        res.status(200).send(users)
    } catch (error) {
        res.send({ msg: "something wend wrong" })
    }
}