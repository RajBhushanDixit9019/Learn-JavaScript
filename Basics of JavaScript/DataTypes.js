// this JavaScript code is to illustrate
// the concept of datatypes in JS

// there are several primitive datatypes
// Numbers, String, Boolean, Undefined, Null and Symbol ect.

// Number
let age = 10;

// String
let Name = "Raj Bhushan Dixit"

// Boolean
let isLoggedIn = false

// undefined
let result;

// Null
let n = null;

// Bigint
let b = BigInt("11111")

// Symbol
let s = Symbol("Hello")


console.table([typeof age, typeof Name, typeof isLoggedIn, typeof result, typeof n, typeof b, typeof s])

// Non Primitive datatypes: Objects

// object is a collection of different types of vales in a single container

const Student = {
    name: "Raju",
    age: 18,
    course: "MCA"
};
// udating object values..
Student.age=20


console.log(Student);

console.table([Student.name, Student.age, Student.course])



