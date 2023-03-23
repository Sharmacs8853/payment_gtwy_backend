import { Gst } from "../models/gstModel.js"

export const createGst = async (req, res) => {
    const { service, company, phone, email, adhar, pan } = req.body
    try {
        const new_gst = new Gst({
            service,
            company,
            phone,
            email,
            adhar,
            pan,
        })
        await new_gst.save();
        res.send({ msg: "GST added successfully" })
    } catch (error) {
        res.send({ msg: "something wend wrong" })
    }
}

export const getGst = async (req, res) => {
    try {
        const query = req.query;
        const gsts = await Gst.find(query);
        res.send(gsts);
    } catch (error) {
        res.send({msg:"something went wrong"})
    }

}