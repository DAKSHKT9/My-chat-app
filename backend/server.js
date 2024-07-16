const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running good");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);

  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
  //   console.log(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`.red.bold));
