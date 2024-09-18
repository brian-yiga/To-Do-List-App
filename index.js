// Select necessary elements
// Function to add a new task
// Create a list item element whose values will be the new task value
// Add the list item to the task list
// Clear the input field
// Update tasks in local storage
// Add event listener to the "Add" button
// write a function to set tasks in local storage
// write a function to get tasks from local storage (if available)
// Load tasks from local storage on page load


const inputField = document.querySelector('.inputfield');
const btn = document.getElementById('btn');
const taskList = document.getElementById('tasklist');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
  
    taskList.appendChild(listItem);
  
    inputField.value = "";
  
    const currentTasks = getTasks();
    currentTasks.push(task);
    setTasks(currentTasks);
  }

  btn.addEventListener('click', function() {
    const taskValue = inputField.value;
    if (taskValue) {
      addTask(taskValue);
    } else {
      alert("Please enter a task!");
    }});


function setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }

function getTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : []; 
  }
  
const tasks = getTasks();
tasks.forEach(task => addTask(task));