import { PrismaClient } from "./generated/prisma/default";

const prisma = new PrismaClient();


export async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: 'chan',
            email: 'chan@q23',
            nickname: {
                create: {
                    name: 'changyi'
                }
            },
            posts: {
                create: {
                    title: "test title",
                    categories: {
                        create: {
                            name: "test category"
                        }
                    },
                    comments: {
                        create: {
                            body: "test comment"
                        }
                    },

                }
            },

        }
    });

    return user
}


export async function getUsers() {
    const users = await prisma.user.findMany({
        include: {
            posts: {
                include: {
                    categories: true,
                    comments: true,
                    _count: true
                }
            },
            nickname: true,
            _count: true
        }
    })
    return users
}