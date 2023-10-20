//? This will get all active drinks and return it to external User

const client = require("../../client")

async function getAllProducts (){
    try {
        const {rows} = await client.query(`
        SELECT * FROM products 
        WHERE is_active = true
        ;`) 
        return rows 
    } catch (error) {
        console.log("error retrieving all products db/functions/products/getAllProducts.js", error)
    }
  
}

module.exports = getAllProducts