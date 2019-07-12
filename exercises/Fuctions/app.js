// Q1
function sum(num1, num2) {
    theSum = num1 + num2
    return theSum
}
console.log(sum(3, 15))

// Q2
function greaterNum(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}
console.log(greaterNum(17, 7, 9))

// Q3
function evenOrOdd(num) {
    let remainder = num % 2
    if (remainder === 0) {
        console.log('even: ' + num)
    } else {
        console.log('odd: ' + num)
    }
}
console.log(evenOrOdd(3))

// Q4
function stringLength(str) {
  strLength = str.length
  if (strLength <= 20) {
      return str.concat(str) 
  } else {
    return str.slice(0, str.length / 2)
  }
}
console.log(stringLength("I am a very long string that keeps going and going."))

// Q5

function fibonacci(n){
    if (n <= 2) {
        return 1
    } else {
        let a = 1 ;
        let b = 0;

        for(let i = 0; i <= n; i++) {
            let result = a + b;
            a = b;
            b = result;
            console.log(result)
        }
        return b;
    }
}

console.log(fibonacci(11))


  

