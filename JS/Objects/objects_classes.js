// //////////////////////////// //
// ////// Object Classes ////// //
// //////////////////////////// //

//////////
class Person {

  constructor (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  fullName() {
      return  this.firstName + " "  + this.lastName;
  }

}


class NewClass extends Person{
   age;

  constructor(firstName, lastName, age) {
      super(firstName, lastName);
      this.age = age;
  }

  fullName(){
      return "I am " + super.fullName() + ", and i am "+ this.age+ " years old";
  }

}

var person1 = new NewClass( "Jenny", "Doe" , 30);

console.log(person1.fullName());



//////////


class Rectangle {
    constructor(name, width, heigth){
        this.name = name;
        this.width = width;
        this.heigth = heigth;
    }

    area(){
        return this.width * this.heigth;
    }

    perimeter(){
        return 2 * (this.width + this.heigth);
    }

    isSquare(){
        return this.width == this.heigth;
    }

    logArea(){
        console.log(`Rectangle area: ${this.area()}`);
    }
}


const square = new Rectangle('square', 20, 20);
console.log(square.perimeter());
square.logArea();

const rect1 = new Rectangle('rect', 10, 40);
console.log(rect1.perimeter());