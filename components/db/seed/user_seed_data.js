const client = -require("../client");
const createNewUser = require("../functions/user/createUser");

async function fillWithUsers(){
console.log("starting to fill database with users")
try {
  createNewUser({
    username: "admin ",
    password: "password",
    first_name: "Johnny ",
    last_name: "Devito",
    email: "JD@email.com",
    is_admin: "TRUE",
  });
} catch (error) {
  console.log("error creating user");
}

try {
  createNewUser({
    username: "JohnnyBoy",
    password: "password",
    first_name: "John",
    last_name: "Piltredge",
    email: "Default@email.com",
    is_admin: "FALSE",
  });
} catch (error) {
  console.log("error creating user");
}

try {
  createNewUser({
    username: "KingZayphod",
    password: "password",
    first_name: "Zeyphod",
    last_name: "Beeblebrox",
    email: "2heads@probability.drive",
    is_admin: "FALSE",
  });
} catch (error) {
  console.log("error creating user");
}

try {
  createNewUser({
    username: "Parker",
    password: "password",
    first_name: "Parker",
    last_name: "Pond",
    email: "default@email.com",
    is_admin: "FALSE",
  });
} catch (error) {
  console.log("error creating user");
}

try {
  createNewUser({
    username: "SoccorMom",
    password: "password",
    first_name: "mom",
    last_name: "Soccor ",
    email: "default@email.com",
    is_admin: "FALSE",
  });
} catch (error) {
  console.log("error creating user");
}

try {
  createNewUser({
    username: "GettingMilk",
    password: "password",
    first_name: "Dad",
    last_name: "deadbeat",
    email: "default@email.com",
    is_admin: "FALSE",
  });
} catch (error) {
  console.log("error creating user");
}

console.log("finished filling in user data")
}

module.exports = fillWithUsers