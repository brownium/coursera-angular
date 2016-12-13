(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.enough = "";
    $scope.LunchList = "";

  function itemCount(string) {
    if (string == "") {
      stringList = [];
    } else {
      var stringList = string.split(',');
    }
    return stringList.length;
  };

  $scope.IsTooMuch = function () {
    var items = itemCount($scope.LunchList);
    if (items > 3) {
      $scope.enough = "Too Much!!!";
    }
    else if (items < 1) {
      $scope.enough = "Please enter data first";
    }
    else {
      $scope.enough = "Enjoy!";
    }
  };

}

})();
