// Q1
function greaterThanFive(arr) {
    let newArr = arr.filter(num => num > 5)
    return newArr
}
console.log(greaterThanFive([3, 6, 8, 2]))

// Q2
function evenNums(arr) {
    let newArr = arr.filter(num => num % 2 === 0)
    return newArr
}
console.log(evenNums([3, 6, 8, 2]))

// Q3
function lessThanFiveChar(arr) {
    let strArr = arr.filter(str => str.length >= 5)
    return strArr
} 
console.log(lessThanFiveChar(["dog", "wolf", "by", "family", "eaten", "camping"]))

// Q4
function belongsToIllumanti(people) {
    let personArr = people.filter(person => person.member === true) 
    return personArr
} 
console.log(belongsToIllumanti([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]))

// Q5
function ofAge(people) {
    let personArr = people.filter(person => person.age >= 18)
    return personArr
}
console.log(ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))