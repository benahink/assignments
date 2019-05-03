addition.addEventListener('click', function(e) {
    e.preventDefault() 
    let input1 = document.getElementById('addInput1').value
    let input2 = document.getElementById('addInput2').value
    let addSum = parseInt(input1) + parseInt(input2)
    document.getElementById('addResult').innerText = `${addSum}`
})

subtraction.addEventListener('click', function(e) {
    e.preventDefault() 
    let subInput1 = document.getElementById('subInput1').value
    let subInput2 = document.getElementById('subInput2').value
    let subSum = parseInt(subInput1) - parseInt(subInput2)
    document.getElementById('subResult').innerText = `${subSum}`
})

multiplication.addEventListener('click', function(e) {
    e.preventDefault() 
    let multiply1 = document.getElementById('multiply1').value
    let multiply2 = document.getElementById('multiply2').value
    let sum = parseInt(multiply1) * parseInt(multiply2)
    document.getElementById('multiplyResult').innerText = `${sum}`
})









