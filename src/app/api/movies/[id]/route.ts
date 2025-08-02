/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { movies } from "../movie-data";


// update movie
export async function PATCH(request: NextRequest, { params }: {
    params: Promise<{ id: string }>,
}) {
    const search = request.nextUrl.searchParams
    const pathID = request.nextUrl.pathname.split('/').pop();
    const { id } = await params;

    const { movie } = await request.json();

    const oldMovie = movie && movies.findIndex((movie: any) => movie.id === Number(id));
    if (oldMovie === -1) return NextResponse.json({ message: 'not found movie !' })

    // first way
    // movies[oldMovie] = { ...movies[oldMovie], ...movie }

    // sec way
    const updateMovies = movies.map(m => m.id === Number(id) ? { ...m, ...movie } : m)

    return NextResponse.json({ searchParams: search.get('name'), pathID: Number(pathID), id, movie, updateMovies },
        { status: 201 })
}

// get movies
export async function GET(request: NextRequest) {
    const id = request.nextUrl.pathname.split('/').pop();
    const movie = movies.find(movie => movie.id === Number(id))
    if (!movie) return new Response('Movie is not Found!', { status: 404 })
    return NextResponse.json({
        movie
    }, { status: 200 })
}

// delete movie
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = movies.findIndex(m => m.id === Number(id));
    if (index === -1) return new NextResponse('Movie not found', { status: 404 })
    const result = movies.filter(m => m.id !== Number(id))
    const deleteMovie = movies.splice(index, 1)
    return result && NextResponse.json({ result, deleteMovie })
}