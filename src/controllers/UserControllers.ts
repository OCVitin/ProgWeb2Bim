import { Request, Response } from "express";
import UserService from '../services/UserServices';

class UserController {

  constructor() {}

  async listUsers(req: Request, res: Response) {
    try {
      const users = await UserService.listUsers();
      if (!users) {
        return res.status(500).json({ error: "Erro ao buscar usuários." });
      }
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await UserService.createUser(req.body);
      if (!newUser) {
        return res.status(500).json({ error: "Erro ao criar usuário." });
      }
      return res.json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async updateUser(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    try {
      const updatedUser = await UserService.updateUser(req.body, userId);
      if (!updatedUser) {
        return res.status(500).json({ error: "Erro ao atualizar usuário." });
      }
      return res.json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    try {
      const deleted = await UserService.deleteUser(userId);
      if (!deleted) {
        return res.status(500).json({ error: "Erro ao excluir usuário." });
      }
      return res.json({ message: "Usuário excluído com sucesso." });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new UserController();