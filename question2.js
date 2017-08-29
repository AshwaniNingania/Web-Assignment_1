var express = require("express");
var app = express();
var body_parser = require("body-parser");
var morgan = require("morgan");
var fs = require("fs");
app.set("view engine","pug");

app.use("/",body_parser.urlencoded({extended: false}));
app.use('/', express.static(__dirname+"/assets"));
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

app.post('/submit', function (req,res) {

    var date = new Date(req.body.dob);
    var message = "hi "+req.body.name+ " , you have lived on this planet for " + parseInt(((new Date)-date)/(24*3600*1000))+" days.";
    res.render("index", {title: "Question 2", message : message});

});

app.listen(3000);