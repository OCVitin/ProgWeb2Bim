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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostService {
    constructor() { }
    listPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.post.findMany();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.post.create({
                    data: post,
                });
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    updatePost(post, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.post.update({
                    where: { id },
                    data: post,
                });
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.post.delete({ where: { id } });
                return true;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.default = new PostService();
