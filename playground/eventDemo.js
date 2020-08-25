// const EventEmitter = require("events").EventEmitter;
// let emitter = new EventEmitter();

// // emitter.addListener("foo", ()=>{})

// const handler = (data = {message : "Default"}) => {
//     console.log("Handler executed", data.message);
// }

// emitter.once("foo", (data) => {
//     console.log("Foo Event Fired - " , data.message)
// })
// emitter.on("foo", handler);

// emitter.on("bar", handler);

// emitter.emit("foo", {message : "My Event Message"});
// emitter.emit("bar")

// emit() - triggers the event 
// on() - handles event


// process.on("uncaughtException", ()=>{
//     console.log("Global Error Handler");
// })

// process.on("exit", (code) =>{
//     console.log("Exiting...", code)
// })
// // nonExistFunc();

// process.exit(1);