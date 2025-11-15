const express = require("express")
const app = express()
const path = require("path")
// No "ejs" needed to be imported or in a variable.


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname , "public") )) //3rd mistake

app.set("view engine" , "ejs") // 2nd mistakes

app.get("/", function(req , res){
    res.render("index") //1st mistake
})

app.get("/profile/:anyname" , function(req,res){ //This is used for dynamic routing
    res.send(`This is the profle part of ${req.params.anyname}`)
})

app.get("/profile" , function(req,res){
    res.send("This is the profile part")
})

app.listen(3000, function(){
    console.log("The server is working");
})

