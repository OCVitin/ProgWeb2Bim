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
const PostServices_1 = __importDefault(require("../services/PostServices"));
class PostController {
    listPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostServices_1.default.listPosts();
                if (!posts) {
                    return res.status(500).json({ error: "Erro ao buscar posts." });
                }
                return res.json(posts);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPost = yield PostServices_1.default.createPost(req.body);
                if (!newPost) {
                    return res.status(500).json({ error: "Erro ao criar post." });
                }
                return res.json(newPost);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = parseInt(req.params.id);
            try {
                const updatedPost = yield PostServices_1.default.updatePost(req.body, postId);
                if (!updatedPost) {
                    return res.status(500).json({ error: "Erro ao atualizar post." });
                }
                return res.json(updatedPost);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = parseInt(req.params.id);
            try {
                const deleted = yield PostServices_1.default.deletePost(postId);
                if (!deleted) {
                    return res.status(500).json({ error: "Erro ao excluir post." });
                }
                return res.json({ message: "Post excluído com sucesso." });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
}
exports.default = new PostController();
