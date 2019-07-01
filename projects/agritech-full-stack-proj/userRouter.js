const express = require("express");
const userRouter = express.Router();
const User = require("./models/user.js");

userRouter.post(("/"), (request, response) => {
    const newUser =  new User(request.body);
    newUser.save((err, new_user) => {
        if(err) return response.status(500).send(err);
        return response.send(new_user);
    })
})

module.exports = userRouter;