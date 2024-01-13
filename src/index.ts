import { MainApi } from "./api";
import prisma from "./external/prismaClient";

const prismaConnection = prisma;
const mainApi = new MainApi(prismaConnection);

mainApi.start();
