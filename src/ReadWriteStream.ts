import { Buffer } from "buffer";

export class ReadWriteStream {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  read(size: number=1): number[] {
    // select the first "size" bytes of the array
    const bytesRead = this.data.slice(0, size);
    // remove the first "size" bytes from the remaining data
    this.data = this.data.slice(size);
    return bytesRead;
  }

  write(buff: Buffer): void {
    // directly accessing Buffer integers avoids some annoying ascii/utf8 conversions issues
    for (let i=0; i<buff.length; i++) {
      this.data.push(buff[i]);
    }
  }
}
