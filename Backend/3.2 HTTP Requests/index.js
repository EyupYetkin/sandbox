import express from "express";

const app = express();
var port = 3000;
app.get("/", (req,res) => {
    res.send("<h1>test<h1>");
})

app.get("/about", (req,res) => {
    res.send("<h1>about me<h1>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>contact<h1>");
})



app.listen(port, () => {
    console.log(`listening on ${port}`)
})