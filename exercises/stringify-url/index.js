const myURL = "http://localhost:8080/monkeys"
const myQuery = {
            color: "black",
            species: "howler"
}

stringfy = function(url, query) {
    console.log("url=", url)
    console.log("query=", query)
    const result = `${url}/search?title=${query.color}&length=${query.species}`
    return result
}
  
console.log(stringfy(myURL, myQuery))

//part two
const myQueryString = stringfy(myURL, myQuery)





