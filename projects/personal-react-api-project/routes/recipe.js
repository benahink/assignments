const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipe");

recipeRouter.get("/", (request, response, next) => {
    Recipe.find({user: request.user._id}, (err, recipes) => {
        if (err) {
            response.status(500);
            return next(err);
        }
        return response.send(recipes);
    });
});

recipeRouter.post("/", (request, response, next) => {
    const recipe = new Recipe(request.body);
    recipe.user = request.user._id;

    recipe.save((err, newRecipe) => {
        if (err) {
            response.status(500);
            return next(err);
        }
        return response.status(201).send(newRecipe);
    });
});

recipeRouter.get("/:recipeId", (request, response, next) => {
    Recipe.findOne({_id: request.params.recipeId, user: request.user._id}, (err, recipe) => {
        if (err) {
            response.status(500);
            return next(err);
        } else if (!recipe) {
            response.status(404)
            return next(new Error("No recipe item found."));
        }
        return response.send(recipe);
    });
});

recipeRouter.put("/:recipeId", (request, response, next) => {
    Recipe.findOneAndUpdate(
        {_id: req.params.todoId, user: req.user._id},
        request.body,
        {new: true },
        (err, recipe) => {
            if (err) {
                console.log("Error");
                response.status(500);
                return next(err);
            }
            return response.send(recipe);
        }
    );
});

recipeRouter.delete("/:recipeId", (request, response, next) => {
    Recipe.findOneAndRemove({_id: req.params.todoId, user: req.user._id}, (err, recipe) => {
        if (err) {
            response.status(500);
            return next(err);
        }
        return response.send(recipe);
    });
});

module.exports = recipeRouter;
