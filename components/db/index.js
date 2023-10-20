// TODO: all imports will be organized into their respective sections 

//TODO: USER FUNCTIONS 
const createNewUser = require("./functions/user/createUser")
const deleteUser = require("./functions/user/deleteUser")
const updateUser = require("./functions/user/modifyUser")
//TODO: CART FUNCTIONS

//TODO: PRODUCT FUNCTIONS 
const createProduct = require("./functions/products/createProduct")
const getAllProducts = require("./functions/products/getAllProducts")



module.exports = {createNewUser, deleteUser, updateUser, createProduct, getAllProducts}