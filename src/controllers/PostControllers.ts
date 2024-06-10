import { Request, Response } from "express";
import PostService from '../services/PostServices';

class PostController {
  async listPosts(req: Request, res: Response) {
    try {
      const posts = await PostService.listPosts();
      if (!posts) {
        return res.status(500).json({ error: "Erro ao buscar posts." });
      }
      return res.json(posts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const newPost = await PostService.createPost(req.body);
      if (!newPost) {
        return res.status(500).json({ error: "Erro ao criar post." });
      }
      return res.json(newPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async updatePost(req: Request, res: Response) {
    const postId = parseInt(req.params.id);
    try {
      const updatedPost = await PostService.updatePost(req.body, postId);
      if (!updatedPost) {
        return res.status(500).json({ error: "Erro ao atualizar post." });
      }
      return res.json(updatedPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async deletePost(req: Request, res: Response) {
    const postId = parseInt(req.params.id);
    try {
      const deleted = await PostService.deletePost(postId);
      if (!deleted) {
        return res.status(500).json({ error: "Erro ao excluir post." });
      }
      return res.json({ message: "Post excluído com sucesso." });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new PostController();