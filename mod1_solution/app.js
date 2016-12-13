(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.enough = "Testing";
    $scope.LunchList = "";

  function SplitString(string) {
    var stringList = string.split(',');
    return stringList.length;
  };

  $scope.IsTooMuch = function () {
    var items = SplitString($scope.LunchList);
    if (items > 3) {
      $scope.enough = "Too Much!!!";
    } else {
      $scope.enough = "Eat Up!";
    }
  };

}

})();
