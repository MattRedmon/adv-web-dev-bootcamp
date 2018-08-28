/*
LECTURE 125
OBJECT/IMPLICIT BINDING

2ND RULE FOR DETERMINING VALUE OF THIS:  OBJECT/IMPLICIT

the second rule which we call the implicit or object  binding
states that when the keyword this is found inside of a declared
object the value of the keyword this will always be the closest
parent object
*/



var person = {
  firstName: "Elie",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  }
}
// in above example since this is inside of a declared object
// and the closest parent object is person so
// keyword this refers to the person object

console.log(person.sayHi());               //  Hi Elie
console.log(person.determineContext());    //  true





ver person {
  firstName: "Elie",
  determineContext: this;
}
// in above this refers to the global window object
// a keyword THIS is defined when a function is ran. even though we have
// this within an object since no function is run this points to window/global
// and not person



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
console.log(person.sayHi());              //  Hi Colt
console.log(person.determineContext());   //  true

console.log(person.dog.sayHello());       //  Hello undefined  --> since dog object does not have firstname defined
console.log(person. determineContext());  //  false  (if using this === person)
                                          //  if we switch to this === dog then get true since
                                          //  dog is closest parent object


