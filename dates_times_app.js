let val;

const today = new Date();
let birthday = new Date('10-26-1987 07:15:00');
birthday = new Date('07-27-1985 12:15:00');
birthday = new Date('10/26/1987');

val = birthday;
val = today.getMonth();
val = today.getDate();
val =today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(typeof val);
console.log(val)
console.log(birthday);