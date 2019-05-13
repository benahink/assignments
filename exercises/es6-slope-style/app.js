// Q1
const collectAnimals = (...arr) => {
    return arr;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// Q2
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
const returnFirst = (items) => {
    let [firstName] = items;
    return firstName;
}

console.log(returnFirst(["carrot", "tomato", "tomato soup"]));

// Q5
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = favoriteActivities;
    return `My top three favorite activities are ${firstFav}, ${secondFav} and ${thirdFav}.`
}
console.log(returnFavorites(favoriteActivities));