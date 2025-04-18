"use strict";
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
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const connectionString = process.env.MONGO_URI;
if (!connectionString) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(connectionString, {
            maxPoolSize: 10, // Maintain up to 10 socket connections
        });
        console.log("MongoDB Connected with connection pooling");
    }
    catch (error) {
        console.log(error.message);
    }
});
mongoose_1.default.connection.on('connected', () => {
    console.log("MongoDB Connected");
});
mongoose_1.default.connection.on('disconnected', () => {
    console.log("MongoDB Disconnected");
});
mongoose_1.default.connection.on('error', () => {
    console.log("Error in MongoDB Connection");
});
exports.default = connectDB;
