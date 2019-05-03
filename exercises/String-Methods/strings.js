let stringOne = 'Hello world!'
let stringTwo = 'Hello'
let strArray = []

// Q1
function caps(str) {
 return  str.toUpperCase() + str.toLowerCase()
}
console.log(caps(stringTwo))

// Q2
function halfLength(num) {
    num = num.length / 2
    return (Math.floor(num))
}
console.log(halfLength(stringOne))

// Q3
function sliceFunction(str) {
  return str.slice(0, str.length / 2)
}
console.log(sliceFunction(stringOne))

// Q4
function halfCaps(str) {
  str = str.split(' ')
  strArray.push(str)
  for (let i = 0; i < strArray.length; i++) {
    let wordsIndex =  strArray[i]
    wordsIndex[0] = wordsIndex[0].toUpperCase()
    wordsIndex[1] = wordsIndex[1].toLowerCase()
    strArray[i] = wordsIndex.join(' ')
  }
  return strArray.join('')
}
console.log(halfCaps())

