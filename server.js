var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/:unit/:value", function(req, res){

  var unit = req.params.unit;
  var value = req.params.value;

  if(value != undefined){
    if(unit == "F"){
      unit = "C";
      value = (value - 32) * (5/9)
    }else{
      unit = "F";
      value = value*9/5 + 32
    }
  }else{
    unit = "blank";
    value = "please enter in a number value";
  }

  res.json({unit: unit, value: value});
  res.end();
});

app.get("*", function(req, res){
  res.sendfile("./public/index.html");
});

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app is listening at http://%s:%s", host, port);
})
