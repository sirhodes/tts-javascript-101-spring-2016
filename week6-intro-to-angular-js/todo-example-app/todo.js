angular
  .module('ToDo', [])
  .controller('MainController', MainController);

function MainController($scope) {
  $scope.tasks = [
    {
      title: 'Go eat cheesecake',
      completed: false
    }
  ];

  $scope.addTask = function(newTask) {
    if (!newTask.length) {
      return console.error('Must have a value');
    }
    $scope.tasks.push({
      title: newTask,
      completed: false
    });
    $scope.newTask = '';
  };
}
