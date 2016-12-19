(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.provider('ShoppingList', ShoppingListProvider)
.config(Config);

Config.$inject = ['ShoppingListProvider'];
function Config(ShoppingListProvider) {
  ShoppingListProvider.defaults.maxItems = 5;
}

ShoppingListController.$inject = ['ShoppingList'];
function ShoppingListController(ShoppingList) {
  var list = this;

  list.itemsToBuy = [
    { name: "cases of beer", quantity: 10 },
    { name: "bottles of scotch", quantity: 10 },
    { name: "guitars", quantity: 10 },
    { name: "guns", quantity: 10 },
    { name: "cases of ammo", quantity: 10 },
  ];

  list.itemsBought = [];

  list.listCompleteMsg = "";
  list.listEmptyMsg = "Nothing bought yet.";

  list.itemName = "";
  list.itemQuantity = "";

  list.buyItem = function (itemIndex) {
    list.itemsBought = ShoppingList.addItem(list.itemsToBuy[itemIndex].name, list.itemsToBuy[itemIndex].quantity);
    list.itemsToBuy = ShoppingList.removeItem(list.itemsToBuy, itemIndex);
    list.listEmptyMsg = "";
    if (list.itemsToBuy.length == 0) {
      this.listCompleteMsg = "Everything is bought!";
    }
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var itemsBought = [];
  var itemsToBuy = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsBought.push(item);
    return itemsBought;
  };


  service.removeItem = function (itemsToBuy, itemIndex) {
    itemsToBuy.splice(itemIndex, 1);
    return itemsToBuy;
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListProvider() {
  var provider = this;

  provider.defaults = {
    maxItems: 100
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
}

})();
