// this JavaScript code illustrate the concepts of 
// Conditional Statements in JavaScript...



// simple if statement in JS

let num =10

if(num === 10){
    console.log("number is equal to 10")
}
console.log("simple if executed!")

let isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("User is logged in")
}

// only checks number
if(2 == "2"){
    console.log("not equal")
}
// checks for equality and also type
if("2" === "2"){
    console.log("equal")
}

// if-else statement in JS

// number even or odd

let n = 2

if(n%2 === 0){
    console.log("Yes, number is even")
}
else{
    console.log("No, number is odd")
}


// if-else ladder statement in JS


const day = "Monday"

if(day === "Monday"){
    console.log("day is monday")
}
else if(day === "Sunday"){
    console.log("day is sunday")
}
else{
    console.log("Other day!")
}

// nesting of if statement in JS

const age = 19
const vote = true

if(age >= 18){
    if(vote){
        console.log("Person can vote")
    }
    else{
        console.log("Person's age is above 18, but person can not vote")
    }
}
else{
    console.log("Person is not eligible for voting")
}

