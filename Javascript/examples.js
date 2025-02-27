function myFunction()
{
console.log("Inside Function!")
}

myFunction()

function sum(x, y) { 
return x+y;
}
console.log(sum(6, 9));

var sum =  (x, y) =>  x + y;
console.log(sum(4, 5));

//Arrow fuction
var k = (a, b) => a + b;
console.log(k(1, 2)) 

//Function as expressions and with parameters
var sum = function (x, y) {
    return x + y;
};
console.log(sum(4, 5));


//Creating objects in single line
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)


//Creating objects in multiple line

const p2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(p2)
// Create an Object
const p1 = {};

// Add Properties
p1.firstName = "John";
p1.lastName = "Doe";
p1.age = 50;
p1.eyeColor = "blue";
console.log(p1)


//Accessing the members of the objects


let age1 = person.age;
console.log(person.firstName + " is " + p1.age + " years //old.");


let age = person["age"];
console.log(person["firstName"] + " is " + person["age"] + " years old.");


let x = "firstName";
let y = "age";
console.log(person[x] + " is " + person[y] + " years old.");

//Adding property to the object
person.nationality = "English";
console.log(person);


//Removing property from the object
delete person.age;
console.log(person);