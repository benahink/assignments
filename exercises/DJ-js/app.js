document.getElementById('blue').addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue'
})

document.getElementById('blue').addEventListener('mousedown', function(){
    this.style.backgroundColor = 'red'
})

document.getElementById('blue').addEventListener('mouseup', function(){
    this.style.backgroundColor = 'yellow'
})

document.getElementById('blue').addEventListener('dblclick', function(){
    this.style.backgroundColor = 'green'
})

window.addEventListener('scroll', function() {
    document.getElementById('blue').style.backgroundColor = 'orange'
}) 

document.addEventListener('keydown', function(event) {
    output = event.which
    if(output === 82) {
        document.getElementById('blue').style.backgroundColor = 'red'
    } else if (output === 66){
        document.getElementById('blue').style.backgroundColor = 'blue'
    } else if (output === 89){
        document.getElementById('blue').style.backgroundColor = 'yellow'
    } else if (output === 71){
        document.getElementById('blue').style.backgroundColor = 'green'
    } else if (output === 79){
        document.getElementById('blue').style.backgroundColor = 'orange'
    }
})