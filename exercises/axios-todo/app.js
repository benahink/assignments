let form = document.addToDo

axios.get("https://api.vschool.io/beni_kur/todo/").then((response) => {    
todoList(response.data)
})

function todoList(todos, updated) {
    if(updated) {
        document.getElementById('container').innerHTML = ''
    }
    todos.forEach((todo) => {
        let newDiv = document.createElement('div');
        let myTitle = document.createElement('h2');
        let myParagraph = document.createElement('p')
        let myImg = document.createElement('IMG')
        let deleteBtn = document.createElement('button')
        let checkBox = document.createElement('input')
        
        myTitle.innerText = todo.title
        myParagraph.innerText = todo.description
        deleteBtn.innerText = "Delete"
        newDiv.className = "todoBox"
        
        myImg.setAttribute("src", todo.imgUrl)
        myImg.setAttribute('width', '200px')
        checkBox.setAttribute('type', 'checkbox')

        deleteBtn.addEventListener('click', function () {
            newDiv.style.display = 'none'
            axios.delete(`https://api.vschool.io/beni_kur/todo/${todo._id}`)
        })

        checkBox.addEventListener('click', function () {
            axios.put(`https://api.vschool.io/beni_kur/todo/${todo._id}`, {completed: !todo.completed}).then((response) => {
                todoList(response.data)
            })
            
            const newTodos = todos.map(oldTodo => {
            oldTodo._id === todo._id ? response.data: todo})
            todoList([newTodos, true])
        })
        
        if(todo.completed) {
            myTitle.style.textDecoration = 'line-through'
            myParagraph.style.textDecoration = 'line-through' 
        } else {
            myTitle.style.textDecoration = 'none'
            myParagraph.style.textDecoration = 'none'
        }

        newDiv.appendChild(myTitle)
        newDiv.appendChild(myParagraph)
        newDiv.appendChild(myImg)
        newDiv.appendChild(checkBox)
        newDiv.appendChild(deleteBtn)
        document.getElementById('container').appendChild(newDiv)
    })
}


function newTodos(newTodos) {
    axios.post("https://api.vschool.io/beni_kur/todo/", newTodos).then((response) => {
        todoList([response.data])
    })
}
    
form.addEventListener('submit', e => {
    e.preventDefault();
    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let imgUrl = form.imageUrl.value

    const myObj = {
    title: title,
    description: description,
    price: price,
    imgUrl: imgUrl
    }
    newTodos(myObj)
})
