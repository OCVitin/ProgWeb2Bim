"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostControllers_1 = __importDefault(require("../controllers/PostControllers"));
const router = express_1.default.Router();
router.get('/posts', PostControllers_1.default.listPosts);
router.post('/posts', PostControllers_1.default.createPost);
router.put('/posts/:id', PostControllers_1.default.updatePost);
router.delete('/posts/:id', PostControllers_1.default.deletePost);
exports.default = router;
