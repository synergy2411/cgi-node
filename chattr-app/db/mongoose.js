const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/cgi_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("Mongo Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
