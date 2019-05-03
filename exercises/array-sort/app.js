// Q1
function leastToGreatest(arr) {
   return arr.sort((a,b) => {
       return a > b
    }
)}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

// Q2
function greatestToLeast(arr) {
    return arr.sort((a,b) => {
        return b > a
    }
)}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

// Q3
function shortestToLongest(arr) {
    return arr.sort((a, b) => {
        return a.length > b.length
    }
)}
console.log(shortestToLongest(["dog", "wolf", "by", "family", "eaten"]))

// Q4
function sortAlphabetically(arr) {
    return arr.sort((a, b) => {
        return a > b
    })
} 
console.log(sortAlphabetically(["dog", "wolf", "by", "family", "eaten"]))

// Q5
function sortByAge(arr) {
    return arr.sort((a, b) => {
        return a.age > b.age
    })
}
console.log(sortByAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]))
