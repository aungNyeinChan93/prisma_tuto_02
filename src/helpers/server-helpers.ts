/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Reads a file asynchronously and returns its content as a string.
 * @param filePath Relative or absolute path to the file
 * @returns Promise<string>
 */
export async function readFileContent(filePath: string): Promise<string> {
    try {
        const absolutePath = path.resolve(filePath);
        const data = await fs.readFile(absolutePath, 'utf-8');
        return data;
    } catch (err) {
        throw new Error(`Failed to read file: ${err}`);
    }
}

/**
 * Writes content to a file. Creates the file if it doesn't exist.
 * @param filePath - Path to the file
 * @param content - String content to write |any
 */
export async function writeFileContent(filePath: string, content?: string | any): Promise<void> {
    try {
        const absolutePath = path.resolve(filePath);
        await fs.writeFile(absolutePath, content, 'utf-8');
        console.log(`✅ File written to: ${absolutePath}`);
    } catch (err) {
        throw new Error(`❌ Failed to write file: ${err}`);
    }
}
