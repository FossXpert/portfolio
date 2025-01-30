import { Request, Response } from "express"
import mongoose from 'mongoose'
import contactModel, { contactMeSchema } from "../model/contactModel";

export const contactController = async (req:Request,res:Response) => {
    try {
        const validatedData = contactMeSchema.parse(req.body);

        // Save validated data to MongoDB
        const newContact = new contactModel(validatedData);
        await newContact.save();
        res.status(201).json({ message: "Message sent successfully!" });
        
    } catch (error:any) {
        res.status(400).json({ error: error.errors || "Invalid data" });

    }
}