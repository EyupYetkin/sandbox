import express from "express";

const app = express()
const port = 3000


app.get("/",(req, res)=>{
    const today = new Date();
    const day = today.getDay();
    
    let cDay = "weekday"
    let cJob = "workhard"

    if(day === 0  || day === 6){
        cDay = "weekend"
        cJob = "play hard"
    } 
    res.render("index.ejs",{ 
        cDay: cDay,
        cJob: cJob}
    )
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})