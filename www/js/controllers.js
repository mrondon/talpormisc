angular.module('starter.controllers', [])

.controller('PizzaCtrl',function($scope, $ionicModal) {
  // No need for testing data anymore

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('calcPizza.html', function(modal) {
    $scope.pizzaModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Open our new task modal
  $scope.calcPizza = function(derps) {
  	var mod = derps.eaters % 3;
  	if(mod == 0){
  		$scope.medianas = derps.eaters / 3;
  		$scope.grandes = 0;
  	} else if (mod == 1){
	  	$scope.medianas = 2*Math.floor((derps.eaters-3)/3);
	  	$scope.grandes = 2;  		
  	} else {
	  	$scope.medianas = 2*Math.floor((derps.eaters-1)/3);
	  	$scope.grandes = 1;  
  	}
  	$scope.extras = derps.hunger;

    $scope.pizzaModal.show();
  };

  $scope.closeCalcPizza = function() {
    $scope.pizzaModal.hide();
  };

})

.controller('GatesCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})
/*
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})*/

.controller('AccountCtrl', function($scope, Debts, $ionicModal) {

  $scope.iowe = Debts.iowe();
  $scope.owesme = Debts.owesme();

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('newDebt.html', function(modal) {
    $scope.newDebtModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Open our new task modal
  $scope.newDebt = function(derps) {


    $scope.newDebtModal.show();
  };




});
