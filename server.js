var express = require("express");
var bodyparser = require("body-parser");
var cookie = require("cookie-parser");
var multer = require("multer");
var mysql = require("mysql");
var app = express();
app.use(bodyparser.json());

app.listen(8081, function () {
    console.log("Server Running at http://localhost:8081");
});

app.get("/", function (req, res) {

    res.send("Hello");
});

app.post("/create", function (req, res) {

    let body = req.body;
    let first_name = body.data.first_name;
    let last_name = body.data.last_name;

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "node"
    });
    con.connect(function (err) {
        if(err){
            console.log("error");
        }
        var query="insert into users(first_name,last_name) values('"+first_name+"','"+last_name+"')";
        con.query(query,function(err,result){
            console.log("inserted");
            res.end("Success");
        });
    });

});
