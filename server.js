var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/:unit/:value", function(req, res){

  var unit = req.params.unit;
  var value = req.params.value;

  if(unit == "F"){
    unit = "C";
    value = (value - 32) * (5/9)
  }else{
    unit = "F";
    value = value*9/5 + 32
  }

  res.json({unit: unit, value: value});
  res.end();
});

app.get("*", function(req, res){
  res.sendfile("./public/index.html");
});

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app is listening at http://%s:%s", host, port);
})
