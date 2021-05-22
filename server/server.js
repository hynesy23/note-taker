const express = require("express")
const fs = require("fs")
const path = require("path");

const htmlRouter = require("../routes/html-routes")
const apiRouter = require("../routes/api-routes")

const PORT = 3000;

const app = express();
app.use(express.static('public'));

app.use("/", htmlRouter)
app.use("/api", apiRouter)

app.listen( PORT, () => {
    console.log(`App listening on localhost:${3000}`);
})