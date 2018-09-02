
// LECTURE 139, 140, 141, 142
// INTRO TO PROTOTYPES

// Every constructor function has a property on it called "prototype", which is an object
// The prototype object has a property on it called "constructor" which points back to the constructor function
// Anytime an object is created using the "new" keyword a property called "__proto__" gets created
// linking the obj and the prototype property of the constructor function

// Because the prototype property of the constructor function is itself an object it can have
// methods and properties placed on it and those will be shared by any object created from 
// the original constructor function when it is created with the "new" keyword

function Person(name) {
    this.name = name;
}
console.log(Person.prototype);    // every function in JS has a property called prototype

var elie = new Person("elie");
var colt = new Person("colt");

elie.__proto__ === Person.prototype  // returns true
colt.__proto__ === Person.prototype  // returns true
Person.prototype.constructor === Person   // returns true

// we can add a property to the Person.prototype object
Person.prototype.isInstructor = true;
// any object created from the Person constructor will now have access to this property
console.log(elie.isInstructor);  // returns true
console.log(colt.isInstructor);  // returns true



// LECTURE 141 
// ADDING METHODS TO THE PROTOTYPE

function Person(name) {
    this.name = name;
    this.sayHi = function() {
        return "Hi " + this.name;
    }
}
var elie = new Person("elie");
elie.sayHi();   // return "Hi elie"

// Above code works just fine BUT everytime we make a new object from the constructor using the "new" keyword
// we have to redifine the sayHi function.
// It would be better if we could define the sayHi function once and have it shared among all 
// objects created from the person constructor
// We can REFACTOR our code above and put the sayHi function on the Person prototype
// so it is defined only once but all objects created with new from the Person constructor will have access to it

function Person(name) {
    this.name = name;       // properties should no be placed on the prototype like methods
}                           // so each new object has its own set of properties, they are not shared among objects
Person.prototype.sayHi = function() {
    return "Hi " + this. name;
}
var colt = new Person("colt")
colt.sayHi();    // returns "Hi colt"
// this code works exactly as it did above except we will only be 
// defining the sayHi method once. 


function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}
Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}
Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}
Vehicle.prototype.honk = function() {
    if(this.isRunning) {
        return "beep!";
    }
}



// LECTURE 142
// EXCERCIES

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this. favoriteNumber = favoriteNumber;
    this.family = [];   
}
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}
Person.prototype.addToFamily = function(person) {
    if(this.family.indexOf(personh) === -1 && person instanceOf Person) {  // this checks to see if person we are adding is already in the family array
        this.family.push(person);
    }
    return this.family.length;
}

// Below implements our own version of the array map method
Array.prototype.map = function(callback) {
    var newArr = [];
    for(var i = 0; i<this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

// Below add a method called reverse onto the string prototype
String.prototype.reverse = function() {
    var newStr = "";
    for(var i = this.length - 1; i >= 0; i--) {
        newStr += this[i];
    }
    return newStr;
}








