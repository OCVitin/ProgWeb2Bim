"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
const router = express_1.default.Router();
router.get('/users', UserControllers_1.default.listUsers);
router.post('/users', UserControllers_1.default.createUser);
router.put('/users/:id', UserControllers_1.default.updateUser);
router.delete('/users/:id', UserControllers_1.default.deleteUser);
exports.default = router;
