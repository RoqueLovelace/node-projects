"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("./middlewares/cors"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config({ path: '.env' });
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default);
app.use('/auth', auth_1.default);
(0, db_1.default)();
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
