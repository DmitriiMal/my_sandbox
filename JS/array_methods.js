// /////////////////////////// //
// ////// array.forEach ////// //
// /////////////////////////// //

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// console.log(socials);

// socials.forEach((element, index, arr) => 
//   console.log(`Social media number ${index + 1} is ${element} \n` + arr[index])
// );



const socialsObj = [
  {name: 'Twitter', url: 'https://twitter.com'},
  {name: 'LinkedIn', url: 'https://linkedIn.com'},
  {name: 'Facebook', url: 'https://facebook.com'},
  {name: 'Instagram', url: 'https://instagram.com'}
]

socialsObj.forEach((item, index) => console.log(`${index + 1}. url of ${item.name} is ${item.url}`));




// ////////////////////////// //
// ////// array.filter ////// //
// ////////////////////////// //