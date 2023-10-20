const client = require("../../client")

async function createNewUser({
  first_name,
  last_name,
  username,
  password,
  is_admin,
  email,
}) {
  try {
    if (is_admin !== true && is_admin !== false) {
      is_admin = false;
    }

    const { rows } = await client.query(
      `
    INSERT INTO users( "first_name", "last_name", username, password, is_admin, email)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
      [first_name, last_name, username, password, is_admin, email]
    );
    console.log("user created");
    return rows;
  } catch (error) {
    console.error("createNewUser error in users.js", error);
  }
}

module.exports = createNewUser;
