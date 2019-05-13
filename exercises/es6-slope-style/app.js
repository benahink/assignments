// ****Green dot ski slope****
// Q1
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
const collectAnimals = (...arr) => {
    return arr;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// Q2
// Write a function that returns a food object with the array names as properties using Object Literals:
const combineFruits = (fruits, sweets, vegetables) => {
    const obj = {
        fruits,
        sweets,
        vegetables
    }
    return obj
}
console.log(combineFruits(["apple", "pear"],
["cake", "pie"],
["carrit"]));

// Q3
// Use destructuring to fill in the blanks and use the property names as variables:
const vacations = {
    location: 'Burly Idaho', 
    duration: "2 weeks"
};

let {location} = vacations;
let {duration} = vacations;

const parseSentence = () => {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence())

// Q4
// Use destructuring to make this code ES6:
const returnFirst = (items) => {
    let [firstName] = items;
    return firstName;
}

console.log(returnFirst(["carrot", "tomato", "tomato soup"]));

// Q5
// Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = favoriteActivities;
    return `My top three favorite activities are ${firstFav}, ${secondFav} and ${thirdFav}.`
}
console.log(returnFavorites(favoriteActivities));

// ****Blue square ski slope****
// Q1
// Use the Rest and Spread Operator to help take any number of arrays, 
// and return one array. You will need to change how the arrays are passed in. 
// You may write it assuming you will always recieve three arrays if you would like to.
const combineArrays = (arr1, arr2, arr3) => {
    const combine = [...arr1, ...arr2, ...arr3]
    return combine
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineArrays(realAnimals, magicalAnimals, mysteriousAnimals));


// ****Black diamond ski slope****
// Q1
// Try to make the following function more ES6xy:

