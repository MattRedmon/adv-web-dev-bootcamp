// LECTURE 175 TEMPLATE STRINGS

// also know as string interpolation in other languages

// Old Way:
var first = "James";
var last = "Brown"
console.log("I'm " + first + " " + last);   // error prone

// done w/ template strings
console.log(`Hello  ${first} ${last}`);


// LECTURE 176 ARROW FUNCTIONS

// arrow function => allows us to replace the function keyword
// with function keyword
var add = function(a,b) {
  return a+b;
}
// using arrow FUNCTIONS
var add = (a,b) => {
  return a+b;
}

// if we put entire function on one line can omit return keyword and curley braces
var add = (a,b) => a+b;
// if we added return keyword here JS would through a syntax error


// old way:
[1,2,3].map(function(value) {
  return value * 2;
});   // [2,4,6]

// with arrow function
[1,2,3].map(value => value * 2)  // [2,4,6]

// another example with the function keyword
function doubleAndFilter(arr) {
  return arr.map(function(value) {
    return value * 2;
  }).filter(function(value) {
    return value % 3 === 0;
  })
};
doubleAndFilter([5,10,15,20]);    // [30]

// with arrow function
var doubleAndFilter = arr => arr.map(val => val *2).filter(num => % 3 === 0);
doubleAndFilter([5,10,15,20]);    // [30]

// BEWARE - arrow function are not exactly the same as regular functions
// arrow functions do not get thier own "this" keyword
// inside of an arrow function, the keyword "this" has its original meaning
// from the enclosing context.
// not having own keyword this can be helpful BUT must understand
// when you might not want that

// arrow functions SHOULD NEVER BE USED as methods in objects
// since we will get the incorrect value of the keyword "this"


// LECTURE 179 DEFAULT PARAMETERS

function add(a,b) {
  return a + b;
}
add();  // returns NaN because a and b are undefined

// this allows us to set defaut parameters to use if nothing else is passed in
function add (a=10, b = 20) {
  return a + b;
}
add()  // returns 30
add(20)  // returns 40
// the only other way we could do above is with conditional logic
// like an if statement if a value is undefined


// LECTURE 180 FOR..OF LOOPS


// a for..in loop is traditionally used to loop over keys in an object
// BUT not as helpful in iterating over values in an array
// however a for..of loop can help with that
// we CAN NOT use a for..of loop to iterate over an object

var arr = [1,2,3,4,5];
for(let var of arr) {
  console.log(val);
}
// 1
// 2
// 3
// 4
// 5



// LECTURE 180 REST OPERATOR

function printRest(a,b,...c) {   // three dots "..." are the rest operator
  console.log(a);
  console.log(b);
  console.log(c);
}

printRest(1,2,3,4,5);
// 1
// 2
// [3,4,5]
// rest operator puts left over arguments into an array



// LECTURE 181 SPREAD OPERATOR

// used on arrays to spread each value out (as a comma separated value)
// useful when you have an array, but what you are working with expects
// comma separated values
// looks like the rest operator but in a different context

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

// to combine in to array via old way:
var combined = arr1.concat(arr2).concat(arr3);

// new way in ES2015:
var combined = [...arr1, ...arr2, ...arr3];  // returns [1,2,3,4,5,6,7,8,9]

// example of possible use
function sumValues(a,b,c) {
  return a + b + c;
}
var nums = [12,16,20]
// we can't pass nums into out sumValues function. it would be passed into the a parameter
// leaving b and c empty
// we can however use the spread operator on nums and it will work
sumValues(...nums);   // returns 47



// LECTURE 184
// OJBECT ENHANCEMENTS

// ES2015 allows for several shortcuts in object notation


// Object shorthand notation:
var firstName  = "elie";
var lastName = "jones";
// in ES5
var instructor = {
  firstName: firstname,
  lastName: lastName
}
// naming keys and values same name as above is a CONVENTION, not a requirment
// in ES2015
// if keys and values have same name we don't have to repeat as we do above
var instructor = {
  firstName,
  lastName
}


// option to write more succint Object methods
// in ES5
var instructor = {
  sayHello: function() {
    return "Hello!";
  }
}
// in ES2015
var instructor = {
  sayHello() {
    return "Hello!";
  }
}
// NEVER use arrow functions for object methods as they do not get thier own keyword "this"

//Computed property names:
// in ES5
var firstName = "sam";    // set firstName to sam
var instructor = {};      // create an empty object
instructor[firstName] = "That's me!";   // add firstName property to object and set to "Thats me"
console.log(firstName);  // prints "Sam"
console.log(instructor.sam);  // prints "That's me!"
// above we are aboue to use "instructor.sam" on line 190
// because firstName is set to "sam" on line 186 and then
// we set property instructor[firstName] on line 188
// since firstname is "sam" we can call instructor.sam and we will get "that's me!"
// in ES2015
var firstName = "John";
var instructor = {
  [firstName]: "That's not me!"
}
console.log(instructor.John);  // prints "That's not me!"
// in ES5 above we have to create object first then assign value to instructor[firstName]
// in ES2015 we can create object and assign at same time.



// LECTURE 185
// OJBECT DESTRUCTURING
//  destructuring is extracting value from data stored in objects and arrays

// ES5
var instructor = {
  firstName: "Sam",
  lastName: "Smith"
}
var firstName = instructor.firstName;  // we are extracting data from values stored in objects
var lastName = instructor.lastName;    // but this can be very tedious with a lot of data
console.log(firstName);  // prints "Sam"
console.log(lastName);   // prints "Smith"

// ES2015
var instructor = {
  firstName: "Sunny",
  lastName: "Day"
}
var {firstName, lastName} = instructor;
console.log(firstName);  // prints "Sunny"
console.log(lastName);   // prints "Day"
// the CATCH with above is we have to name our variables the exact same names as the keys
// in the objects we are destructuring

// if we want to make different variable names:
var {firstName: first, lastName: last} = instructor;
console.log(first);  // prints "Sunny"
console.log(last);   // prints "Day"

// a more complex example
// in ES5
function createInstructor(options) {
  var options = options || {};
  var name = options.name || {first: "matt", last: "lane"}
  var is Hilarious =  options.hilarious || false;
  return [name.first, name.last, isHilarious];
}
createInstructor();   // returns ["matt", "lane", false]
createInstructor({isHilarious: true});  // return ["matt", "lane", true]
createInstructor({name: {first:"tim", last: "garcia" }});  // returns ["tim", "garcia", false]

// In ES2015
// above refactored using destructuring
function createInstructor( {name = {first: "matt", last: "lane"}, isHilarious=false } = {} ) {
  return [name.first, name.last, isHilarious];
}
// passing in a destructered object as a parameter to a function
// and specifiying the keys of "name" and "isHilarious"
// with default values
// at the end of the parameter we are assigning the whole thing to be an empty object
// we assign as a default value an empty object so ES2015 knows we are destructuring
// if nothing is passed in, we default to the destructured object as the parameter

// in ES5
// object fields as parameters
function displayInfo(obj) {
  return [obj.name, obj.favColor];
}
var instructor = {
  name: "elie",
  favColor: "purple"
};
displayInfo(instructor);  // return ["elie", "purple"]
// above in ES2015
function displayInfo( { name, favColor} ) {
  return [name, favColor]
};
var instructor = {
  name: "matt",
  favColor: "blue"
};
displayInfo(instructor);  // return ["matt", "blue"]

// ES2015 destructuring is very common in REACT



// LECTURE 186
// ARRAY DESTRUCTURING

// IN ES5
var arr = [1,2,3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a)   // 1
console.log(b)   // 2
console.log(c)   // 3

// in ES2015
var arr = [4,5,6]
var [a,b,c] = arr
console.log(a)   // 4
console.log(b)   // 5
console.log(c)   // 6

// in ES5
function returnNumbers(a,b) {
  return [a,b];
}
var first = returnNumbers(5,10)[0];
var second = returnNumbers(5,10)[1];
console.log(first)  // 5
console.log(second) // 10

// in ES2015
function returnNumbers(a,b) {
  return [a,b];
}
[first, second] = returnNumbers(6,9);
console.log(first)  // 6
console.log(second) // 9

// destructuring can be used in swapping values
// in ES5
function swap(a,b) {
  var temp = a;
  a = b;
  b = temp;
  return [a,b];
}
swap(10,5);   // [5,10];

// in ES2015
function swap(a,b) {
  return [a,b] = [b,a];
}
swap(12,19)  // [19,12]

