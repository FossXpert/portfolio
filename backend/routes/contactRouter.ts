import express from 'express'
import contactModel from '../model/contactModel';
import { contactController } from '../controller/contactController';

const contactRouter = express.Router();



contactRouter.post("/getcontactForm",contactController );

contactRouter.get("/hello", (req, res) => {
    res.send("Hello World");
})

export default contactRouter;
