// ///////////////////// //
// //// Functions-1 //// //
// ///////////////////// //


// Function deklaration

function addDollar(value) {
  let result = '$' + value;
  return result;
}
// console.log(addDollar(100));



////////////////////

const string = "300"
// console.log(typeof string);

function convertToNumber(value) {
  let resultNum = parseInt(value);
  // let resultNum = (+value);
  console.log(typeof resultNum);
  return resultNum;
}

// console.log(convertToNumber(string));


// Function expression

const addPlusSighn = function (value) {
  return '+' + value;
}
// console.log(addPlusSighn(200));


// Arrow function 

const add = (a, b) => {
  return a + b
};

// console.log(add(1,2));


///////
const subtact = (c, d) => c - d;

// console.log(subtact(4, 2));


// Returning an object 

const createObj = (name, age) => ({
  name: name,
  age: age,
})

// console.log(createObj('Dmitrii', 34));

function createAnObj(name, age) {
  const user = {
    name: name,
    age: age,
  }
  return user;
}

// console.log(createAnObj('Dmitrii', 34));


///////////

const numbers = [1,2,3,4,5];

numbers.forEach(function (n) {
  n += 1;
  // console.log(n);
});

numbers.forEach((n) => {
  n += 1; 
  // console.log(n)
});


// Immeietly invoked function expression (IIFE)

// 1. // ()();
// 2. // (function(){})();

(function hello(){
  // console.log(`Hello`);
})();


(function(name){
//  console.log(`Hello ${name}`); 
})('Dmitrii');

