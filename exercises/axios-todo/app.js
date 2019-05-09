let form = document.addToDo
axios.get("https://api.vschool.io/beni_kur/todo/").then((response) => {    
todoList(response.data)
})

function todoList(todos) {
    todos.forEach((todo) => {
        let newDiv = document.createElement('div');
        let myTitle = document.createElement('h2');
        let myParagraph = document.createElement('p')
        let myImg = document.createElement('IMG')

        myTitle.innerText = todo.title
        myParagraph.innerText = todo.description
        myImg.src = todo.imgUrl
        myImg.setAttribute('width', 'auto')
        myImg.setAttribute('height', '200px')
        console.log(myImg)
        if (todo.completed) {
            myTitle.style.textDecoration = 'line-through'
            myParagraph.style.textDecoration = 'line-through'
        }

        newDiv.appendChild(myTitle)
        newDiv.appendChild(myParagraph)
        newDiv.appendChild(myImg)
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


// https://i.ytimg.com/vi/tst7V_Ffn7Q/maxresdefault.jpg