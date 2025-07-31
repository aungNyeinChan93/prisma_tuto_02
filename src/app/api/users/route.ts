import { createUser, getUsers } from "@/prisma-db"

export async function GET() {
    const users = await getUsers()
    return Response.json({ users })
}