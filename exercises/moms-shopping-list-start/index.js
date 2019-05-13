document.getElementById('add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    let addedItem = document.getElementById('title').value;
    let list = document.getElementById('list');
    let li = document.createElement('li');
    let newDiv = document.createElement('div');
    let xButton = document.createElement('button');
    let editButton = document.createElement('button');
    
    newDiv.innerText = `${addedItem}`;
    xButton.innerText = "X";
    editButton.innerText = "edit";
    
    newDiv.setAttribute('class', 'item');
    xButton.setAttribute('id', 'delete');
    editButton.setAttribute('id', 'change');
    xButton.addEventListener('click', function(e) {
        e.preventDefault
        this.parentNode.remove();
    })
    // editButton.addEventListener.length('submit', function() {
    //     this.parentNode.
    // })
    
    list.appendChild(li);
    li.appendChild(newDiv);
    li.appendChild(editButton);
    li.appendChild(xButton);
})








