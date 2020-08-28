const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname +"/public"));

const user = {
    name : "Foo",
    age : 32
}
const viewsPath = path.join(__dirname,"/template/views");
const partialsPath = path.join(__dirname,"/template/partials");

app.set("view engine", "hbs");          // handlebar
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// app.set("view engine", "ejs");          // handlebar
// app.set("view engine", "vash");          // handlebar
// app.set("view engine", "jade");          // handlebar

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about", {user})
})

app.listen(9090, () => { console.log("Server started at Port 9090")});
