import { Service } from "../models/servicesModel.js";

export const createServices = async (req, res) => {
    try {
        const { service_type, service_amount } = req.body;
        const new_service = new Service({
            service_type,
            service_amount
        });
        await new_service.save();
        res.status(200).send({ msg: "services added successfully" })
    } catch (error) {
        res.status(401).send({ msg: "services not added" })
    }
}

export const getServices = async (req, res) => {
    try {
        const query = req.query;
        const services = await Service.find(query);
        res.status(200).send(services)
    } catch (error) {
        res.send({ msg: "something wend wrong samjha me aa rha hai kuchh" })
    }
}