import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import path from "path";


/**
 * Add Note
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
    const { note } = await request.json();
    const noteFilePath = path.join(path.resolve(), '/src/notes-data', 'notes.txt')
    await fs.promises.appendFile(noteFilePath, JSON.stringify(note));
    const noteData = await fs.promises.readFile(noteFilePath, 'utf-8')
    return NextResponse.json({
        noteFilePath, noteData
    })
}