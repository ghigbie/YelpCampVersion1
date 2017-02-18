var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("*", function(req, res){
   res.render("views/notFound"); 
});

app.listen(process.env.Port, process.env.IP, function(){
    console.log("The server has started. Yay!!! Time to celebrate : )");
});

