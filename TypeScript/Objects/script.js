"use strict";
const div = document.querySelector('#p');
let student = {
    fname: 'John',
    lname: 'Doe',
    age: 33,
    working: true,
    printMsg: function () {
        return `My name is ${this.fname} ${this.lname}, I am ${this.age} years old.`;
    },
};
// document.write(student.printMsg());
div.innerHTML = `<p>${student.printMsg()}</p>`;
// ///////////////////////// //
// /// Hospital Employee /// //
// ///////////////////////// //
class HospitalEmployee {
    constructor(fname, lname, salary) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }
    printFullName() {
        return `Employee name is ${this.fname} ${this.lname}`;
    }
    printSalary() {
        return `earns ${this.salary} &euro;/month`;
    }
}
let secretary = new HospitalEmployee('John', 'Doe', 1500);
div.innerHTML += `<p>${secretary.printFullName()}</p>`;
div.innerHTML += `<p>${secretary.printSalary()}</p>`;
class Doctor extends HospitalEmployee {
    constructor(fname, lname, salary, insurances) {
        super(fname, lname, salary);
        this.insurances = insurances;
    }
    printSalary() {
        return ` This employee ${super.printSalary()}`;
    }
    printInsurances() {
        return `Works with insurances ${this.insurances.toString()}`;
    }
}
let doctor = new Doctor('Johanna', 'Dover', 5000, ['FFF', 'AAA', 'BBB']);
div.innerHTML += `<p>${doctor.printFullName()}</p>`;
div.innerHTML += `<p>${doctor.printSalary()}</p>`;
div.innerHTML += `<p>${doctor.printInsurances()}</p>`;
// div.innerHTML += `<p>${secretary.salary}</p>`; // won't work
// /////////////////////////// //
// /// Restaurant Employee /// //
// /////////////////////////// //
class restaurantEmployee {
    constructor(fname, lname, salary) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }
}
let cook = new restaurantEmployee('John', 'Doe', 2000);
console.log(JSON.stringify(cook));
// Object Destructuring
const { fname: first, lname: last } = cook;
console.log(last);
// Array Destructuring
const cookArr = ['John', 'Doe', 2000];
console.log(cookArr);
const [firstName, lastName, salaryCook] = cookArr;
console.log(salaryCook);
