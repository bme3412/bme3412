const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//Key Down
// taskInput.addEventListener('keydown', runEvent);

// Key Up
// taskInput.addEventListener('keyup', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// CUt
// taskInput.addEventListener('cut', runEvent)

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input Event
// taskInput.addEventListener('input', runEvent);


function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    // heading.innerText = e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}