"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CommentRoutes_1 = __importDefault(require("./routes/CommentRoutes"));
const PostRoutes_1 = __importDefault(require("./routes/PostRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(UserRoutes_1.default);
app.use(AuthRoutes_1.default);
app.use(PostRoutes_1.default);
app.use(CommentRoutes_1.default);
app.listen(port, function () {
    console.log(`Server running on port -> ${port}`);
});
