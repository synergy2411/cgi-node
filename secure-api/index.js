const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const SECRET_KEY = "My_super_Secret_key";

app.use(bodyParser.json());

const ensureToken = (req, res, next) => {
  const bearer = req.headers["authorization"];
  if (bearer) {
    const bearerToken = bearer.split(" ");
    const token = bearerToken[1];
    req.token = token;
    next();
  }
  // return res.send("Token not found");
};

// http://localhost:9090/api => Public API
// public API
app.get("/api", (req, res) => {
  res.send("Public API");
});

// http://localhost:9090/api/protected
// protected API
app.get("/api/protected", ensureToken, (req, res) => {
  console.log("Token : ", req.token);
  try {
    const decode = jwt.verify(req.token, SECRET_KEY);
    console.log(decode);
    res.send("Protected API");
  } catch (err) {
    return res.redirect("/api");
  }
});

app.post("/login", (req, res) => {
  if (req.body) {
    const { username } = req.body;
    const token = jwt.sign({ username }, SECRET_KEY);
    return res.send({ token });
  }
});

app.listen(9090, () => {
  console.log("Server started at Port 9090");
});
