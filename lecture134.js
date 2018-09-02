
// LECTURE 134, 135, 136
// INTRO TO OOP W/ JS


// Objects constructed from classes that are like blueprints
// Ojbects created from classes are called instances
// We can mimic OOP in JS with functions and objects as JS does not have built in support for OOP


function House(bedrooms, bathrooms, numSqft) {    // name of constructor House is capitalized by convention
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this. numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms;   // 2
firstHouse.bathrooms;  // 2
firstHouse.numSqft;    // 1000

// new keyword first creates an empty object
// It then sets the keyword this to be that empty object
// It adds the line "return this" to the end of the function which follows it
// It add a property onto the empty object called "__proto__" or dunder proto
// which links the prototype property on the constructor function to the empty object

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log(this.name + " just barked!");
    }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark()   // Rusty just barked!
fido.bark()    // Fido just barked!



// LECTURE 136
// MULTIPLE CONSTRUCTORS

function Car(make, model, year) {
    this.make = make;
    this. model = model;
    this.year = year;
    this.numWheels = 4;
}
function Motorcycle(make, model, year) {
    this.make = make;
    this. model = model;
    this.year = year;
    this.numWheels = 2;
}
// There is a lot of duplication in the Motorcycle class from the Car class
// We can refactor Motorcycle class and some code from Car class to save duplication of code

// Refactor of Motorcyle class using "call"
function Motorcycle(make, model, year) {
    Car.call(this, make, model, year)
    this.numWheels = 2;
}
// Refactor of Motorcyle class using "apply"
function Motorcycle(make, model, year) {
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}