"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./utill/db"));
const contactController_1 = require("./controller/contactController");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173",
        "http://100.93.3.137:5173/",
        "https://portofolio-rahul.vercel.app/",
        "https://portfolio-rahul-rays-projects.vercel.app/",
        "https://portfolio-gamma-vert-63.vercel.app/"
    ], // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.headers.host}`);
    next();
});
app.use('/api/getcontactForm', contactController_1.contactController);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    (0, db_1.default)();
});
