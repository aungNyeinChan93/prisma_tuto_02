import { NextRequest, NextResponse } from "next/server";
import { movies } from "./movie-data";
import { cookies } from "next/headers";

/**Get Movies
 * @endpoint    - /api/movies
 * @method      GET
 * @param       - 
 * @returns     - {url/nextUrl/testCookie,movies[]}
 */

export async function GET(request: NextRequest) {
    const url = request.url;
    const nextUrl = request.nextUrl;
    const origin = request.nextUrl.origin;

    request.cookies.set('name', 'test')

    // cookies
    const nextCookie = await cookies();
    nextCookie.set('age', '60')

    // query params
    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get('title');

    if (title) {
        const filterMovies = movies.filter(m => m.title.toLowerCase().includes(title.toLowerCase()))
        return new Response(JSON.stringify(filterMovies), { status: 200 })
    }

    return NextResponse.json({
        origin,
        url,
        nextUrl,
        testCookie: request.cookies.get('name'),
        movies,
        age: nextCookie.get('age')
    }, {
        status: 200., headers: {
            'Content-Type': 'application/json'
        }
    })
}


// create Movie
export async function POST(request: NextRequest) {
    const { movie } = await request.json();
    const newMovie = {
        id: movies.length + 1,
        ...movie,
    }
    movies.push(newMovie)
    return new NextResponse(JSON.stringify(movies), { status: 201 })
}