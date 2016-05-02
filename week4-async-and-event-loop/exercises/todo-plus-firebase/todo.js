var firebaseReference = new Firebase("PUT YOUR FIREBASE REFERENCE URL HERE");

var tasks = [];
firebaseReference.on("value", setTasksArrayEqualToFirebaseResponseAndUpdateView);

firebaseReference.on('value', logValue);
function logValue(value) {
  console.log(value.val());
}

function setTasksArrayEqualToFirebaseResponseAndUpdateView(value) {
    tasks = value.val();
  updateView();
}

function addTask(taskThatImGoingToAdd) {
  // add new task to tasks Array
  tasks.push({
    title: taskThatImGoingToAdd,
    completed: false
  });
  // clear out the input box
  document.getElementById("newTask").value = "";
  // replacing the old tasks Array in Firebase with our new
  // tasks array in our ToDo app
  firebaseReference.set(tasks);
  updateView();
}

function toggleTaskCompleted(elementBeingPassedAsThis) {
  var taskIndex = $(elementBeingPassedAsThis).attr('taskId');
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  firebaseReference.set(tasks);
  updateView();
}

function removeTask(el) {
  var taskIndex = $(el).attr('taskId');
  tasks.splice(taskIndex, 1);
  firebaseReference.set(tasks);
  updateView();
}

function updateView() {
  // reference the "ul" element in our HTML
  var taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = '';
  // for each task, I need to create a "li" element
  // in each "li" element, I want to display the task
  // then, I want to add the task to the task list
  tasks.forEach(function(task, index) {
    // creating an empty li element, assigning the value to individualTask
    var individualTask = document.createElement('li');
    // taking the 'title' property of each task, putting the text into the list item
    // <li>Task Text</li>
    individualTask.innerHTML = task.title;
    // as I'm iterating through each task, each task has a property called completed (Boolean)
    // <li completed="true">Task Text</li>
    individualTask.setAttribute('completed', task.completed);
    individualTask.setAttribute('taskId', index);
    individualTask.setAttribute('onclick', 'toggleTaskCompleted(this)');
    individualTask.setAttribute('ondblclick', 'removeTask(this)');
    taskListDiv.appendChild(individualTask);
  });
  $('li').on('swipe', function(el) {
    var taskIndex = $(this).attr('taskId');
    var task = tasks.splice(taskIndex, 1);
    tasks.unshift(task[0]);
    updateView();
  });
}

updateView();
