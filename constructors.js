// String

const name1 = 'Lionel';
const name2 = new String('Lionel');

//console.log(name2)

console.log(typeof name2);

if(name1 === 'Lionel'){
    console.log('YES')

} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x','y', 'return 1 +1' );
console.log(getSum1(2,3));

// Object
const lionel = {name: 'Lionel'};
const lionel2 = new Object({name: 'lionel'});
console.log(lionel2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\w+');

console.log(re2);