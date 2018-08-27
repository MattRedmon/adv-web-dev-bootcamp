/*
INTRO TO CLOSURES

closure is a function that makes use of variables defined
in outer function that have previously returned


*/


function outer() {
  var start = "Closures are "
  return function inner() {
    return start + "awesome"
  }
}
console.log(outer());      // [function: inner]
console.log(outer()());    // "Closures are awesome"
// the first outer() calls the outermost function and
// returns the inner function BUT inner function is not ran
// The second outer()() calls the outer function (which return the inner function)
// then the second set of parens calls the inner function
// the inner function makes sure of the start variable even though
// that function has already returned
// closures allow us to acces the outer variable start even
// though that function has returned before it is used in the second function inner

console.log("********************");

function outer(a) {
  return function inner(b) {
    return a + b;
  }
}

console.log(outer(5));         // [function: inner]
console.log(outer(5)(6));      //    10
var storeOuter = outer(5);
console.log(storeOuter(10));   //    15
// line 36 only calls the outer function and returns the inner function definition
// since only the outer is called no number is computed
// line 37 calls the outer function with 5 with the first parens then
// the second inner function is called with 6 in the second parens
// line 38 runs the outer function with 5 and returns the inner function
// which is then stored in the storeOuter varialbe
// line 39 calls the storeOuter variable, which is holdint the inner function,
// and passed 10 to that giving us 5 + 10 = 15

console.log("********************");


// the code below does not have a closure, the inner function
// does not make use of any variables in the outer function
// below is only a nested function, one inside the other
function outerFn1() {
  var data = "something from the outer function";
  return function innerFn() {
    return "just returned from the inner function";
  }
}

// the code below does have a closure, innerFn makes use of the variable data declared
// in the outside function
// the variable fact will not be remembered or accessible
// since it is not used in the inner function
function outerFn2() {
  var data = "something from the outer function";
  var fact = "my name is joe";
  return function innerFn() {
    var innerData = "something from inner";
    return data + " " + innerData;
  }
}
console.log(outerFn2()());  //  "something from the outer function something from inner"


