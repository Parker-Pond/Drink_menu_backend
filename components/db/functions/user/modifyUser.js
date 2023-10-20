const client = require("../../client")

async function updateUser(id, fields) {
    const arrayOfKeys = Object.keys(fields);
    console.log(arrayOfKeys)
    const mapOfSetStringNames = arrayOfKeys.map((key, index) => {
      return `"${key}"=$${index + 1}`;
    });
    console.log(mapOfSetStringNames)
    const setString = mapOfSetStringNames.join(", ");
console.log(setString)
    if (setString.length === 0) {
      return;
    }
  try {
    const { rows } = await client.query(`
    UPDATE users
    SET ${setString}
    WHERE "userId" = ${id}
    RETURNING *;`,Object.values(fields));
    console.log(rows[0], "!!!!!!!")
    return rows[0];
  } catch (error) {
    console.log("error updating user db/functions/user/modifyUser.js", error);
  }
}

module.exports = updateUser