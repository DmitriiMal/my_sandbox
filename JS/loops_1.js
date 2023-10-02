// //////////////////// //
// /// For of loops /// //
// //////////////////// //

// Loop through arrays

const items = ['book', 'tamble', 'chair', 'kite'];
// const users = [
//   {name: 'Dimi',
//   favotitColor: 'Olive',
//   },
//   {name: 'Vicky',
//   favotitColor: 'Orange',
//   },
//   {name: 'Barno',
//   favotitColor: 'Black',
//   },
// ]

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }


// for (const item of items) {
//   console.log(item);
// }


// for (let user of users) {
//   console.log(user.favotitColor);
// }


// Loop through strings

const str = 'Hello world';

// for (let letter of str) {
//   console.log(letter);
// }

// const arr = [3, 1, 65, 4, 90];
// const arrDuble = arr.map(x => x * 2);
// const itemsUp = items.map(x => x.toUpperCase())
// console.log(itemsUp);


/// Loop over Maps

// const map = new Map();
// map.set('name', 'Dmitrii');
// map.set('age', 34);

// console.log(map);

// map.set('favColor', 'olive')

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// } 




// //////////////////// //
// /// For in loops /// //
// //////////////////// //


const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
}

// for (const key in colorObj) {
//   console.log(key, colorObj[key]);
// }

const colorArr = ['red', 'blue', 'orange', 'green']

for (const key in colorArr) {
  console.log(key, colorArr[key]);
}