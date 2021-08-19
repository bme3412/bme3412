const Name = 'Lionel';
const age = 33;
const job = 'Web Developer';
const city = 'Paris';
let html;


// Without template strings (e5)
// html = '<ul><li>Name: '+ name + ' </li></ul>';


// With template strings/literals (es6)
html = `
<ul>
    <li> Name: ${name}</li>      
// </ul>`   
;

document.body.innerHTML =html;

