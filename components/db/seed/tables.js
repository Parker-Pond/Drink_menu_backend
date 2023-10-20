const client = require("../client");

//? dotenv allows you to access information from your secret .env file
require("dotenv").config();

async function dropAllTables() {
  console.log("starting to drop all tables");

  try {
    await client.query(`
        DROP TABLE IF EXISTS cart_item;
        `);
  } catch (error) {
    console.log("error dropping cart_item table db/seed/tables.js", error);
  }
  try {
    await client.query(`
        DROP TABLE IF EXISTS cart;
        `);
  } catch (error) {
    console.log("error dropping cart table db/seed/tables.js", error);
  }
  try {
    await client.query(`
        DROP TABLE IF EXISTS users;
        `);
  } catch (error) {
    console.log("error dropping users table db/seed/tables.js", error);
  }
  try {
    await client.query(`
        DROP TABLE IF EXISTS products;
        `);
  } catch (error) {
    console.log("error dropping products table db/seed/tables.js", error);
  }

  console.log("finished dropping all tables");
}

async function createAllTables() {
    console.log("starting to create all tables")
  try {
    await client.query(`
            CREATE TABLE users(
                user_id SERIAL PRIMARY KEY,
                "first_name" VARCHAR(255) NOT NULL,
                "last_name" VARCHAR(225) NOT NULL,
                username VARCHAR(255) NOT NULL UNIQUE,
                "password" VARCHAR(255) NOT NULL,
                email VARCHAR(225),
                "is_admin" BOOLEAN DEFAULT false,
                "cart" VARCHAR[]
            );
        `);
  } catch (error) {
    console.log("error creating table users db/seed/tables.js", error);
  }
  try {
    await client.query(`
            CREATE TABLE products(
                product_id SERIAL PRIMARY KEY,
                drink_name VARCHAR(225) NOT NULL,
                base VARCHAR(255) NOT NULL,
                mixins VARCHAR[],
                is_active BOOLEAN DEFAULT true,
                is_custom BOOLEAN DEFAULT false,
                creator_id numeric DEFAULT 1
            );
        `);
  } catch (error) {
    console.log("error creating table products db/seed/tables.js", error);
  }
  try {
    await client.query(`
            CREATE TABLE cart(
                id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users (user_id),
                is_active BOOLEAN  
            );
        `);
  } catch (error) {
    console.log("error creating table cart db/seed/tables.js", error);
  }
  try {
    await client.query(`
            CREATE TABLE cart_item(
                    id SERIAL PRIMARY KEY,
                    product_id INT REFERENCES products (product_id),
                    cart_id INT REFERENCES cart (id),
                    quantity INT
            );
        `);
  } catch (error) {
    console.log("error creating table cart_item db/seed/tables.js", error);
  }
  console.log("finished creating all tables")
}

async function seedTheTables() {
  try {
    await dropAllTables();
    await createAllTables();
  } catch (error) {
    console.log("error seeding the tables db/seed/tables.js", error);
  }
}

module.exports = seedTheTables
