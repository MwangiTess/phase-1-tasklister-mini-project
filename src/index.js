document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');


  // submit a task entered
  form.addEventListener('submit', addTask);

  // deletes a task
  taskList.addEventListener('click', removeTask);

  // Add task
  function addTask(e){
    e.preventDefault();

    // get input value
    const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);

    // Create new li element
    const li = document.createElement('li');

    // Add text node with input value
    li.appendChild(document.createTextNode(newTaskDescription));

    // create delete button element
    const deleteBtn = document.createElement('button');

    // append text node to delete button
    deleteBtn.appendChild(document.createTextNode('x'));

    // append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    taskList.appendChild(li);

    // resets after entering a task
    form.reset()

  }

  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Are you sure?')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }

  }


})