// //////////////////////////// //
// //////// To Do List //////// //
// //////////////////////////// //


// setTimeout(()=>{alert("Hello world!")},3000);


function createTask() {
  let newTask = document.getElementById('demo').value;

  document.getElementById('list').innerHTML += `<li>${newTask} </li>`
  addRemoveToList();
}

document.getElementById('create').addEventListener('click', createTask);


function removeItem() {
  this.style.opacity = '0';
  this.style.transition = '1s';
  this.style.position = 'absolute';
  this.style.left = '-100px';
}


function addRemoveToList() {
  let items = document.getElementsByTagName('li');
  for (let i in items) {
    items[i].addEventListener('click',removeItem);
  }
}