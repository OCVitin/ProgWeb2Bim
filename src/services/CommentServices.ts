import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class CommentService {
  constructor() {}

  async listComments() {
    try {
      return await prisma.comment.findMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createComment(comment: Prisma.CommentCreateInput) {
    try {
      return await prisma.comment.create({
        data: comment,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateComment(comment: Prisma.CommentUpdateInput, id: number) {
    try {
      return await prisma.comment.update({
        where: { id },
        data: comment,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteComment(id: number) {
    try {
      await prisma.comment.delete({ where: { id } });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new CommentService();
