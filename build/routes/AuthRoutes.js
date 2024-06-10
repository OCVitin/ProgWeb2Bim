"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post("/api/auth/signin");
AuthRouter.post("/api/auth/signup");
exports.default = AuthRouter;
