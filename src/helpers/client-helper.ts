
export const urlToName = (url: string): string => {
    const segments = url.split("/");
    const last = segments.pop() || "";
    const capitalized = last.charAt(0).toUpperCase() + last.slice(1);
    return capitalized;
};

export function extractPageName(path: string): string {
    const lastSegment = path.split("/").filter(Boolean).pop() || "";
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
}

