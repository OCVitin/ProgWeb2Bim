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
const UserServices_1 = __importDefault(require("../services/UserServices"));
class UserController {
    constructor() { }
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserServices_1.default.listUsers();
                if (!users) {
                    return res.status(500).json({ error: "Erro ao buscar usuários." });
                }
                return res.json(users);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield UserServices_1.default.createUser(req.body);
                if (!newUser) {
                    return res.status(500).json({ error: "Erro ao criar usuário." });
                }
                return res.json(newUser);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.params.id);
            try {
                const updatedUser = yield UserServices_1.default.updateUser(req.body, userId);
                if (!updatedUser) {
                    return res.status(500).json({ error: "Erro ao atualizar usuário." });
                }
                return res.json(updatedUser);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.params.id);
            try {
                const deleted = yield UserServices_1.default.deleteUser(userId);
                if (!deleted) {
                    return res.status(500).json({ error: "Erro ao excluir usuário." });
                }
                return res.json({ message: "Usuário excluído com sucesso." });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
}
exports.default = new UserController();
