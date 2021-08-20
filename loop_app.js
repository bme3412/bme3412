// FOR LOOP

for(let i=0; i < 10; i++){
    console.log('Number ' + i)
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if(i === 5){
        console.log('Stop the loop');
        break;
    }

    console.log('Number ' + i)
}


// WHILE LOOP

let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;
}

// DO WHILE LOOP

do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

// LOOP THROUGH ARRAYS
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

for(let x=0; x < cars.length; x++){
    console.log(cars[x]);
}

// FOR EACH
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
})

// MAP
const users = [
    {id:1, name:'John'},
    {id: 2, name: 'Karen'},
    {id: 3, name: 'WIlliam'},
    {id:4,name:'Bill'}
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids)

const user = {
    firstName: 'Lionel',
    lastName: 'Logue',
    age: 35
}

for(let y in user){
    console.log(`${y}: ${user[y]}`);
} 