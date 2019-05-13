// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").
// John is the pet owner, and his name should be stored differently than the other names.
let ownerName = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []
let petName;

function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            petName = "fluffy"
        } else {
            petName = "spot"
        }
        pet.petName = petName
        petObjects.push(pet)
    }
    return petObjects
}
console.log(runForLoop())

//Q1
// Re-write this .map() using an arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, 
// and not starting an object, so the : will be an unexpected symbol.
const carrots = ["bright orange", "ripe", "rotten"]


function mapVegetables(arr) {
    return arr.map(carrot => { 
        const carrotsObj = {type: "carrot", name: carrot}
        return carrotsObj
    }   
)}
console.log(mapVegetables(carrots))

//Q2
// Re-write this .filter() using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
      return person.friendly
    })
}
console.log(filterForFriendly(people))

//Q3
// Re-write the following functions to be arrow functions:
const doMathSum = (a, b) => {
    return a + b
}

console.log(doMathSum(2, 3))

const produceProduct = (a, b) => {
    return a * b
}

console.log(produceProduct(4, 5))

//Q4
// Write a printString function that takes firstName, lastName, 
// and age as parameters and returns a string like the following:

let printString = (firstName, lastName, age) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString("Jane", "Doe", 40))


//Q5
// Use the shorthand syntax to make the following filter take up one line. 
// Copy and paste the array to test it.
function filterForDogs(arr) {
    return arr.filter(animal => {
      const filtered = animal.type === "dog" ? true : false
      return filtered
    }
)}
console.log(filterForDogs([
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]))

//Q6
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

const welcomeFunction = (name, location) => {
     return `Hi ${name}!

Welcome to ${location}.
            
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}
console.log(welcomeFunction("Janice", "Hawaii"))