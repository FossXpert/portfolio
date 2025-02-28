import express from 'express'
import { contactController } from '../controller/contactController';

const contactRouter = express.Router();



contactRouter.post("/getcontactForm",contactController)