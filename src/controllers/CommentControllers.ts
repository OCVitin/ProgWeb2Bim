import { Request, Response } from "express";
import CommentService from '../services/CommentServices';

class CommentController {
  async listComments(req: Request, res: Response) {
    try {
      const comments = await CommentService.listComments();
      if (!comments) {
        return res.status(500).json({ error: "Erro ao buscar comentários." });
      }
      return res.json(comments);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async createComment(req: Request, res: Response) {
    try {
      const newComment = await CommentService.createComment(req.body);
      if (!newComment) {
        return res.status(500).json({ error: "Erro ao criar comentário." });
      }
      return res.json(newComment);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async updateComment(req: Request, res: Response) {
    const commentId = parseInt(req.params.id);
    try {
      const updatedComment = await CommentService.updateComment(req.body, commentId);
      if (!updatedComment) {
        return res.status(500).json({ error: "Erro ao atualizar comentário." });
      }
      return res.json(updatedComment);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async deleteComment(req: Request, res: Response) {
    const commentId = parseInt(req.params.id);
    try {
      const deleted = await CommentService.deleteComment(commentId);
      if (!deleted) {
        return res.status(500).json({ error: "Erro ao excluir comentário." });
      }
      return res.json({ message: "Comentário excluído com sucesso." });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new CommentController();
