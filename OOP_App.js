// Object literla with 1 instance

// const lionel = {
//     name:'lionel',
//     age:33
// }

// console.log(lionel);

// console.log(lionel.age);

// Person constructor
function Person (name, dob){
    this.name =  name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const brendan = new Person('Brendan', 33);
// const lionel = new Person('Lionel', 34);

// console.log(lionel.age);

const brendan = new Person('Brendan', '10-26-1987');
console.log(brendan.calculateAge());