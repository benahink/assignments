const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function myFunction() {
    vegetables.pop()
    fruit.shift()
    const idxFruit = fruit.indexOf("orange")
    fruit.push(idxFruit)
    vegetables.push(vegetables.length)
    const food = fruit.concat(vegetables)
    food.splice(4, 2)
    food.reverse()
    const newStr = food.join(',')
    return vegetables, fruit, food, newStr
}

console.log(myFunction())
