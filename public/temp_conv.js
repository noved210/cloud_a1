var app = angular.module("a1", []);

app.controller("converter", function($scope, $http){

  $scope.convertTemp = function(valid, value_valid, unit_value){
    if(valid){
      $http.get("/"+$scope.unit+"/"+$scope.temp).then(function(responce){
        $scope.temp_output = "Temperature is "+responce.data.value+" "+responce.data.unit;
      }) ;
    }else{
      var alert_message = "Warning! Incorrect information has been entered, please correct the following\n";

      if(!value_valid){
        alert_message += "- Enter a single positive or negative number with non-character units\n";
      }if(!unit_value){
        alert_message += "- Select option F or C from the dropdown list\n";
      }
      alert(alert_message);
    }
  }


});
