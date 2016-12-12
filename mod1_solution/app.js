(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.enough = "Testing";
    $scope.LunchList = "";
    $scope.items = SplitString($scope.LunchList)
  }

  function SplitString(string) {
    var stringList = string.split(',');
    return stringList;
  }


})();
