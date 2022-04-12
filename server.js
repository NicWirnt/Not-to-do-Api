import "dotenv/config";

// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

//Connect to mongoDB
import mongoClient from "./src/config/db.js";
mongoClient();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// load modules
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.json({ message: "you hae reached to the api of not to do application" });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});
