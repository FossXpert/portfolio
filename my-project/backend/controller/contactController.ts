import { Request, Response } from "express"
import mongoose from 'mongoose'

export const contactController = async (req:Request,res:Response) => {
    try {
        const {name,email,message} = req.body;
        console.log("Received Contact Message:", { name, email, message });

        if (!name || !email || !message) {
          return res.status(400).json({ error: "All fields are required!" });
        }

        const data = await mongoose
        
    } catch (error) {
        
    }
}