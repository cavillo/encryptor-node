/// <reference types="node" />
export declare function encrypt(secret: string, data: unknown, opts: {
    algorithm?: string;
    salt?: string;
    saltLength?: number;
    stringify: false;
}): Buffer;
export declare function encrypt(secret: string, data: unknown, opts?: {
    algorithm?: string;
    salt?: string;
    saltLength?: number;
    stringify?: true;
}): string;
export declare function decrypt<T = unknown>(secret: string, data: string | Buffer, opts?: {
    algorithm?: string;
}): T;
