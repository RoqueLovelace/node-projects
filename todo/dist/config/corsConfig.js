"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsConfig = {
    origin: ['http://example.com', 'http://anotherexample.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
exports.default = corsConfig;
