// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (i = 10; i > 0; i--) {
//     console.log(i-1)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length ; i++) {
//     console.log(fruit[i])
// }

// var arr = []

// for(i = 0; i < 10; i++) {
//     arr.push(i)
// }

// console.log(arr) 

// for (let i = 0; i < 100; i+=2) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const arr = []
// for (let i = 0; i < fruit.length; i+=2) {
//     arr.push(fruit[i])
// }
// console.log(arr)

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for (let i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   } 


// const nameArr = []
// const occArr = []
// for (let i = 0; i < peopleArray.length; i++) {
//     nameArr.push(peopleArray[i].name)
//     occArr.push(peopleArray[i].occupation)
// }
// console.log(nameArr, occArr)

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// const nameArray = []
// const occupationArray = []
// for (let i = 0; i < peopleArray.length; i+=2) {
//     nameArray.push(peopleArray[i].name)
//     occupationArray.push(peopleArray[i].occupation)
// }
// console.log(nameArray)
// for (let i = 1; i < peopleArray.length; i+=2) {
//     nameArray.push(peopleArray[i].name)
//     occupationArray.push(peopleArray[i].occupation)
// }
// console.log(occupationArray)

// Gold #1
// const arr = []
// for (let i = 0; i < 3; i++) {
//     arr.push([])
//     for (let j = 0; j < 3; j++) {
//        arr[i].push(0)
//     }
// }
// console.log(arr)

// Gold #2
// const arr = []
// for (let i = 0; i < 3; i++) {
//     arr.push([])
//     for (let j = 0; j < 3; j++) {
//        arr[i].push(i)
//     }
// }
// console.log(arr)

//Gold #3
// const arr = []
// for (let i = 0; i < 3; i++) {
//     arr.push([])
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(j)
//     }
// }
// console.log(arr)

//Gold#4
// const arr = [[0, 1, 2], [0, 1, 2], [0, 1, "csdsf"]]
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (typeof arr[i][j] === 'number') {
//             arr[i][j] = 'x'
//         }
//     }
// }
// console.log(arr)

