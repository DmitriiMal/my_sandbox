"use strict";
let text = 'Hello world!';
console.log(text);
let myOtherArray = [];
let weUseTheFallback = 1;
console.log(weUseTheFallback);
weUseTheFallback = 'We learn TypeScript'; // This will work as a fallback type
console.log(weUseTheFallback);
let variable = 22;
console.log(variable);
// variable = `That shouldn't work`;
console.log(variable);
let singleLineStrings = 'hello ' + 'there ' + 'general ' + 'kenobi ';
console.log(singleLineStrings);
let fName = 'Mario';
let multiLineStrings = `
   hello
   world
   my
   name
   is
   ${fName}`;
console.log(multiLineStrings);
var myObject = { a: 1, b: 2 };
for (let prop in myObject) {
    console.log(prop);
}
// a
// b
var array1 = [1, 2, 3, 4, 5];
for (let key in array1) {
    console.log(key + ' ' + typeof key);
}
for (let value of array1) {
    console.log(value);
}
var myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}
myArray.forEach(function (value) {
    console.log(value);
});
// function greeting(name?: string): string {
//   if (name) {
//     return 'General ' + name;
//   } else {
//     return 'Hello there';
//   }
// }
// var result = greeting('Kenobi');
// document.write(result);
// console.log(greeting());
var greeting = function (name) {
    if (name) {
        return 'General ' + name;
    }
    else {
        return 'Hello there';
    }
};
// document.write(greeting('Kenobi'));
// console.log(greeting());
// setTimeout(() => {
//   console.log('Hello there');
// }, 2000);
// var myFunction = function() { // callback
//   console.log("General Kenobi");
// }
function anotherFunction(ab) {
    // higher order function
    // console.log(Hello There);
    ab();
}
// anotherFunction(myFunction); // prints 'General Kenobi' then prints 'Hello There'
var color = 'blue';
console.log(color);
// let x:string=35;
// console.log( "Value of x= " +x);
// console.log( typeof +x);
