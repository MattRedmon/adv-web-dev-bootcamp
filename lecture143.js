
// LECTURE 143
// PROTOTYPAL INHERITANCE



function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function() {
    return "Hello " + this.firstName + " " + this.lastName;
}


function Student(firstName, lastName) {
    return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype)
// the above allows Student to inherit from Person
// any new properties added to Student will not affect its Person "parent" prototype

Student.prototype = new Person
// the above will do almost the same thing as Object.create but it will also
// add unnecessary properties on the prototype object. 

Student.prototype.constructor = Student;
// in using Object.create we will need to reset the constructor
// When we did the object.create we overwrote the student constructor with the person constructor
// so we need to "reset" it by assigning student to the student.prototype constructor

/* 
THIS NEEDS MORE RESEARCH
I DIDN'T COME ACROSS ANYTHING LIKE THE CODE ON LINE 29 ANYWHERE ELSE
SO I DON'T COMPLETELY UNDERSTAND WHAT'S HAPPENING HERE
*/

