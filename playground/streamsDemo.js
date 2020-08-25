// const fs = require("fs");

// const gzip = require("zlib").createGzip;

// const readStream = fs.createReadStream("./cool.txt");
// const writeStream = fs.createWriteStream("./new-cool.txt");

// readStream.pipe(gzip()).pipe(writeStream);


const EventEmitter = require("events").EventEmitter;
const Stream = require("stream").Stream;
const Readable = require("stream").Readable;
const Writable = require("stream").Writable;
const Transform = require("stream").Transform;
const Duplex = require("stream").Readable;

console.log(new Stream() instanceof EventEmitter);
console.log(new Readable() instanceof EventEmitter);
console.log(new Writable() instanceof EventEmitter);
console.log(new Transform() instanceof EventEmitter);
console.log(new Duplex() instanceof EventEmitter);

console.log(new Readable() instanceof Stream);


// EventEmitter -> Stream -> (Readable, Writable, Transform, Duplex)