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

// -------------Q1

const carrots = ["bright orange", "ripe", "rotten"]


function mapVegetables(arr) {
    return arr.map(carrot => { 
        const carrotsObj = {type: "carrot", name: carrot}
        return carrotsObj
    }   
)}
console.log(mapVegetables(carrots))

// -------------Q2

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

// -------------Q3

const doMathSum = (a, b) => {
    return a + b
}

console.log(doMathSum(2, 3))

const produceProduct = (a, b) => {
    return a * b
}

console.log(produceProduct(4, 5))

// -------------Q4


let printString = (firstName, lastName, age) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString("Jane", "Doe", 40))


// -------------Q5

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

// -------------Q6

const welcomeFunction = (name, location) => {
     return `Hi ${name}!

Welcome to ${location}.
            
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}
console.log(welcomeFunction("Janice", "Hawaii"))