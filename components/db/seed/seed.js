const client = require("../client")
const seedTheTables = require("./tables")
const fillWithUsers = require("./user_seed_data")
const fillUpWithProducts = require("./menu_seed_data")

async function theBigBang(){
try {
    await  seedTheTables()
    console.log("laojidebsfkiahjebfkiqewjbfqaekijhbewqkjbewrfkwejhrbf")
    await  fillWithUsers()
    await fillUpWithProducts()
        
} catch (error) {
    ("error running db/seed/seed.js", error)
}
}

theBigBang()