const express = require("express");
const mongoose = require("mongoose");
const app = express();


//routes
app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog");
});

mongoose
  .connect(
    "mongodb+srv://austinhssong:MongoDBStin@devtaminyt.1zqe3af.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node API app running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
