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



