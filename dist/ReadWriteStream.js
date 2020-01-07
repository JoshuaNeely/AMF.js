"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadWriteStream = /** @class */ (function () {
    function ReadWriteStream(data) {
        this.data = data;
    }
    ReadWriteStream.prototype.read = function (size) {
        if (size === void 0) { size = 1; }
        // select the first "size" bytes of the array
        var bytesRead = this.data.slice(0, size);
        // remove the first "size" bytes from the remaining data
        this.data = this.data.slice(size);
        return bytesRead;
    };
    ReadWriteStream.prototype.write = function (buff) {
        // directly accessing Buffer integers avoids some annoying ascii/utf8 conversions issues
        for (var i = 0; i < buff.length; i++) {
            this.data.push(buff[i]);
        }
    };
    return ReadWriteStream;
}());
exports.ReadWriteStream = ReadWriteStream;
