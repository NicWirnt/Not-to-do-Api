// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;


// Api end points
app.get("/api/vi", (req, res) =>{
    res.json({
        message: "Welcome to api"
    })
});

app.use("/", (req,res) =>{
    // const person = {
    //     name : "Nico",
    //     lastName: "Wiranata"
    // }

    res.json({message: "you hae reached to the api of not to do application"});
});



app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});

