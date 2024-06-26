// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Ad id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item')

// Create text node and append
li.append(document.createTextNode('Hello World'));


// Create new link element
const link = document.createElement('a');




// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

/// add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);

console.log(li);