"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./utill/db"));
const contactRouter_1 = __importDefault(require("./routes/contactRouter"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' })); // Allow all origins
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.headers.host}`);
    next();
});
app.use('/api/contact', contactRouter_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    (0, db_1.default)();
});
