const client = require("../../client")

async function deleteUserById(idValue){
    try {
        const { rows } = await client.query(
            `
                  DELETE FROM users
                  WHERE "userId" = $1;
              `,
            [idValue]
          );
      
          return rows[0];
    } catch (error) {
        console.log("ERROR DELETING REVIEW BY ID db/delete.js", error)
    }
}

module.exports = deleteUserById