// this JavaScript code is to illustrate the 
// type conversions in JavaScript..

let score = "33"

console.log(typeof score) // type:string

console.log(typeof(score)) // type:string


// using another variable..
// converting score from string to number..
let valueInNumber = Number(score)

console.log(typeof valueInNumber) // type : number
console.log(valueInNumber) // if score = "33a" valueInNumber = NaN(Not a Number)

// "33" -> 33
// "33a" -> NaN
// true -> 1


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn) // type:boolean
console.log(booleanIsLoggedIn)// true
// number conterted in boolean

// 1 -> true
// 0 -> fales
// "" -> fales
// "Raj" -> true


// conterting into string..

let someNumber = 22

let stringNumber = String(someNumber)

console.table([typeof stringNumber, stringNumber])


