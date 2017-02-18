var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/search", function(req, res){
    res.render("campgrounds");
});

app.get("*", function(req, res){
   res.render("notFound"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started. Yay!!! Time to celebrate : )");
});

