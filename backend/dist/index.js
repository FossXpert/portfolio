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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./util/db"));
const contactRouter_1 = __importDefault(require("./routes/contactRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
(0, db_1.default)()
    .then(() => {
    console.log("🚀 Server is starting...");
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("❌ Server failed to start due to DB connection issue:", error);
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' })); // Allow all origins
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.headers.host}`);
    next();
});
app.use('/api/contact', contactRouter_1.default);
app.get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = mongoose_1.default.connection.readyState;
    const states = ["Disconnected", "Connected", "Connecting", "Disconnecting"];
    res.json({
        statusCode: status,
        status: states[status] || "Unknown",
    });
}));
