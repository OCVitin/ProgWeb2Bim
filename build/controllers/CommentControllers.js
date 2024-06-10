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
const CommentServices_1 = __importDefault(require("../services/CommentServices"));
class CommentController {
    listComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comments = yield CommentServices_1.default.listComments();
                if (!comments) {
                    return res.status(500).json({ error: "Erro ao buscar comentários." });
                }
                return res.json(comments);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newComment = yield CommentServices_1.default.createComment(req.body);
                if (!newComment) {
                    return res.status(500).json({ error: "Erro ao criar comentário." });
                }
                return res.json(newComment);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentId = parseInt(req.params.id);
            try {
                const updatedComment = yield CommentServices_1.default.updateComment(req.body, commentId);
                if (!updatedComment) {
                    return res.status(500).json({ error: "Erro ao atualizar comentário." });
                }
                return res.json(updatedComment);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    deleteComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentId = parseInt(req.params.id);
            try {
                const deleted = yield CommentServices_1.default.deleteComment(commentId);
                if (!deleted) {
                    return res.status(500).json({ error: "Erro ao excluir comentário." });
                }
                return res.json({ message: "Comentário excluído com sucesso." });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
}
exports.default = new CommentController();
