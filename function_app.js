// FUNCTION DECLARATION

function greet(firstName = 'Lionel', lastName = 'Logue'){
    //console.log('Hello')
    return 'Hello, ' + firstName + ' ' + lastName;
}

console.log(greet('Lionel', 'Logue'))

// FUNCTION EXPRESSIONS

const square = function(x=3){
    return x*x;
};
console.log(square(8))

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran...');
// })();

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...')
    }, 
    edit: function(id){

    console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo...')
}

todo.add();
todo.edit(22)
todo.delete();