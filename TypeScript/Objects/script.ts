const div = document.querySelector('#p') as HTMLElement;
let student: {
  fname: string;
  lname: string;
  age: number;
  working: boolean;
  grade?: number;
  printMsg: Function;
} = {
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
  fname: string;
  lname: string;
  private salary: number;
  constructor(fname: string, lname: string, salary: number) {
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
  insurances: Array<string>;
  constructor(fname: string, lname: string, salary: number, insurances: Array<string>) {
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
  constructor(public fname: string, public lname: string, protected salary: number) {}
}

let cook = new restaurantEmployee('John', 'Doe', 2000);
console.log(JSON.stringify(cook));

const { fname: first, lname: last } = cook;
console.log(last);
