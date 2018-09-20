// ES2015 PART 1

// Lecture 171 - Intro
// Lecture 172 - Intro

// Lecture 173 - Const

// allows us to create constants or values which can not be redeclared
// useful when you want to explicitly declare variables
// that should never be redeclared


const instructor = "Andy"
instructor = "Betty"  // will get type error since instructor already assigned as a constants
const instructor = "New"  // will get syntax error
// using const can not change the value of a primitive including:
/// strings, numbers, booleans, null, undefined, and symbol


// BEWARE - you can cange the value of an array or object
// declared with the const keyword
// const does not stop an object from being modified
// const does not make objects immutable

const num = [1,2,3,4];
num.push(10);
console.log(num);  // [1,2,3,4,10]






// Lecture 174 - Let
// creates new type of scope: Block Scope

// can reassign but CAN NOT redeclare
let instructor = "Charles";
// reassign below
instructor = "Daniel";  // no problems here, instructor is now "Daniel"
// redclare below:
let instructor = "Ethan";  // get syntax error

// keywords that create block (but not necessarily a new scope):
// if, for, while, do, try and catch are some

var instructor = "Elie";
if (instructor === "Elie") {
  let funFact = "Plays the cello";
}
console.log(funFact);  // get reference error
// by using the "let" keyword in the above block
// we have created a new scope within the if block
// if we try to access the variable created insice the block
// outside we get a reference error. It is only visible from
// within the block
// if we had declared the variable 'funFact' with the var keyword
// we would be able to access it outside the block since
// no new scope would have been created


// BEWARE - when let is used within a function
// it does not behave the same way as the var keyword
// variables declared with let do not hoist!
// let variables are not lifted to the top of the scope

// example of hoisting using var
function helloInstructor() {
  return elie
  var elie = "me!"
}
helloInstructor(); // undfined

// since we are returning the variable elie before it is declared
// we might think that we would get a reference error
// however we only get undefined since the varialbe has been
// hoisted to the top of the function
// WITH hoisting the code above effectively looks like this:
function helloInstructor() {
  var elie;
  return elie
  elie = "me!"
}

// while variable declared with let do get hoisted we DO NOT
// have access to its value (which would be "undefined" if created with var)
// it is in a temporal dead zone where variable declared but unaccessable
function secondInstructor() {
  return tim
  let tim = "him!"
}
secondInstructor(); // produces reference error!



