"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const contactModel_1 = __importStar(require("../model/contactModel"));
const sendMail_1 = __importDefault(require("../util/sendMail"));
const contactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = contactModel_1.contactMeSchema.parse(req.body);
        const newContact = new contactModel_1.default(validatedData);
        yield newContact.save();
        const emailData = {
            visitor: {
                name: validatedData.name,
                email: validatedData.email,
                message: validatedData.message
            }
        };
        const recipients = ["ray_rahul@outlook.com", "rahulray8516@gmail.com"];
        try {
            console.log("Before sending email");
            yield (0, sendMail_1.default)({
                email: validatedData.email,
                subject: `Thanks ${validatedData.name} for Visiting My Portfolio`,
                template: `revert.ejs`,
                data: emailData
            });
            console.log("After sending email");
        }
        catch (error) {
            console.error("Error in sendMail:", error.message);
        }
        //----to me
        try {
            console.log("Before sending email to rahul");
            yield (0, sendMail_1.default)({
                email: recipients,
                subject: `New Enquiry Recieved From ${validatedData.name}`,
                template: `enquiry.ejs`,
                data: emailData
            });
            console.log("After sending email to rahul");
        }
        catch (error) {
            console.error("Error in sendMail:", error.message);
        }
        res.status(201).json({ message: `Message sent successfully! ${validatedData.name}` });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.contactController = contactController;
