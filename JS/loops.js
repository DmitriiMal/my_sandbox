// /////////////////// //
// ////// Loops ////// //
// /////////////////// //


//// For loops ////

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     console.log(`7 is my lucky number :)`);
//   } else {

//     console.log(`Number ${i}`);
//   }
// }

// Nest loops //

// for (let i = 1; i <= 10; i++){
//   console.log(`Number ${i}`);

//   for (let j = 1; j <= 10; j++) {
//   console.log(`${i} * ${j} = ${i * j}`);

//   }
// }


// Loops through an array //

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (i = 0; i < names.length; i++) {
//   if (names[i] == 'Sara') {
//     console.log(`${names[i]} is the best!`);
//   } else {
//     console.log(names[i]);
//   }
// }


// Break //

// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log(`Breaking...`);
//     break;
//   }
//   console.log(i);
// }


// Continue //

// for (let i = 0; i <= 20; i++) {
//   if (i === 13) {
//     console.log(`skipping...`);
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i === 13) {
//     console.log(`skipping...`);
//   } else {
//     console.log(i);
//   }
// }



//// While loops ////

let i = 0;

// while (i <= 20) {
//   console.log('Number ' + i);
//   i++
// }


// While loop over arrays

const arr = [10, 20, 30, 40, 50]

// while (i < arr.length) {
//   console.log(arr[i]); 
//   i++
// };


// Nesting while loop

// while (i <= 5) {
//   console.log(`Number ${i}`);

// let j = 0;
// while (j <= 5) {
//   console.log(`${i} * ${j} = ${i * j}`);
//   j++
// }
// i++
// }


// Do while loop

do {
  console.log(`number ${i}`);
  i++
} while (i <= 10);
