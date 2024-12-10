"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const corsConfig_1 = __importDefault(require("../config/corsConfig"));
const corsMW = (0, cors_1.default)(corsConfig_1.default);
exports.default = corsMW;
