import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
  constructor() {}

  async listUsers() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createUser(user: Prisma.UserCreateInput) {
    try {
      const newUser = await prisma.user.create({
        data: user,
      });
      return newUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateUser(user: Prisma.UserUpdateInput, id: number) {
    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: user,
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteUser(id: number) {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new UserService();
