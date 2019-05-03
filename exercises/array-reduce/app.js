// Q1
function totalArr(arr) {
    return arr.reduce((a, b) => {
        return a + b
    }
)}
console.log(totalArr([1,2,3]))

// Q2
function stringConcat(arr) {
    return arr.reduce((a, b) => {
        return a.toString() + b.toString()
    }
)}
console.log(stringConcat([1,2,3]))

// Q3
function peopleWhoVoted(arr) {
    return arr.reduce((a, b) => {
        if(b.voted === true) {
            return a = a + 1
        } else {
            return a
        }
    },0)
}

console.log(peopleWhoVoted([
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]))

// Q4
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

function shoppingSpree(arr) {
    return arr.reduce((a, b) => {
        return a = a + b.price
    } ,0)
}
console.log(shoppingSpree(wishlist))

// Q5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function joinArrays(arr) {
    return arr.reduce((a,b) => {
        return a.concat(b)
    })
}
console.log(joinArrays(arrays))

// Q6
var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age:55, voted:true},
    {name: 'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function voterResults(arr) { 
   return arr.reduce((sum, x) => {
        if(x.age >= 18 && x.age <= 25) {
            sum.youngVoters += 1
            if(x.voted === true) {
                sum.youngVotes += 1
            } 
            return sum
        } else if (x.age >= 26 && x.age <= 35) {
            sum.midVoters += 1
            if(x.voted === true) {
                sum.midVotes += 1
            } 
            return sum
        } else if (x.age >= 36 && x.age <= 55) {
            sum.oldVoters += 1
            if(x.voted === true) {
                sum.oldVotes += 1
            } 
            return sum
        } 
    }, {
        youngVoters: 0,
        youngVotes: 0,
        midVoters: 0,
        midVotes: 0,
        oldVoters: 0,
        oldVotes: 0
    })
    // include potential voters between 18-25
        // how many voted?
    // inclue potential voters between 26-35
        // how many voted?
    // inclue potential voters between 36-55
        // how many voted?
}
console.log(voterResults(voters))