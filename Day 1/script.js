// Day 1: Variables and Data Types

// Tasks/Activities:
// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num=10;
console.log(num);

// • Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let naam="Shubham Sharma"
console.log(naam);

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const boolVal=true;
console.log(boolVal);

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the type of operator.

//Number
let number=120;
console.log(typeof number);

//String
let str="Abhay";
console.log(typeof str);

//Boolean
let bool=false;
console.log(typeof bool);

//Object
let obj={
    fname:"Shubham",
    lname:"Sharma",
    age:24
}
console.log(typeof obj);

//Array
let myArr=[1,2,3,4]
console.log(typeof myArr);

// Activity 4: Reassigning Variables.
// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let name="Shubham";
console.log("Before reassigning " + name);

name="Shubham Sharma";
console.log("After reassigning " + name);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

const val1=45;
console.log("Before reassigning " + val1);

//val1=56;
//console.log("After reassigning " + val1);
//TypeError: Assignment to constant variable.

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let num2=24;
let string="Abhinav";
let boolValue=false;
let nullVal=null;
let undef=undefined;

console.log(num2 + " is a "+ typeof(num2));
console.log(string + " is a "+ typeof(string));
console.log(boolValue + " is a "+ typeof(boolValue));
console.log(nullVal + " is a "+ typeof(nullVal));
console.log(undef + " is a "+ typeof(undef));

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let num3=78;
console.log("Before reassigning " + num3);

num3=80;
console.log("After reassigning " + num3);

var val2=56;
console.log("Before reassigning " + val2);

val2=60;
console.log("After reassigning " + val2);

//Reassignment to const give typeError

// Achievement:
// By the end of these activities, you will:
// • Know how to declare variables using var, let, and const.
// • Understand the different data types in JavaScript.
// • Be able to use the typeof operator to identify the data type of a variable.
// • Understand the concept of variable reassignment and the immutability of const variables.