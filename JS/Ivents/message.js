// /////////////////////////// //
// ///////// Message ///////// //
// /////////////////////////// //


let h1 = document.querySelector('h1');
let button = document.querySelector('button');

function message() {
  h1.innerHTML = `well done, and now learn further`;
}

button.addEventListener('click', message, false);




