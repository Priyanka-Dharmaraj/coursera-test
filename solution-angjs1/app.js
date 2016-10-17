
(function()
	{
		'use strict';
		angular.module('LunchApp',[])
		.controller('LunchController', LunchController);

		LunchController.$inject = ["$scope"];
		function LunchController($scope){
		
			var msg = "";

			

				$scope.getMenu = function()
				{
					var str = $scope.menu;			
					if($scope.menu != "")
					{

						var splits = str.split(',');

						splits = clean(splits);
						msg = (splits.length <= 3)? "Enjoy!" : "Too much!";

					}
					else
					{ msg = "Please enter the data first"}	

					$scope.sayMessage =function (){

						return msg;
					}
			

				};

			
		/*clean array to remove emplty element*/
			function clean(actual) {
			  var newArray = new Array();
			  for (var i = 0; i < actual.length; i++) {
			    if (actual[i]) {
			      newArray.push(actual[i]);
			    }
			  }
			  return newArray;
			}

			
		};

	})();