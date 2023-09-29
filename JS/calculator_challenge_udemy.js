// //////////////////// //
// //// Calculator //// //
// //////////////////// //

function calculator(x, y, operator) {
  if (operator == '+') {
    console.log(x + y);
  } else if (operator == '-') {
    console.log(x - y);
  } else if (operator == '*') {
    console.log(x * y);
  } else if (operator == '/') {
    console.log(x / y);
  } else {
    console.log(`"${operator}" is not a operator. `);
  }
}

calculator(6, 3, '+');