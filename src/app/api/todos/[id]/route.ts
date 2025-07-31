import { NextRequest } from "next/server";
import { todos } from "../route";
import { headers, cookies } from "next/headers";

export async function POST(request: NextRequest, { params }: {
    params: Promise<{
        id: string
    }>
}) {
    const { searchParams } = request.nextUrl;
    const name = searchParams.get('name')
    const auth = request.headers.get('auth');

    const body = await request.json()

    request.cookies.set('theme', 'dark');

    const nextHeader = await headers();
    const nextCookie = await cookies();

    const { id } = await params;
    const todo = todos.find(todo => todo.id === Number(id))
    return Response.json({
        todo, name, auth,
        themeCookie: request.cookies.get('theme'),
        body,
        nextHeader: nextHeader.get('auth'),
        nextCookie: nextCookie.get('theme')

    }, { status: 200 })
};


