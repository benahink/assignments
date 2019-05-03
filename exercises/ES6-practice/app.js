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
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         type: "carrot", name: carrot)
// }