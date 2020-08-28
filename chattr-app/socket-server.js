const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
require("./db/mongoose");
const Chat = require("./model/chatter.model");

let _messageStack = [];
let _chatterName = null;

// Making /public folder static
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/socket-client.html");
});

io.on("connection", (client) => {
  client.on("toServer", (data) => {
    const { message, chatterName } = data;
    console.log(chatterName + " : " + message);
    _messageStack.push(message);
    _chatterName = chatterName;
    client.emit("toClient", { message, chatterName: "Me" });
    client.broadcast.emit("toClient", data);
  });
  client.on("disconnect", () => {
    // whenever client gets disconnected
    console.log("Client disconnected", _messageStack, _chatterName);
    const chat = new Chat({
      chatterName: _chatterName,
      messages: _messageStack,
    });

    chat.save().then(response => {
        console.log(response);
    }).catch(err => console.log(err));
    
  });
});

server.listen(9090, () => {
  console.log("Socket Server started at Port 9090");
});
