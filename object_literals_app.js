const person = {
    firstName: 'Lionel',
    lastName: 'Logue',
    age: 33,
    email: 'lionel@yahoo.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Paris',
        state: 'Ile de France'
    },
    getBirthYear: function(){
        return 2021 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person['hobbies'][1]
val = person['address']['state']
val = person['getBirthYear']()
console.log(val)

const people = [
    {name: "John", age: 33},
    {name: "Sam", age: 30},
    {name: 'Gil', age:40}
];

for(let i=0; i < people.length; i++){
    console.log(people[i].name);
}