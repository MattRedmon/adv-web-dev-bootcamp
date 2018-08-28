/*
LECTURE 126
EXPLICIT BINDING

Using EXPLICIT binding we can choose what we want the context
of THIS to be using call, apply or bind
These 3 methods can only by used by functions
*/

// ***************************************************

/*
LECTURE 127
CALL

var person = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
}
console.log(person.dog.sayHello.call(person));          // "hello Colt" -- without call returns "hello undefined"
console.log(person. determineContext.call(person));     //  true -- without call returns false
// By adding call method and passing in object of person we change this
// from pointing at do to pointing at person



// Very commonly call is used to avoid code duplication
var colt = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  }
}
var elie = {
  firstName: "Elie",
  sayHi: function() {
    return "Hi " + this.firstName;
  }
}
console.log(colt.sayHi());      // prints "Hi Colt"
console.log(elie.sayHi());      // prihnts "Hi Elie"
// the second object declaration for Elie duplicates
// most of the code from the first declaration
// We can refactor our code from the var Elie to what follows
var elie = {
  firstName: "Elie"
}
// Then use call to borrow the method from the colt object as below
console.log(colt.sayHi.call(elie));
// the THIS arg is the first parameter we pass to call and sets
// the value of the keyword this to refer to elie


*/

// We can again refactor out code to make a sayHi method that anyone can use
function sayHi() {
  return "Hi " + this.firstName;
}
var colt = {
  firstName: "Colt"
}
var elie = {
  firstName: "Elie"
}
console.log(sayHi.call(colt));
console.log(sayHi.call(elie));
// We've created a stand alone function that can be used in many different cases



// Another use case for CALL:
var divs = document.getElementByTagName('div')
//  ??? how can we find all the divs that have the text "Hello" ???
//  while filter method would be great our divs variable does not contain an array
//  our divs variable does contain and array like object BUT
//  we can use slice to convert the array like object to an array
//  Let's use the slice method on arrays, but instead of the
//  targe of slice (the keyword this) being that array, let's set
//  targer of the keyword THIS to be our divs array like object
var divsArray = [].slice.call(divs);
//  we used SLICE to change array like obj to and array
//  which we can then use the array's filter method like below
divsArray.filter(function(val) {
  return val.innerText === "Hello";
});





