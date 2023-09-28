// /////////////////// //
// //// Functions //// //
// /////////////////// //




function product(name, price) {
  return `The product: ${name} costs € ${price}`;
}
console.log(product("Bread", 1.99));



///
function getRasult(numberOne, numberTwo, NumberThree) {
  let sum = numberOne + numberTwo + NumberThree;
  let multiply = numberOne * numberTwo * NumberThree;
  let result = [sum, multiply];
  return result;
}

console.log(getRasult(2, 8, 4)[0]);


// =>

///
const multiply = (numb1, numb2) => {
  return numb1 * numb2;
}

console.log(multiply(2, 4));


///
const sum = nmb => nmb + nmb;

console.log(sum(9));



///
const cl = smt => console.log(smt);

cl('something');

///


let randomNum = Math.floor(Math.random() * 110);

console.log(randomNum);



///

let today = new Date();
console.log(today);
// alert(today);

document.querySelector('h1').innerHTML = today;

///
// document.write("The result from multiplying 5 to 78 is " + (5 * 78));

// document.write("<h1>This is a H1 title</h1> ");