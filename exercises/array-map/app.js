// Q1
function doubleArr(arr) {
  return arr.map((el) => el * 2)
}
console.log(doubleArr([2, 5, 100]))

// Q2
function numToStr(arr) {
    let strArr = arr.map((el) => el.toString())
    return strArr
} 
console.log(numToStr([2, 5, 100]))

// Q3
function capitalizeNames(arr) {
    const strArr = arr.map((el) => el.toLowerCase())
    const strArr2 = strArr.map((el) => el.charAt(0).toUpperCase() + el.substring(1))
    return strArr2
} 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// Q4
function nameOnlyArray(personObj) {
  const peopleArr = personObj.map((el) => el.name)
  return peopleArr
}

console.log(nameOnlyArray([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]))

// Q5
function canSee(personObj) {
  return personObj.map(el => {
    if (el.age >= 18) {
      return el.name + " can see the Matrix"
    } else {
      return el.name + " is too young!"

    }
  })

}
console.log(canSee([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]))

// Q6
function headerFunc(peopleObj) {
  return peopleObj.map(el => `<h1>${el.name}<h1/>` + `<h2> ${el.age}<h2/>`) 
}
console.log(headerFunc([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]))