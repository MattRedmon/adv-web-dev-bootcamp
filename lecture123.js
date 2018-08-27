/*
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

