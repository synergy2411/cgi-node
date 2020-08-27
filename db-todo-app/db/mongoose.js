const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/cgi_db";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((response) => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
