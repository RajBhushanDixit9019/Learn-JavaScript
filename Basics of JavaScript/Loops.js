// this JavaScript code is to illustrate 
// the concept of loops in JS

// There are several types of Loops in JS
// Each loop statement have different purposes.

// while loop statement
let a = 0
console.log("While loop:");

while (a < 3) {
    console.log("Hi");
    
    a++;
  }


// for loop statement
console.log("For Loop:");

for (let i = 0; i < 2; i++) {
    console.log("Hello");
    
}

// for-in loop statement

const person ={
    name:"Raj",
    age:23,
    course:"MCA"
}
console.log("For-In Loop:");

for(ele in person){
    console.log(ele)
    
}

// For-Of loop statement

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(cars);

