var readline = require('readline-sync')

let num1 = readline.question('What is your 1st number: ')
let num2 = readline.question('What is your 2nd number: ')
let operator = readline.question('+ - * or /: ')

if(operator === '+') {
    console.log(+num1 + +num2) 
} else if (operator === '-') {
    console.log(parseInt(num1) - parseInt(num2)) 
} else if (operator === '*') {
    console.log(num1 * num2) 
} else if (operator === '/') {
    console.log(num1 / num2) 
}





