// Learning the Arryas in JavaScript...

// arrays by using letral method..
let fruits = ["Apple", "Banana", "Cherry"];


console.log("Friuts are:")
fruits.forEach(fruit => { // iterating arrays by foreach loop..
    console.log(fruit);
});


// arrays by using array constructor..

let numbers = new Array(10, 20, 30);
console.log("Numbers are:"); 

numbers.forEach(number =>{
    console.log(number); // iterating array by foreach loop
});


// arrays using of() method..
let Numbers = Array.of(5, 10, 15);
console.log(Numbers); // Output: [5, 10, 15]

// arrays using from() method..
let str = "hello";
let arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']
