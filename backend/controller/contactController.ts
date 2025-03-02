import { Request, Response } from "express"
import contactModel, { contactMeSchema } from "../model/contactModel";
import sendMail from "../util/sendMail";

export const contactController = async (req:Request,res:Response) => {
    try {
        const validatedData = contactMeSchema.parse(req.body);

        const newContact = new contactModel(validatedData);
        await newContact.save();
        const emailData:any = {
            visitor : {
                name: validatedData.name,
                email : validatedData.email,
                message : validatedData.message
            }
        }
        const recipients = ["ray_rahul@outlook.com","rahulray8516@gmail.com"];
        try {
            console.log("Before sending email");
            await sendMail({
                email: validatedData.email,
                subject: `Thanks ${validatedData.name} for Visiting My Portfolio`,
                template: `revert.ejs`,
                data: emailData
            });
            console.log("After sending email");
        } catch (error:any) {
            console.error("Error in sendMail:", error.message);
        }

        //----to me
        try {
            console.log("Before sending email to rahul");
            await sendMail({
                email: recipients,
                subject: `New Enquiry Recieved From ${validatedData.name}`,
                template: `enquiry.ejs`,
                data: emailData
            });
            console.log("After sending email to rahul");
        } catch (error:any) {
            console.error("Error in sendMail:", error.message);
        }
        
        res.status(201).json({ message: `Message sent successfully! ${validatedData.name}` });
        
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}