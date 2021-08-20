// WINDOW METHODS / OBJECTS / PROPERTEIS

console.log(123);

// Alery
// window.alert('Hello world');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// PROPERTIES

let val;

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll points
val = window.scrollY;


// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = `http://google.com`
// // Reload
// window.location.reload();

// History Object
window.history.go(-1);

val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;


console.log(val);