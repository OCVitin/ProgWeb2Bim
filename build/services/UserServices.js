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
class UserService {
    constructor() { }
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.user.findMany();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield prisma.user.create({
                    data: user,
                });
                return newUser;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    updateUser(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield prisma.user.update({
                    where: { id },
                    data: user,
                });
                return updatedUser;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.user.delete({ where: { id } });
                return true;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.default = new UserService();
