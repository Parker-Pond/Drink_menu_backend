const client = require("../../client")

async function createProduct({drink_name, base, mixins, is_active, is_custom, creator_id}){
    try {
        await client.query(`
        INSERT INTO products(drink_name, base, mixins, is_active, is_custom, creator_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;`,
        [drink_name, base, mixins, is_active, is_custom, creator_id]
        )
    } catch (error) {
        console.log("error creating new product db/function/products/createProduct.js", error)
    }
}
module.exports = createProduct