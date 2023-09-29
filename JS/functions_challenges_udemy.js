// ///////////////////// //
// //// Challenge 1 //// //
// ///////////////////// //

const getCelsius = f => (f - 32) * 5 / 9;

// const getCelsius = f => { 
//   const celsius = (f - 32) * 5 / 9; 
//   return celsius;
// }

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);



// ///////////////////// //
// //// Challenge 2 //// //
// ///////////////////// //

// 1 //

// function minMax(arr){
//   const minValue = Math.min(...arr);
//   const maxValue = Math.max(...arr);
//   const minMaxObject = {
//     min: minValue,
//     max: maxValue,
//   }
//   return minMaxObject;
// };

// 2 //

// function minMax(arr){
//   return {
//     min: Math.min(...arr),
//     max: Math.max(...arr),
//   }
// };

// 3 //

const minMax = arr => {
  return {
    min: Math.min(...arr), 
    max: Math.max(...arr),
  }
};

// console.log(minMax([1, 2, 3, 4, 5]));


// ///////////////////// //
// //// Challenge 3 //// //
// ///////////////////// //

// (function(lenght, width){
//   const area = lenght * width;
//   console.log(`The area of a rectangle with a lenght of ${lenght} and width of ${width} is ${area}.`);
// })(10, 5);

((lenght, width) => {
  const area = lenght * width;
  console.log(`The area of a rectangle with a lenght of ${lenght} and width of ${width} is ${area}.`);
})(10, 5);



