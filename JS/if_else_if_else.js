// ///////////////// //
// If, else if, else //
// ///////////////// //


const v = 15;

let message;

if (v > 10) {
  console.log('v is greater than 10');
  if (v >= 10 && v <= 20) {
    console.log('It\'s between 10 and 20')
  }
  if (v > 20) {
    console.log('It\'s over 20!');
  }
} else if (v === 9) {
  console.log('v is equal to 9');
} else {
  console.log('v is less than 9');
  if (v == 1) {
    console.log('It\'s 1!');
  }
};