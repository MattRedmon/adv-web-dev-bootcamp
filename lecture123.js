/*
LECTURE 123
INTRO KEYWORD "THIS"

reserved keyword in JS
determined by how a function is call (its execution context)
everytime a function is ran in JS two special keywords are
  given to that function: the arguments keyword and keyword this
everytime a function is run a keyword THIS is defined for that function

4 rules for how the value of keyword THIS can be determined:
  global
  object/implicit
  explicit
  new


Global rule:
applies when you see the keyword this outside of a declared object
  there has not been an object literal defined which contains a function
  which uses the keyword this
in the global context its value refers to the global object which in the
  browser is the window object

  console.log(this);     // value of this is the global "window" object



************************************************************************

LECTURE 124
THIS WITH FUNCTIONS AND USE STRICT

function whatIsThis() {
  return this:
}
whatIsThis();     // value of this is the global window object
// since not inside a declared object the value of window is global




function variablesInThis() {
  this.person = "elie"
}
variablesInThis()    // keyword this inside function is the global window

** it is important to note in above code that since the this keyword
   is the global window object any properties attached to the keyword this
   will also be global variables which is not a best practice

   console.log(person);    //  prints "elie"
   this works since the person variable is a global
   if had used var person = "elie" we would not be able to do this
   because it would not be a global variable but a local variable only
   accessible from inside the funcion

if we use strict mode by adding "use strict" we can circumvent problem with last example

"use strict"
console.log(this)     // window
function whatIsThis() {
  return this:
}
whatIsThis();       // undefined

with "use strict" this keyword now return undefined

