'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $scope.qty =21;
  $scope.cost =13;
  $scope.msg ="ssssssssssssss";
  $http({
    method: 'get',
    url: "http://test.jiaxinmore.com/apps/api/demand/getUserRansomRecords",
    data:{
        page:1
    }
  }).success(function(data, status) {
    console.log(data.data)
    $scope.names=data.data.records
    // Now we have a list of the stories (data.list.story)
    // in the data object that the NPR API
    // returns in JSON that looks like:
    // data: { "list": {
    //   "title": ...
    //   "story": [
    //     { "id": ...
    //       "title": ...
  }).error(function(data, status) {
    // Some error occurred
  });

  var updateClock = function() {    $scope.clock = new Date();  };
  var timer = setInterval(function() {    $scope.$apply(updateClock);  }, 1000);
  updateClock();

  $scope.names = function() {
    return $scope.firstName + " " + $scope.lastName;
  }

}).filter("myUpperFilter", function() {
  return function(input) {
    return input.toUpperCase();
  }
})

.directive("runoobDirective", function() {
  return {
    template : "<h1>自定义指令2222222222!</h1>"
  };
}).directive("myDctv", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.css("background", "yellow");
    });
    element.bind("mouseleave", function() {
      element.css("background", "none");
    });
  }
});

