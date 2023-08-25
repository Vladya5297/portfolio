import type {ValuesType} from 'utility-types';

export const FORMAT = {
    TEXT: 'text',
    JSON: 'json',
} as const;

type Format = ValuesType<typeof FORMAT>;

export function fetcher(
    url: string, options: RequestInit & {format: typeof FORMAT.TEXT}
): Promise<string>;

export function fetcher<T>(
    url: string, options: RequestInit & {format: typeof FORMAT.JSON}
): Promise<T>;

export async function fetcher(
    url: string,
    options: RequestInit & {format: Format},
) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        if (options.format === FORMAT.TEXT) {
            return response.text();
        }

        return response.json();
    } catch (error: any) {
        throw new Error(`Network request error: ${error.message}`);
    }
}
