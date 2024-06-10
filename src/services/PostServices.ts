import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class PostService {
  constructor() {}

  async listPosts() {
    try {
      return await prisma.post.findMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createPost(post: Prisma.PostCreateInput) {
    try {
      return await prisma.post.create({
        data: post,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updatePost(post: Prisma.PostUpdateInput, id: number) {
    try {
      return await prisma.post.update({
        where: { id },
        data: post,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deletePost(id: number) {
    try {
      await prisma.post.delete({ where: { id } });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new PostService();
