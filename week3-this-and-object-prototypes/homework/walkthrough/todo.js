var tasks = [
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

function addTask(taskThatImGoingToAdd) {
  tasks.push({
    title: taskThatImGoingToAdd,
    completed: false
  });
  updateView();
}

function toggleTaskCompleted(el) {
  var taskIndex = $(el).attr('taskId');
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  updateView();
}

function updateView() {
  // reference the "ul" element in our HTML
  var taskListDiv = document.getElementById("taskList");
  taskListDiv.innerHTML = "";
  // for each task, I need to create a "li" element
  // in each "li" element, I want to display the task
  // then, I want to add the task to the task list
  tasks.forEach(function(task, index) {
    var individualTask = document.createElement("li");
    individualTask.innerHTML = task.title;
    individualTask.setAttribute('completed', task.completed);
    individualTask.setAttribute('taskId', index);
    individualTask.setAttribute('onclick', "toggleTaskCompleted(this)");
    taskListDiv.appendChild(individualTask);
  });
}

updateView();
