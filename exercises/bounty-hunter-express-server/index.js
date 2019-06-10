const express = require('express');
const app = express();
const data = require('./database.js');
const uuid = require('uuid/v4');

app.use(express.json())

app.get('/', (request, response) => {
    response.send(data)
})

app.post('/', (request, response) => {
    console.log(request)
    const newBounty = request.body;
    newBounty._id = uuid();
    data.push(newBounty)    ;
    response.send(newBounty)
})

app.delete('/:id', (request, response) => {
    data.forEach((bounty, i) => {
        if(request.params.id === bounty._id) {
            data.splice(i, 1);
        }
    })
})

app.put('/:id', (request, response) => {
    const updatedBounty = request.body;
    data.forEach(bounty => {
        if(request.params.id === bounty._id){
            return Object.assign(bounty, updatedBounty);
        }
    })
})

app.listen(8000, () => {
    console.log("server is running on port " + 8000);
})

