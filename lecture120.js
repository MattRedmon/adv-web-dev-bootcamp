/*
USING CLOSURES IN THE WILD
looks at some use cases for closure
*/

// one use case is to create private variables
// which javascript does not have native support for
function counter() {
  var count = 0;
  return function inner() {
    count++;
    return count;
  }
}
var counter1 = counter();
console.log(counter1);         // [function: inner]
console.log(counter1());       // returns "1"
console.log(counter1());       // returns "2"
console.log(counter1());       // returns "3"

// we can create a new counter 2 variable and call it as we did counter1
// the count will start over since the counter 2 has its own private
// count variable created by the closure
// we don't have access to either count variable outside of the inner function
var counter2 = counter();
console.log(counter2);         // [function: inner]
console.log(counter2());       // returns "1"
console.log(counter2());       // returns "2"
console.log(counter2());       // returns "3"

console.log("********************************");

function classRoom() {
  var instructors = ["Elie", "Colt"];
  return {
    getInstructors: function() {
      return instructors;
    },
    addInstructors: function(instructor) {
      instructors.push(instructor);
      return instructors;
    }
  }
}

var first = classRoom();
console.log(first);
/* first call to classRoom() returns below:
and object with the two methods that were defined within the function
{ getInstructors: [Function: getInstructors],
  addInstructors: [Function: addInstructors] }
*/
console.log(first.getInstructors());        // returns array [ 'Elie', 'Colt' ]
first.addInstructors("Matt");
console.log(first.getInstructors());        // returns amended array [ 'Elie', 'Colt', 'Matt' ]
// if we create a second classroom the new array will be different
// from the first array. Using the functions/methods within the object defined
// within the outer function creates a closure and creates unique
// and private arrays for each instance
var second = classRoom();
second.addInstructors("Oswald");
console.log(second.getInstructors());       // returns array [ 'Elie', 'Colt', 'Oswald' ]
