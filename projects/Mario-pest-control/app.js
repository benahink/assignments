// let addSum;
// let addSum2;
// let addSum3;
// goombas.addEventListener('submit', function(e) {
//     e.preventDefault() 
//     let input1 = document.getElementById('goombaInput1').value
//     let input2 = document.getElementById('goombaInput2').value
//     addSum = parseInt(input1) * parseInt(input2)
//     document.getElementById('addResult').innerText = `${addSum}`
// });

// bobombs.addEventListener('submit', function(e) {
//     e.preventDefault() 
//     let input3 = document.getElementById('bobombsInput1').value
//     let input4 = document.getElementById('bobombsInput2').value
//     addSum2 = parseInt(input3) * parseInt(input4)
//     document.getElementById('addResult2').innerText = `${addSum2}`
// });

// cheepcheeps.addEventListener('submit', function(e) {
//     e.preventDefault() 
//     let input5 = document.getElementById('cheepcheepsInput1').value
//     let input6 = document.getElementById('cheepcheepsInput2').value
//     addSum3 = parseInt(input5) * parseInt(input6)
//     document.getElementById('addResult3').innerText = `${addSum3}`
// });

let totalPrice = document.getElementById('submitButton')

totalPrice.addEventListener('click', function(e) {
    e.preventDefault()
    let input1 = document.getElementById('goombaInput2').value
    let input2 = document.getElementById('bobombsInput2').value
    let input3 = document.getElementById('cheepcheepsInput2').value
    let total = parseInt(input1) * 5 + parseInt(input2) * 7 + parseInt(input3) * 11 
    document.getElementById('total').innerText = `Total: ${total}`
});


