"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TokenStream {
    constructor(tokens) {
        this._stream = [];
        this._position = 0;
        this._stream = tokens;
    }
    current() { return this._stream[this._position]; }
    next() { return this._stream[this._position++]; }
    previous() { return this._stream[this._position--]; }
    peek(to) { return this._stream[this._position + to]; }
    source(tokens) {
        this._position = 0;
        this._stream = tokens ? tokens : this._stream;
    }
    get stream() { return this._stream; }
    get position() { return this._position; }
    get eos() { return this._position === this._stream.length; }
}
exports.default = TokenStream;
