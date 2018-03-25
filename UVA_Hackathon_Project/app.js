var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "schonanl",
  password: "Anatolia1!",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

var missing = req.body.name_user
var contact = req.body.missing_persona
var lostDate = Date_O_St
var yrMsg = req.body.user_sighting
var rating = req.body.certain


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form_data', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  })
    
 // res.send(name + ' is missing!');


var server = app.listen(5000, function () {
    console.log('Node server is running..');
}); 

   