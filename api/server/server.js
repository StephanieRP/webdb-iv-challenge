const express = require("express");
const helmet = require("helmet");

const dishRouter = require("../router/dish-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/dish", dishRouter);

// sanity check route
server.get("/", (req, res) => {
  res.status(200).send("Running List now...");
});

module.exports = server;
