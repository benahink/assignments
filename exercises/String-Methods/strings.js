
let strArray = []

// Q1
function caps(str) {
 return  str.toUpperCase() + str.toLowerCase()
}
console.log(caps('Hello'))

// Q2
function halfLength(num) {
    num = num.length / 2
    return Math.floor(num)
}
console.log(halfLength('Hello world!'))

// Q3
function sliceFunction(str) {
  return str.slice(0, str.length / 2)
}
console.log(sliceFunction('Hello world!'))

// Q4
function halfCaps(str) {
  return str.slice(0, str.length/2).toUpperCase() + str.slice(str.length/2)
}

console.log(halfCaps("put stuff here"))


// optional
function caps(str) {
    const strArr = str.split(' ')
    const newStrArr = []
    for(let i = 0; i < strArr.length; i++) {
      newStrArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    }
    return newStrArr.join(' ')
}
console.log(caps("cap the letters that follow a space"))


function capsMapped (str) {
  return str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
  // return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}

console.log(capsMapped('tried this with map method'))