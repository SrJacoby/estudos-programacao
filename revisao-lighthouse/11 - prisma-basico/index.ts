import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
    const pessoas = await prisma.pessoa.create({
        data: {
            name: "Luiz",
            email: "luiz@luiz.com",
        }
    })
    console.log(pessoas)
})();