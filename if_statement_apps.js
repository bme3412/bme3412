const id = 100;

// EQUAL TO
// if(id == 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }

// // NOT EQUAL TO
// if(id != 101) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }

// // // EQUAL TO VALUE & TYPE
// if(id === 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }

// // // NOT EQUAL TO VALUE & TYPE
// if(id !== 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID')
// }

// GREATER OR LESS THAN
// if(id >= 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT')
// }

// IF ELSE
// const color = 'yellow';
// if(color === 'red'){
//     console.log('Color is red');
// } else if (color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue.')
// }

// Logical Operators
const name = 'Lionel';
const age = 70;

// AND &&
if(age >30 && age < 12){
console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

// OR
if(age <16 || age < 65){
    console.log(`${name} cannot run in race`)
    } else {
        console.log(`${name} has been entered`)
    } 

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT CURLY BRACES
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT')