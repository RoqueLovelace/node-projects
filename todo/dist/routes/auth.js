"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../controllers/auth"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', auth_1.default.registrar);
exports.authRouter.post('/login', auth_1.default.login);
exports.authRouter.get('/protected-resource', auth_1.default.authorize);
exports.default = exports.authRouter;
