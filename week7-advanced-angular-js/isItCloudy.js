// we have access to a global angular variable because we
// brought in the angular package in our index.html
var isItCloudyDependencies = [];
angular
  // create our module, which points to the root
  // of our application
  .module("isItCloudy", isItCloudyDependencies)

  // next we'll create our controller
  .controller("MainController", MainController)

  // next we'll create a factory
  // this will speak to our weather API
  .factory("WeatherAPI", WeatherAPI);

WeatherAPI.$inject = ["$http"];
function WeatherAPI($http) {
  function getWeatherForZipCode(zipCode) {
    return $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ zipCode +",us&APPID=281ec47f6a3ffb296ec26736ebe39256");
  }
  return {
    "getWeatherForZipCode": getWeatherForZipCode
  };
}

// manually injecting $scope into our controller
// minification-safe, expert level achieved
MainController.$inject = ["$scope", "WeatherAPI"];

function MainController($scope, WeatherAPI) {
  $scope.greeting = "Hello World!";
  $scope.forecasts = [];
  $scope.getForecastByZipCode = function(zipCode) {
    WeatherAPI.getWeatherForZipCode(zipCode)
    .then(onSuccess)
    .catch(onFailure);
  };
  function onSuccess(response) {
    $scope.forecasts.push(response.data);
  }

  function onFailure(error) {
    console.error(error);
  }
}
