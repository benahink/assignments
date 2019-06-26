const express = require("express");
const User = require("../models/user.js");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post(("/signup"), (request, response, next) => {
    //.findOne() will send back a user object or null if it does not find user
    User.findOne({email: request.body.email}, (err, existingUser) => {
        if(err) {
            response.status(500);
            return next(err);
        }

        if(existingUser !== null) {
            response.status(400);
            return next(new Error("That email already exists."));
        }

        const newUser = new User(request.body);
        newUser.save((err, user) => {
            if (err) {
                response.status(500);
                return next(err);
            }

            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return response.status(201).send({token: token, user: user.toObject(), success: true});
        });
    });
});

authRouter.post(("/login"), (request, response, next) => {
    User.findOne({email: request.body.email.toLowerCase()}, (err, user) => {
        if(err) return next(err);
        
        if(!user || user.password !== request.body.password) {
            response.status(403);
            return next(new Error("Email and/or password is incorrect"));
        } 
        
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return response.send({sucess: true, user: user.toObject(), token});
    });
});

module.exports = authRouter;