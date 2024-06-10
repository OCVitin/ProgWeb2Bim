"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CommentControllers_1 = __importDefault(require("../controllers/CommentControllers"));
const router = express_1.default.Router();
router.get('/comments', CommentControllers_1.default.listComments);
router.post('/comments', CommentControllers_1.default.createComment);
router.put('/comments/:id', CommentControllers_1.default.updateComment);
router.delete('/comments/:id', CommentControllers_1.default.deleteComment);
exports.default = router;
