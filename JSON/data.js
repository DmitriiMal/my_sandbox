let employees = `
 [{
     "userId": "29893944817",
     "jobTitleName" : "Developer",
     "firstName": "Patrik",
     "lastName": "Jonathan",
     "preferredFullName" : "Patrik Jonathan",
     "employeeCode": "E1",
     "region": "CA",
     "phoneNumber" : "408-1234567",
     "emailAddress": "patrik.k.jonathan@gmail.com"
 }, {
     "userId": "29823964877" ,
     "jobTitleName": "Analyst",
     "firstName": "Tom",
     "lastName": "Irani",
     "preferredFullName" : "Tom Irani",
     "employeeCode": "E2",
     "region": "CA",
     "phoneNumber" : "408-1111111",
     "emailAddress": "tomrirani@gmail.com"
 }, {
     "userId": "25833742117" ,
     "jobTitleName": "Program Directory",
     "firstName": "Tom",
     "lastName": "Hanks",
     "preferredFullName" : "Tom Hanks",
     "employeeCode": "E3",
     "region": "CA",
     "phoneNumber" : "408-2222222",
     "emailAddress": "tomhanks@gmail.com"
 }]`;

console.log(employees);

let mydata = JSON.parse(employees);

console.log(mydata);

let results = document.querySelector('#results');

for (let i = 0; i < mydata.length; i++) {
  results.innerHTML +=
    'My name is ' +
    mydata[i].firstName +
    ' and I am working as a ' +
    mydata[i].jobTitleName +
    '<hr>';
}

//how to store a simple string
localStorage.setItem('favouriteColor', 'blue');
console.log(localStorage.favouriteColor);
//blue
