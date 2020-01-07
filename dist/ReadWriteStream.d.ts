import { Buffer } from "buffer";
export declare class ReadWriteStream {
    data: number[];
    constructor(data: number[]);
    read(size?: number): number[];
    write(buff: Buffer): void;
}
