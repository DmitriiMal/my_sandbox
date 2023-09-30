
/// For loop ///

// for (let i = 1; i <= 100; i++) {

//   if (i % 3 == 0 && i % 5 == 0){
//     console.log(`${i} - FizzBuzz`);

//   } else if (i % 3 == 0){
//     console.log(`${i} - Fizz`);
//     continue;

//   } else if (i % 5 == 0){
//     console.log(`${i} - Buzz`);
//     continue;

//   } else {
//     console.log(i);
//   }
// }



/// While loop ///

let i = 1;

while (i <= 100) {
  i++
  if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} - FizzBuzz`);
    
      } else if (i % 3 == 0){
        console.log(`${i} - Fizz`);
        continue;
    
      } else if (i % 5 == 0){
        console.log(`${i} - Buzz`);
        continue;
    
      } else {
        console.log(i);
      } 
      // i++
}