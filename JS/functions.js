// /////////////////// //
// //// Functions //// //
// /////////////////// //




// function product(name, price) {
//   return `The product: ${name} costs € ${price}`;
// }
// console.log(product("Bread", 1.99));



///
// function getRasult(numberOne, numberTwo, NumberThree) {
//   let sum = numberOne + numberTwo + NumberThree;
//   let multiply = numberOne * numberTwo * NumberThree;
//   let result = [sum, multiply];
//   return result;
// }

// console.log(getRasult(2, 8, 4)[0]);


// =>

///
// const multiply = (numb1, numb2) => {
//   return numb1 * numb2;
// }

// console.log(multiply(2, 4));


///
// const sum = nmb => nmb + nmb;

// console.log(sum(9));



///
// const cl = smt => console.log(smt);

// cl('something');

///


// let randomNum = Math.floor(Math.random() * 110);

// console.log(randomNum);



///

// let today = new Date();
// console.log(today);
// alert(today);

// document.querySelector('h1').innerHTML = today;

///
// document.write("The result from multiplying 5 to 78 is " + (5 * 78));

// document.write("<h1>This is a H1 title</h1> ");





// default parameter

// function register(user = 'User') {
//   return `${user} is registered`
// }

// console.log(register());




// Rest params

// function sumOfNumbers(...numbers) {

//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   };
//   return total;
// }

// console.log(sumOfNumbers(1, 2, 3, 4, 5));


// Object as a Function

// const user1 = {
//   name: "Dmitrii",
//   id: 12349876,
// }

// function logIn(user) {
//   messege = `${user.name} with id: ${user.id} has logged in`
//   return messege;
// }

// console.log(logIn(user1));



// Array as a Function

const myArray = [1, 2, 3, 4, 5, 6, 7];

// or // function getRandom(...arr) {
function getRandom(arr) {
  const randomInd = Math.floor(Math.random() * arr.length);

  return arr[randomInd];
}

console.log(getRandom(myArray));

