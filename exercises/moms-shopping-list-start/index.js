document.getElementById('add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    let addedItem = document.getElementById('title').value
    let list = document.getElementById('list')
    let li = document.createElement('li')
    let newDiv = document.createElement('div')
    newDiv.innerText = `${addedItem}`
    newDiv.setAttribute('class', 'item')
    let xButton = document.createElement('button')
    xButton.setAttribute('id', 'delete')
    xButton.innerText = "X"
    let editButton = document.createElement('button')
    editButton.setAttribute('id', 'change')
    editButton.innerText = "edit"
    list.appendChild(li)
    li.appendChild(newDiv)
    li.appendChild(editButton)
    li.appendChild(xButton)
})

document.getElementById('list').addEventListener('click', function (e) {
    e.preventDefault()
    let deleteItem = document.getElementById('button')
    console.log(deleteItem)
    deleteItem.remove()
})






