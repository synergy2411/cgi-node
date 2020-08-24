const http = require("http");

const server = http.createServer((request, response) => {
    console.log("Method : ", request.method)
    console.log("URL : ", request.url)

    response.writeHead(200)
    response.write("Hello from Server")
    response.end();
})

server.listen(9090);
console.log("Server listening on Port 9090...");