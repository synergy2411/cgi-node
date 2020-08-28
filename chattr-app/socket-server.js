const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

// Making /public folder static
app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/socket-client.html");
})

io.on("connection", client => {
    console.log("Connection established");
})

server.listen(9090, () => {
    console.log("Socket Server started at Port 9090");
})

