//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
var port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var isPassTrue = false
app.use(bodyParser.urlencoded({ extended: true }));


function passwordCheck(req, res, next){
    const password="123"
    if (password === req.body["password"]){
        isPassTrue = true
    }
    next();
}

app.use(passwordCheck)

app.post("/check", (req, res) =>{
    if (isPassTrue) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.redirect("/")
    }

})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
    console.log("3000 listening");
})