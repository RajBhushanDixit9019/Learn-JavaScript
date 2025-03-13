// Exploring loopings in the array in javascript..


// normal for loop...
let animals = ["Cat", "Dog", "Elephant"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// using foreach()...
let countries = ["USA", "India", "Canada"];
countries.forEach((country) => {
  console.log(country);
});

// using map()...
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16]
