import mongoose, { Schema, Document, Model } from "mongoose";
import { z } from "zod";
   
export interface IContact {
    name: string;
    email: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // Schema Validation using Zod
  export const contactMeSchema = z.object({
    name: z.string().min(1, { message: `Name must not be empty` }),
    email: z.string().email({ message: `Invalid Email` }),
    message: z
      .string()
      .min(1, { message: `Message must not be empty` })
      .max(1000, { message: `Only up to 500 characters supported` }),
  });
//   type IContact = z.infer<typeof contactMeSchema>;
  const contactSchema = new Schema<IContact >(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true },
      message: { type: String, required: true, maxlength: 1000 },
    },
    { timestamps: true }
  );

const contactModel: Model<IContact> = mongoose.model('portfolio', contactSchema);
export default contactModel;