var app = angular.module('prepModule');

app.controller('showImages', function($scope, $http, loginServ){
$("#navbar_icon").css("visibility","hidden"); // This uncommented means the hamburger shows up. 
    console.log("showImages.js DO IT!");
	$scope.pictures = [];
	$http({
		method: 'GET',
		url: 'https://api.unsplash.com/photos/?client_id=67726f5ad542c14d61f2e484786f72da4cf6bf5f772a6a058719c14f14459649',
	}).then(function successCallback(response) {
		// console.log(response.data[0].urls.regular);

		response.data.forEach(function(element){
			$scope.pictures.push(element.urls.regular);

		});

		// console.log($scope.pictures);
	}, function errorCallback(response) {
		console.log("You did NOT NOT NOT it");    // called asynchronously if an error occurs
		// or server returns response with an error status.
	});

	var myVar = setInterval(myTimer, 4000);
	var current = 0;
	function myTimer() {
		var tag = $scope.pictures[current];
		var container = document.getElementById("foo");
		console.log(container);

		container.src=tag;

		//If we're at our max (minus 1 because of 0 based index) then reset
		if (current == $scope.pictures.length - 1) {
			current = 0;
		} else {
			current++;
		}
	}

	
  	
});
