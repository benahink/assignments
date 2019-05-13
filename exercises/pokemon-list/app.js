const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const pokemonList = data.objects[0].pokemon
        pokemonList.map((el) => {
            let name = el.name
            let newDiv = document.createElement('div');
            newDiv.innerText = name;
            document.getElementById("pokemon").appendChild(newDiv)
        })
        
            
        
    }
}

xhr.open('GET', 'https://api.vschool.io/pokemon/', true);
xhr.send();
