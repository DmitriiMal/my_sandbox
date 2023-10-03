// ///////////////////////////// //
// ///// Class Inheritance ///// //
// ///////////////////////////// //

// /// Parent class
class Shape {
  constructor(name){
    this.name = name;
  }

  logName(){
    console.log('Shape name: ' + this.name);
  }
}

// /// Sub class
class Rectangle extends Shape {
  constructor (name, whidth, height){
    super(name);

    this.whidth = whidth;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor (name, radius){
    super(name);

    this.radius = radius;
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle('Cir 1', 30);

cir.logName();