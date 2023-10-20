const express = require("express");
const drinkRouter = express.Router();
const jwt = require("jsonwebtoken");

const {getAllProducts} = require("../db")
// TODO get.allDrinks add.drink modify.Drink


drinkRouter.get("/", async (req, res, next) => {
    try {
        const allDrinks = await getAllProducts()
        if (allDrinks ) {
            res.send(allDrinks)
        }
        else{
            res.send("error retrieving drinks")
        }
    } catch (error) {
        next(error)
    }
})

module.exports = drinkRouter