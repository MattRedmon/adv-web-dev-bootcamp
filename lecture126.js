/*
LECTURE 126
EXPLICIT BINDING

Using EXPLICIT binding we can choose what we want the context
of THIS to be using call, apply or bind
These 3 methods can only by used by functions
*/

// ***************************************************


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
console.log(sayHi.apply(colt));
console.log(sayHi.apply(elie));
// In this example call or apply do the same thing



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



// *******************************************************************************

// LECTURE 128
// APPLY

// We only start to see a difference with call and apply when we start adding args

function addNumbers(a,b,c,d) {
  return this.firstName + " just calculated " + (a+b+c+d);
}

var colt = {
  firstName: "Colt"
}
var elie = {
  firstName: "Elie"
}
console.log(addNumbers.call(elie,1,2,3,4))       // Elie just calculated 10
console.log(addNumbers.apply(elie, [1,2,3,4]))  // Elie just calculated 10
// the difference between call and apply is in first all args are entered only
// separate by commas.  On second any additional args after the first on are
// passed in as an array

// Using apply over call might be valuable when a function does not accept an array
// you can use apply to spread out values in an array for us

var nums = [5,7,1,4,2];
// Math.max can pick out highest number but it DOES NOT accept arrays
Math.max(nums);  // if we pass nums into Math.max we get NAN since not accept arrays
//  we can use apply to spread out array
console.log(Math.max.apply(this, nums))     // prints 7
// adding apply to Math.max allows us to use the array now
// since we don't care about about explicity setting the value of the keyword
// THIS we pass in THIS as the first parameter


function sumValues(a,b,c) {
  return a + b + c;
}
var values = [4,1,2];
sumValues(values);        //  "4,1,2undefinedundefined"
// our function sums 3 values which is what our values array has in it
// BUT not in the right format. above passes the array, with all 3 values,
// to the a variable in our function with nothing passed to b or c
console.log(sumValues.apply(this, values));
// If we refactor our code with apply we can use our array on our function
// and get the correct answer




// *******************************************************************************

// LECTURE 129
// BIND

// Bind works just like apply EXCEPT instead of immediatly invoking the function
// it returns a new function with the keyword THIS bound to the value
// that we pass as the first parameter.

function addNumbers(a,b,c,d) {
  return this.firstName + " just calculated " + (a+b+c+d);
}

var elie = {
  firstName: "Elie"
}
var elieCalc = addNumbers.bind(elie,1,2,3,4);
console.log(elieCalc());

// Bind is useful when we don't know all of the arguments that will be passed
// to a function which means we don't want to invoke it the function right away
// We just want to return a new function with some of the parameters
// This is called partial application
// with bind we only need to know what we want the value of the keyword this to be
var elieCalc2 = addNumbers.bind(elie, 1,2);
console.log(elieCalc2(3,4));
// NOTE THE DIFFERENCE BETWEEN THIS FUNCTION AND THE ONE JUST ABOVE IT
// The first is passed the value of this plus 4 nums to bind
// The second is passed the value of this and only 2 nums to bind
// The remaining two numbers

// Another common use case for BIND is to set the context of the keyword this for a function
// that will be called at a later time
// Very commonly happens when dealing with asynchronous code or
// code that does not run line by line



// *******************************************************************************

// LECTURE 130
// BIND CONTINUED

var colt = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName);
    }, 2000);
  }
}
// In above we would normally say that the THIS keyword is bound to the "colt" object
// HOWEVER since the set time out is called at a later point in time the THIS keyword
// refers to the global object
// because called later in time the object is attached to the window
// SO timeout is a method on the window object
// Even though defined inside of Colt object in which it is declared
// the context in which the setTimeout is executed is the global context
// SINCE we are LOSING the correct context of the keyword THIS
// we should explicitly set what we want the keyword THIS to refer to

var colt = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName);
    }.bind(this), 2000);
  }
}
colt.sayHi();
// on line 223 you can pass in the variable name colt to the bind method
// and you would get the same result.  It's better to use THIS here though
// incase the variable name ever changes.