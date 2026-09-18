//dom: document object model
//button kisne click kiya ye event emitter ke through pata chalta hai

import { EventEmitter } from "events";
const button= new EventEmitter();
button.on("click", (uname) => {
    console.log(`button clicked by ${uname}`);
});

button.emit("click", "John");
button.emit("click", "Alice");
button.emit("click", "Bob");
button.emit("click", "Eve");
button.emit("click");