// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);

const taskTitle = document.getElementById('task-title');

// Change styling
document.getElementById('task-title').style.background = '#3333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

// Change content
taskTitle.textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3').style.color = 'yellow';
document.querySelector('li:nth-child(4').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#f4f4f4';
