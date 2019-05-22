function header() {
    let title = document.getElementById('header');
    let h1Tag = document.createElement('h1');
    let h3Tag = document.createElement('h3');

    h1Tag.innerText = 'JavaScript Made This!!'
    h3Tag.innerText = 'Beni wrote the JavaScript'

    title.appendChild(h1Tag)
    title.appendChild(h3Tag)
}
console.log(header())

// function clear() {
//     let clearDiv = document.getElementById('messages');
//     let clearBtn = document.createElement('button')

//     clearBtn.innerText = "clear"
//     document.getElementById('messages').addEventListener('click', function(e) {
//         e.preventDefault()
//         this.parentNode.remove()
//     })

//     clearDiv.appendChild(clearBtn)
// }
