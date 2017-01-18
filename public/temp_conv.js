var app = angular.module("a1", []);

app.controller("converter", function($scope, $http){

  $scope.convertTemp = function(){
    $http.get("/"+$scope.unit+"/"+$scope.temp).then(function(responce){
      $scope.temp_output = "Temperature is "+responce.data.value+" "+responce.data.unit;
    });
  }


});
