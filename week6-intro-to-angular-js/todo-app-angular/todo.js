var todoAppDependencies = ["ngTouch"];
angular
  // module function takes 2 arguments
  // the first is the name of your application
  // the second is the list of dependencies
  .module("ToDo", todoAppDependencies)

  // Angular is MV*, but we're going to use it
  // as MVC, which is a software architecture
  // the 'C' in our setup is the controller,
  // so we'll define it now.
  .controller("MainController", MainController);

  // M - Model (where you store data)
  // V - View (what you see, markup/HTML)
  // C - Controller (link model <-> controller)

  // things in Angular use $ as a prefix
  // to denote built-in features
function MainController($scope) {
  $scope.tasks = [
    {
      title: "Eat Panera with Zack",
      completed: true
    },
    {
      title: "Walk the dog Scruffy",
      completed: false
    },
    {
      title: "Create a JavaScript app",
      completed: false
    }
  ];
  $scope.creator = "Seth";
  $scope.addTask = function(newTask) {
    $scope.tasks.push({
      title: newTask,
      completed: false
    });
    $scope.newTask = "";
  };
}
