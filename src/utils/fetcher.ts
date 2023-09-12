import type {ValuesType} from 'utility-types';

export const FORMAT = {
    TEXT: 'text',
    JSON: 'json',
} as const;

type Format = ValuesType<typeof FORMAT>;

type Query = Record<string, string | number | boolean>;

export function fetcher(
    path: string,
    options: RequestInit & {
        format: typeof FORMAT.TEXT;
        query?: Query;
    }
): Promise<string>;

export function fetcher<T>(
    path: string,
    options: RequestInit & {
        format: typeof FORMAT.JSON;
        query?: Query;
    }
): Promise<T>;

export async function fetcher(
    path: string,
    {format, query, ...options}: RequestInit & {
        format: Format;
        query?: Query;
    },
) {
    try {
        const url = new URL(path);
        Object.entries(query ?? {}).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });

        const response = await fetch(url, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        if (format === FORMAT.TEXT) {
            return response.text();
        }

        return response.json();
    } catch (error: any) {
        if (error.name === 'AbortError') {
            error.aborted = true;
        } else {
            error.aborted = false;
        }

        throw error;
    }
}
